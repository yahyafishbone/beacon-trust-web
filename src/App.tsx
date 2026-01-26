/*import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center p-6">
      <h1 className="text-5xl font-extrabold mb-4">🚧 Coming Soon</h1>
      <p className="text-lg text-blue-100 max-w-lg mb-8">
        Our website is currently under construction. We’re working hard to bring
        you an amazing experience. Please check back soon!
      </p>

      <div className="mt-4 space-x-4">
        <a
          href="mailto:contact@beacontrust.co.ke"
          className="inline-block bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default App;
*/
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyBeaconTrust from "./pages/WhyBeaconTrust";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import OngoingProjects from "./pages/OngoingProjects";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-beacontrust" element={<WhyBeaconTrust />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
