import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { AppointmentCTA } from "@/components/site/AppointmentCTA";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Location } from "@/components/site/Location";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { Navbar } from "@/components/site/Navbar";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import type { ServiceKey } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [selectedService, setSelectedService] = useState<ServiceKey | "">("");

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AnnouncementBar />
        <About />
        <Services onSelectService={setSelectedService} />
        <WhyChooseUs />
        <AppointmentCTA />
        <FAQ />
        <Contact selectedService={selectedService} />
        <Location />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
