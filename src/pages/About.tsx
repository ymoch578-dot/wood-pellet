import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-home.jpg";
import { Target, Users, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Reliability", desc: "Consistent supply through our coordinated partner network across Indonesia." },
  { icon: Users, title: "Partnership", desc: "Long-term relationships built on transparency, trust, and shared objectives." },
  { icon: TrendingUp, title: "Adaptability", desc: "Flexible specifications and volumes tailored to evolving buyer requirements." },
];

const About = () => (
  <Layout>
    <Helmet>
      <title>About Us | PT. Sukses Ekspor Mandiri - Wood Pellet Supply Partner</title>
      <meta name="description" content="PT. Sukses Ekspor Mandiri is an Indonesian biomass supply partner specializing in coordinated wood pellet production and export handling for international markets." />
    </Helmet>

    <PageHero image={heroImage} title="About Us" subtitle="A trusted Indonesian biomass supply partner for international power generation and industrial markets." />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Who We Are</h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            PT. Sukses Ekspor Mandiri is an export-oriented biomass company specializing in wood pellet supply for international markets. Our operations are structured to support consistent production standards, quality control, and reliable export logistics for buyers in South Korea, Japan, and Europe.
          </p>
          <p>
            We operate through a coordinated production and quality management framework designed to meet international specifications and compliance requirements. Each shipment is handled under defined operational standards to ensure supply continuity, product consistency, and export readiness.
          </p>
          <p>
            From production planning and quality verification to export documentation and port logistics, we provide a streamlined and accountable supply process — delivering stability, transparency, and dependable performance to our international partners.
          </p>
        </div>
      </div>
    </section>

    <section className="section-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-lg p-8 border border-border text-center">
              <v.icon className="w-10 h-10 text-primary mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection title="Let's Build a Long-Term Partnership" subtitle="We're ready to discuss how our supply network can serve your biomass requirements." />
  </Layout>
);

export default About;
