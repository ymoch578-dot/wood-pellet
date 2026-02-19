import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-lg font-bold mb-4">Wood Pellet Indonesia</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            A trusted Indonesian wood pellet company committed to consistent production quality and dependable export execution worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/product", label: "Product" },
              { to: "/supply-quality", label: "Supply & Quality" },
              { to: "/sustainability", label: "Sustainability" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-80 hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Export Markets</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>South Korea</li>
            <li>Japan</li>
            <li>Europe</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Contact</h4>
          <p className="text-sm opacity-80 leading-relaxed">
            Malang Regency, East Java Province Indonesia<br />
            <span className="inline-flex items-center gap-1.5 mt-1"><Mail className="w-3.5 h-3.5" strokeWidth={1.5} />sales@biomass.suksesekspormandiri.com</span>
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-5 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
          >
            Request Quotation
          </Link>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs opacity-60">
        © {new Date().getFullYear()} PT. Sukses Ekspor Mandiri. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
