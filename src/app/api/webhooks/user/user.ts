import {prisma} from "@/lib/prisma";
import { IncomingHttpHeaders } from "http";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import {Webhook, WebhookRequiredHeaders} from 'svix'


const WebhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

type EventType = "user.created" | "user.updated" | "*";
type Event = {
  data: EventDataType;
  object: "event";
  type: EventType;
};
type EventDataType = {
  id: string;
  first_name: string;
  last_name: string;
  email_addresses: EmailAddressType[];
  primary_email_address_id: string;
  attributes: Record<string, string | number>;
};
type EmailAddressType = {
  id: string;
  email_address: string;
};

async function handler(request: Request) {
  const payload = await request.json();
  const headerList = headers();
  const heads = {
    "svix-id": (await headerList).get("svix-id"),
    "svix-timestamp": (await headerList).get("svix-timestamp"),
    "svix-signature": (await headerList).get("svix-signature"),
  };
  const wh = new Webhook(WebhookSecret);
  let evt: Event | null = null;
  try {
    evt = wh.verify(
        JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }
  const eventType: EventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
  const {
    id,
    first_name,
    last_name,
    email_addresses,
    primary_email_address_id,
    ...attributes
  } = evt.data;

    await prisma.user.upsert({
      where: {
        external: id as string,
      },
      create: {
        external: id as string,
        attributes,
      },
      update: {
        attributes,
      },
    });
  }
    return NextResponse.json({}, { status: 200 });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
