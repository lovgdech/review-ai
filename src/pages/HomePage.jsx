import Hero from "../components/Hero";
import Features from "../components/Features";
import UsingAiTools from "../components/UsingAiTools";
import AiTools from "../components/AiTools";
import ContactForm from "../components/ContactForm";
import Products from "../components/Products";

function HomePage() {
  return (
    <div className="w-full relative">
      <Hero />
      <Features />
      <UsingAiTools />
      <AiTools />
      <Products />
      <ContactForm />
    </div>
  );
}

export default HomePage;
