import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import sustainImg from "@/assets/sustainability.jpg";
import { Leaf, Recycle, TreePine } from "lucide-react";

const pillars = [
  { icon: TreePine, title: "Responsible Sourcing", desc: "We prioritize partner facilities that utilize wood residues, plantation timber by-products, and sustainably managed feedstock sources." },
  { icon: Recycle, title: "Circular Economy", desc: "By converting wood waste and residues into energy-dense pellets, we support the transition from fossil fuels to renewable biomass energy." },
  { icon: Leaf, title: "Environmental Stewardship", desc: "We encourage best practices among our partner network to minimize environmental impact throughout the production process." },
];

const Sustainability = () => (
  <Layout>
    <Helmet>
      <title>Sustainability | PT. Sukses Ekspor Mandiri</title>
      <meta name="description" content="Our commitment to sustainable biomass sourcing, responsible partner selection, and environmental stewardship in the Indonesian wood pellet supply chain." />
    </Helmet>

    <PageHero image={sustainImg} title="Sustainability" subtitle="Committed to responsible biomass sourcing and environmental stewardship." />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Approach</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-14">
          Sustainability is integral to our supply philosophy. We work closely with our partner facilities to promote responsible sourcing practices and support the global transition to renewable energy. While we do not claim specific certifications, we are committed to working with partners who share our values of environmental responsibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="text-center bg-card rounded-lg p-8 border border-border">
              <p.icon className="w-10 h-10 text-primary mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Supporting the Energy Transition</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Biomass wood pellets play a critical role in reducing carbon emissions from power generation. As a supply partner, we are proud to contribute to the renewable energy goals of our buyers across South Korea, Japan, and Europe — helping power plants transition away from fossil fuel dependency.
        </p>
      </div>
    </section>

    <CTASection title="Discuss Sustainable Supply Options" subtitle="Let us show you how our partner network can support your renewable energy procurement goals." />
  </Layout>
);

export default Sustainability;
