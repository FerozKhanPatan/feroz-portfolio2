import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  try {
    return (
      <>
        <Layout>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </Layout>
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </>
    );
  } catch (e) {
    return <div className="text-red-500 p-10">Error: {e.message}</div>;
  }
}
export default App;