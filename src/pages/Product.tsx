import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import pelletsImage from "@/assets/wood-pellets.jpg";

const specs = [
  { param: "Diameter", value: "6 – 8 mm", note: "Customizable" },
  { param: "Length", value: "10 – 30 mm", note: "Customizable" },
  { param: "Calorific Value", value: "≥ 4,000 kcal/kg", note: "Customizable" },
  { param: "Moisture Content", value: "≤ 10%", note: "Customizable" },
  { param: "Ash Content", value: "≤ 3%", note: "Customizable" },
  { param: "Bulk Density", value: "≥ 600 kg/m³", note: "Customizable" },
];

const Product = () => (
  <Layout>
    <Helmet>
      <title>Industrial Wood Pellet | PT. Sukses Ekspor Mandiri</title>
      <meta name="description" content="High-quality industrial wood pellets from Indonesia with customizable specifications. Biomass fuel for power generation and co-firing applications." />
    </Helmet>

    <PageHero image={pelletsImage} title="Industrial Wood Pellet" subtitle="Premium biomass fuel sourced from Indonesia's integrated supply network." />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Product Overview</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our wood pellets are produced at selected partner facilities across Indonesia, utilizing sustainably managed wood residues and plantation timber by-products.
              </p>
              <p>
                Designed for industrial power generation and co-firing applications, our wood pellets deliver consistent energy output with specifications that can be tailored to match your boiler and combustion system requirements.
              </p>
              <p>
                All specifications shown are indicative and fully customizable based on buyer requirements. Detailed specifications are available upon request.
              </p>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-lg border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-2">Applications</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Power plant biomass fuel</li>
                <li>• Co-firing with coal in thermal power plants</li>
                <li>• Industrial steam and heat generation</li>
                <li>• District heating systems</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Typical Specifications</h2>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-5 py-3 text-sm font-semibold">Parameter</th>
                    <th className="text-left px-5 py-3 text-sm font-semibold">Value</th>
                    <th className="text-right px-5 py-3 text-sm font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((s, i) => (
                    <tr key={s.param} className={i % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                      <td className="px-5 py-3.5 text-sm font-medium text-foreground">{s.param}</td>
                      <td className="px-5 py-3.5 text-sm text-muted-foreground">{s.value}</td>
                      <td className="px-5 py-3.5 text-sm text-right">
                        <span className="bg-accent/15 text-accent px-2 py-0.5 rounded text-xs font-semibold">{s.note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic">
              * Specifications are indicative and customizable upon request. Final specifications will be confirmed in the supply agreement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CTASection title="Need Custom Specifications?" subtitle="Contact us to discuss your specific wood pellet requirements. We'll work with our partner facilities to deliver exactly what you need." />
  </Layout>
);

export default Product;
