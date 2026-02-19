import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-home.jpg";
import { Search, Factory, Ship, FileCheck } from "lucide-react";

const steps = [
  { icon: Factory, title: "Integrated Production Framework", desc: "Operations are aligned within a structured production framework designed to meet international quality and compliance standards." },
  { icon: Search, title: "Quality Control", desc: "Pre-shipment quality inspections are conducted under standardized procedures to ensure compliance with agreed specifications." },
  { icon: FileCheck, title: "Document", desc: "Complete export documentation management including certificates of analysis, packing lists, and shipping documents." },
  { icon: Ship, title: "Export & Logistics Handling", desc: "End-to-end export and logistics handling from production site to destination port, optimized for efficiency and reliability." },
];

const SupplyQuality = () => (
  <Layout>
    <Helmet>
      <title>Supply & Quality Management | PT. Sukses Ekspor Mandiri</title>
      <meta name="description" content="How PT. Sukses Ekspor Mandiri manages quality monitoring, partner coordination, and export logistics for reliable wood pellet supply from Indonesia." />
    </Helmet>

    <PageHero image={heroImage} title="Supply & Quality Management" subtitle="Coordinated production and systematic quality oversight across our structured production framework." />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Supply Chain Process</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From production management to final port delivery — every stage operates under defined standards for consistency, quality, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-5 bg-card rounded-lg p-8 border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-semibold text-accent mb-1">Step {i + 1}</div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">Risk Mitigation</h2>
        <div className="space-y-6">
          {[
            { title: "Multi-Source Production Structure", desc: "A diversified production structure reduces dependency on a single facility and supports supply continuity during seasonal fluctuations." },
            { title: "Pre-Shipment Verification", desc: "Every shipment undergoes quality checks against agreed specifications before being cleared for export, minimizing the risk of off-spec deliveries." },
            { title: "Transparent Communication", desc: "Regular supply updates and open communication channels ensure buyers are informed at every stage of the process." },
          ].map((item) => (
            <div key={item.title} className="bg-card p-6 rounded-lg border border-border text-center">
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default SupplyQuality;
