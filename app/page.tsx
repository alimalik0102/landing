import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Faq from "@/components/Faq";
import AuditCta from "@/components/AuditCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Problem />
        <Services />
        <Process />
        <Results />
        <Faq />
        <AuditCta />
      </main>
      <Footer />
    </>
  );
}
