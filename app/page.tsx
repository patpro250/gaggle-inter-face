import BrandVideoCard from "@/component2/web/branding/page";
import HeroBanner from "@/component2/web/burner/page";
import CallToAction from "@/component2/web/calltoaction/page";
import FeaturesSection from "@/component2/web/features/page";
import Navbar from "@/component2/web/nav/page";
import PlansSection from "@/component2/web/plan/page";
import TestimonialsSection from "@/component2/web/testmony/page";
import Footer from "./catalog/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'GaggleNiti | Smart Library Management System',
  description:
    'GaggleNiti helps schools and institutions manage books, track borrowing, and analyze library usage with ease and efficiency.',
  keywords: [
    'library management',
    'school library',
    'book tracking system',
    'GaggleNiti',
    'library software',
    'digital library',
    'library analytics',
    'library automation',
    'library management system for Rwanda',
    'NitiBook Rwanda',
    'library management system for schools',
    'library management system for institutions',
    'library management system for universities',
    'library management system for colleges',
    'library management system for public libraries',
    'library management system for private libraries',
    'library management system for community libraries',
    'library management system for academic libraries',
    'library management system for research libraries',
    'library management system for special libraries',
    'library management system for digital libraries',
    'library management system for e-books',
    'library management system for mobile libraries',
    'library management system for online libraries',
    'library management system for remote libraries',
    'library management system for virtual libraries',
    'library management system for hybrid libraries',
    'GaggleNiti library management',
    'GaggleNiti library software Rwanda',
    'GaggleNiti Rwanda',
    'student reading tracker',
  ],
  authors: [{ name: 'GaggleNiti Team', url: 'https://app.gaggleniti.com' }],
  creator: 'GaggleNiti',
  publisher: 'GaggleNiti',
  openGraph: {
    title: 'GaggleNiti – Smart Library Management',
    description:
      'Manage, track, and analyze your library’s performance with GaggleNiti’s intuitive tools.',
    url: 'https://app.gaggleniti.com',
    siteName: 'GaggleNiti',
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://gaggleniti.com'),
};

const Home = () => {
  return (
    <div className=" bg-amber-0 overflow-y-scroll h-screen">
      <Navbar />

      <HeroBanner />

      <FeaturesSection />

      <PlansSection />

      <TestimonialsSection />

      <BrandVideoCard />

      <CallToAction />

      <Footer />
    </div>
  );
};

export default Home;
