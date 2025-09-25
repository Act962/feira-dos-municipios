import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/buttons";

const links = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Sobre",
    href: "/",
  },
  {
    name: "Expositores",
    href: "/",
  },
  {
    name: "Notícias",
    href: "/",
  },
];

export function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 py-6 px-4 bg-[#fae8c3]">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <button>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={145}
              height={120}
              className="bg-cover w-[120px]"
            />
          </Link>
        </button>

        <nav className="hidden md:flex gap-4 items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={`link-${link.name}`}
              className="font-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/inscricao">
          <button
            className="bg-[url('/vector.png')] bg-contain bg-no-repeat px-4 h-8 sm:h-10 w-[140px] sm:w-[200px] cursor-pointer font-bold flex flex-row items-center justify-center gap-2 transition-all hover:opacity-85 text-white text-xs"
            aria-label="Vet todas"
          >
            Faça sua inscrição
          </button>
        </Link>
      </div>
    </header>
  );
}
