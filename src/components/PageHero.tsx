interface PageHeroProps {
  image: string;
  title: string;
  subtitle: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => (
  <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/85 font-body leading-relaxed">
        {subtitle}
      </p>
    </div>
  </section>
);

export default PageHero;
