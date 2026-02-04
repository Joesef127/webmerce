import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import DemoRequest from "@/components/DemoRequest";
import PositioningStrip from "@/components/PositioningStrip";
import WhatWeDo from "@/components/WhatWeDo";
import CoreProduct from "@/components/CoreProduct";
import WhyDifferent from "@/components/WhyDifferent";
import ClientOutputs from "@/components/ClientOutputs";
import UpcomingProducts from "@/components/UpcomingProducts";
import FounderStory from "@/components/FounderStory";
import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import EarlyAccess from "@/components/EarlyAccess";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <WhoItsFor />
      <DemoRequest />
      <PositioningStrip />
      <WhatWeDo />
      <CoreProduct />
      <WhyDifferent />
      <ClientOutputs />
      <UpcomingProducts />
      <FounderStory />
      <AboutUs />
      <EarlyAccess />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
