import Header from "./components/Header";
import Hero from "./components/sects/Hero";
import About from "./components/sects/About";
import Services from "./components/sects/Services";
import Skills from "./components/sects/Skills";
import Projects from "./components/sects/Projects";
import Cta from "./components/sects/Cta";
import Form from "./components/Form";
import Footer from "./components/sects/Footer";
import { ShowForm, FormProvider } from "./contexts/ShowForm";
import { useContext } from "react";

function AppContent() {
  const { showForm } = useContext(ShowForm);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Cta />
      <Footer />
      {showForm && <Form />}
    </>
  );
}

export default function App() {
  return (
    <FormProvider>
      <AppContent />
    </FormProvider>
  );
}
