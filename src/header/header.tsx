
import Image from "next/image";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <div>
            <Image src="/next.svg" width={100} height={100}  alt="Logo" />
          </div>
          <li>Contato</li>
        </ul>
        <ul>
          <li>Entrar</li>
        </ul>
        <ul>
          <li>Entrar</li>
        </ul>
      </nav>
    </header>
  );
}
