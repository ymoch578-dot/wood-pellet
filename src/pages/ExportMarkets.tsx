import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import logisticsImg from "@/assets/export-logistics.jpg";

const markets = [
  {
    region: "South Korea",
    desc: "Supporting Korea's Renewable Portfolio Standard (RPS) with reliable biomass fuel supply for co-firing and dedicated biomass power generation.",
    points: ["RPS-compliant supply coordination", "Major Korean port delivery", "Long-term supply agreements"],
  },
  {
    region: "Japan",
    desc: "Serving Japan's expanding biomass power sector under the Feed-in Tariff (FIT) program with consistent, specification-compliant wood pellets.",
    points: ["FIT-eligible biomass fuel supply", "Japanese port delivery coordination", "Quality documentation for Japanese standards"],
  },
  {
    region: "Europe",
    desc: "Contributing to European renewable energy targets with sustainable biomass fuel for power generation and industrial heating applications.",
    points: ["European port delivery", "EU sustainability framework alignment", "Flexible volume arrangements"],
  },
];

const ExportMarkets = () => (
  <Layout>
    <Helmet>
      <title>Export Markets | PT. Sukses Ekspor Mandiri</title>
      <meta name="description" content="PT. Sukses Ekspor Mandiri serves wood pellet buyers in South Korea, Japan, and Europe with coordinated export handling from Indonesian ports." />
    </Helmet>

    <PageHero image={logisticsImg} title="Export Markets" subtitle="Serving biomass buyers across Asia and Europe with coordinated Indonesian supply." />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Markets We Serve</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We manage export logistics from Indonesia to key biomass markets, with shipments coordinated through major Indonesian ports for efficient and timely delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((m) => (
            <div key={m.region} className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="bg-primary p-5">
                <h3 className="font-heading text-xl font-bold text-primary-foreground">{m.region}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.desc}</p>
                <ul className="space-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">Export Logistics</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Our export handling covers the complete documentation and logistics chain: from production coordination at partner facilities, quality verification, inland transport, port loading, to vessel coordination for international shipment.
          </p>
          <p>
            We work with established freight and shipping partners to ensure competitive rates and reliable scheduling. Shipments are coordinated through major Indonesian ports including those in Kalimantan, Sumatra, and Java.
          </p>
          <p>
            Specification available upon request. Our team is prepared to discuss your specific volume, scheduling, and delivery requirements.
          </p>
        </div>
      </div>
    </section>

    <CTASection title="Expand Your Supply Sources" subtitle="Discuss how Indonesian wood pellets can complement your biomass procurement strategy." />
  </Layout>
);

export default ExportMarkets;
