import { Footer } from "../footer";
import { Navbar } from "../navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex flex-col min-h-screen ">
      <Navbar />
      <main className="h-full flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
