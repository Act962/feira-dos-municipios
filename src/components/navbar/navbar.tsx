import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/buttons";

const links = [
  {
    name: "Início",
    href: "#home",
  },
  {
    name: "Sobre",
    href: "#about",
  },
  {
    name: "Expositores",
    href: "#expositores",
  },
  {
    name: "Notícias",
    href: "#news",
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
              className="font-sm group flex flex-col  w-fit"
            >
              <span>{link.name}</span>
              <div
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-orange`}
              />
            </Link>
          ))}
        </nav>

        <Link href="/inscricao">
          <button
            className="bg-[url('/vector.png')] bg-contain bg-no-repeat px-4 h-9 sm:h-10 w-[170px] sm:w-[200px] cursor-pointer font-bold flex flex-row items-center justify-center gap-2 transition-all hover:opacity-85 text-white text-xs"
            aria-label="Vet todas"
          >
            Faça sua inscrição
          </button>
        </Link>
      </div>
    </header>
  );
}
