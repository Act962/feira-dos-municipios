import { About } from "@/components/about";
import Expositores from "@/components/expositores/expositores";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import Layout from "@/components/layout/layout";
import { Localization } from "@/components/localization";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Localization />
      <Gallery />
      <Expositores />
    </Layout>
  );
}
