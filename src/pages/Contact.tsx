import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | PT. Sukses Ekspor Mandiri - Request Quotation</title>
        <meta name="description" content="Contact PT. Sukses Ekspor Mandiri to request a quotation or discuss your wood pellet supply plan. We serve buyers in South Korea, Japan, and Europe." />
      </Helmet>

      <section className="bg-primary py-20 pt-32">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg">
            Ready to discuss your biomass supply requirements? Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Request Quotation</h2>
              {submitted ? (
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">Thank You</h3>
                  <p className="text-muted-foreground">Your inquiry has been received. Our team will respond within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company *</label>
                      <input
                        required
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    >
                      <option value="">Select subject</option>
                      <option value="quotation">Request Quotation</option>
                      <option value="supply-plan">Discuss Supply Plan</option>
                      <option value="specifications">Product Specifications</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please describe your requirements, including estimated volume, preferred specifications, and delivery schedule."
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md text-sm hover:bg-primary/90 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" strokeWidth={1.5} />
                    <div className="text-sm text-muted-foreground">
                      Malang, Indonesia
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" strokeWidth={1.5} />
                    <div className="text-sm text-muted-foreground">
                      sales@biomass.suksesekspormandiri.com
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" strokeWidth={1.5} />
                    <div className="text-sm text-muted-foreground">
                      +62 857 6387 6233
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We respond to all inquiries within 1–2 business days. For urgent requirements, please indicate in your message.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">What to Include</h3>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>• Estimated volume requirements</li>
                  <li>• Preferred specifications</li>
                  <li>• Delivery schedule / timeline</li>
                  <li>• Destination port</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
