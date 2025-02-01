import { PrismaClient } from "@prisma/client";

declare const global: Global & { prisma?: PrismaClient };

export let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env["NODE_ENV"] === "development") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}
