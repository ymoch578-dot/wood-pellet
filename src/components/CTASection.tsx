import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Ready to Secure Your Biomass Supply?",
  subtitle = "Let's discuss your wood pellet requirements and build a long-term supply plan tailored to your specifications.",
}: CTASectionProps) => (
  <section className="bg-primary py-16 md:py-20">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
        {title}
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
        {subtitle}
      </p>
      <Link
        to="/contact"
        className="inline-block px-8 py-3 font-semibold bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors text-sm"
      >
        Request Quotation
      </Link>
    </div>
  </section>
);

export default CTASection;
