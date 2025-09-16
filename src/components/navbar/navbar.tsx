import Image from "next/image";
import Link from "next/link";

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
    <header className="fixed w-full top-0 z-50 py-6 px-8 bg-[#fae8c3]">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <button>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={145}
              height={120}
              className="bg-cover"
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

        <button>Faça sua incrição</button>
      </div>
    </header>
  );
}
