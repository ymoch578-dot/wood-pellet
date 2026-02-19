import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-home.jpg";
import pelletsImage from "@/assets/wood-pellets.jpg";
import logisticsImage from "@/assets/export-logistics.jpg";
import { Shield, Globe, Handshake, BarChart3, ClipboardList } from "lucide-react";

const strengths = [
  {
    icon: ClipboardList,
    title: "Structured Supply Management",
    desc: "Operational planning designed to ensure stable production capacity and consistent delivery performance.",
  },
  {
    icon: Shield,
    title: "Quality Monitoring",
    desc: "Systematic quality checks before export to meet your specifications and international standards.",
  },
  {
    icon: Handshake,
    title: "Partnership Oriented",
    desc: "We prioritize long-term relationships built on transparency, reliability, and mutual growth.",
  },
  {
    icon: BarChart3,
    title: "Flexible Specifications",
    desc: "Customizable wood pellet specifications based on buyer requirements. Tailored to your operational needs.",
  },
];

const Index = () => (
  <Layout>
    <Helmet>
      <title>Wood Pellet Exporter Indonesia | PT. Sukses Ekspor Mandiri</title>
      <meta
        name="description"
        content="PT. Sukses Ekspor Mandiri — your reliable Indonesian wood pellet supply partner. Coordinated production and export handling for South Korea, Japan, and Europe."
      />
    </Helmet>

    {/* Hero */}
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="Indonesian biomass supply network" className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            Wood Pellet Exporter Indonesia
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your Reliable Indonesian Biomass Supply Partner
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Structured wood pellet production and export operations from Indonesia, serving power plants and industrial buyers worldwide.
          </p>
        </div>
      </div>
    </section>

    {/* Strengths */}
    <section className="section-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg">
            We operate under a structured production and export management system — from production oversight to documentation and port logistics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((s) => (
            <div key={s.title} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow text-center">
              <s.icon className="w-10 h-10 text-primary mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Product Preview */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Industrial Wood Pellet</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Premium Biomass Fuel for Power Generation
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Our wood pellets are produced under controlled production standards in Indonesia, with specifications customizable to match your boiler and co-firing requirements.
            </p>
            <ul className="space-y-3 mb-8">
              {["Customizable calorific value & moisture content", "Consistent diameter & length specifications", "Bulk shipment via major Indonesian ports", "Specification available upon request"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/product" className="text-primary font-semibold text-sm hover:underline">
              View Product Details →
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={pelletsImage} alt="Industrial wood pellets" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Logistics */}
    <section className="relative py-20 md:py-28 overflow-hidden">
      <img src={logisticsImage} alt="Export logistics" className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Export Handling</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Serving South Korea, Japan & Europe
          </h2>
          <p className="text-primary-foreground/85 text-lg mb-8 leading-relaxed">
            Our export operations are structured to support seamless international biomass supply.
          </p>
          <Link
            to="/export-markets"
            className="px-8 py-3 text-sm font-semibold bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
          >
            Explore Export Markets
          </Link>
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Index;
