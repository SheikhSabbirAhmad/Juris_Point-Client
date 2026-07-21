import Banner from "@/components/Banner";
import OurPracticeArea from "@/components/OurPracticeArea";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <OurPracticeArea />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}