import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "./components/Card";
import About from "./components/About";
import Service from "./components/Service";
import WebsiteSEO from "./components/WebsiteSEO";
import PricingPlan from "./components/PricingPlan";
import SEOBrand from "./components/SEOBrand";
import OurBlog from "./components/OurBlog";
import HomeBanner from "./components/HomeBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <HomeBanner/>
  <Card/>
  <About/>
  <Service/>
  <WebsiteSEO/>
  <PricingPlan/>
  <SEOBrand/>
  <OurBlog/>
  </>
  );
}
