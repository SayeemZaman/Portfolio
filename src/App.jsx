import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Cta from "./components/Cta";
import Form from "./components/Form";
import Footer from "./components/Footer";
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

export default function App(){
  return (
    <FormProvider>
      <AppContent />
    </FormProvider>
  )
}