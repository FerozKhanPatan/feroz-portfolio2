import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'sonner';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <div className="w-full overflow-x-hidden">
          <div id="home">
            <Hero />
          </div>
          <About />
          <Projects />
          <Contact />
        </div>
      </Layout>
      <Toaster 
        position="top-right"
        expand={false}
        richColors
        closeButton
      />
    </AuthProvider>
  );
}

export default App;