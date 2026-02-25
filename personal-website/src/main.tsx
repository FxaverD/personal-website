import { Toaster } from 'sonner';
import { Navigation } from './app/component/navigation';
import { Hero } from './app/component/hero';
import { About } from './app/component/about';
import { Skills } from './app/component/skills';
import { Portfolio } from './app/component/portfolio';
import { Experience } from './app/component/experience';
import { Testimonials } from './app/component/testimonials';
import { Contact } from './app/component/contact';
import { Footer } from './app/component/footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    
  ]
)
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);