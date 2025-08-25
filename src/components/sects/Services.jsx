import SectHead from "../SectHead";
import ServiceCard from "../ServiceCard";

export default function Services() {
  return (
    <section id="services" className="sect bg-rich-black dark:bg-rich-black-2">
      <SectHead name="Services" />
      <h3 className="text-2xl text-white font-bold self-center">
        Services I Offer
      </h3>
      <div className="flex justify-center flex-wrap">
        <ServiceCard
          title="Frontend Web Dev"
          content="I can create websites using design clients provide me. I primarily make Portfolio & Landing pages, I complete each projects in 1-2 weeks. We can discuss price in messages or emails."
        />
      </div>
    </section>
  );
}
