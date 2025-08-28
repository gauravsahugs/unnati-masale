import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ComingSoon from "./pages/ComingSoon";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Quality from "./pages/Quality";
import ErrorBoundary from "./pages/ErrorBoundary";
import { ExternalLink } from "lucide-react";
import flipkartLogo from "@/assets/flipkart.png"; // Make sure this exists
import blinkitLogo from "@/assets/blinkit.png";   // Make sure this exists

const queryClient = new QueryClient();

// Flipkart Shop Banner Component (fixed to top, always visible)
function FlipkartBanner() {
  return (
    <div
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-primary/90 to-accent/90 text-white py-3 px-4 flex items-center justify-center gap-4 shadow-lg z-[1000]"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <span className="font-semibold text-lg flex items-center gap-2">
        <img
          src={flipkartLogo}
          alt="Flipkart"
          className="h-14 w-auto inline-block mr-2"
          style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
            objectFit: "contain",
          }}
        />
        Shop our spices on Flipkart
      </span>
      <a
        href="https://www.flipkart.com/search?q=unnati+masale"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 inline-flex items-center bg-white text-primary font-bold px-4 py-1.5 rounded-full shadow hover:bg-accent hover:text-white transition-colors"
        style={{ textDecoration: "none" }}
      >
        Shop Now
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
}

// Blinkit Coming Soon Banner Component (floating bottom left)
function BlinkitBanner() {
  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <div className="bg-gradient-to-r from-green-500/90 to-lime-400/90 text-white py-2 px-4 flex items-center gap-3 rounded-xl shadow-lg">
        <img
          src={blinkitLogo}
          alt="Blinkit"
          className="h-10 w-auto inline-block"
          style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
            objectFit: "contain",
          }}
        />
        <span className="font-semibold text-base animate-pulse">We are coming soon on Blinkit</span>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Flipkart Banner fixed at the top, always visible */}
        <FlipkartBanner />
        {/* Add padding-top to prevent content being hidden behind the fixed banner */}
        <div style={{ paddingTop: "80px" }}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} errorElement={<ErrorBoundary />} />
              <Route path="/coming-soon" element={<ComingSoon />} errorElement={<ErrorBoundary />} />
              <Route path="/privacy" element={<Privacy />} errorElement={<ErrorBoundary />} />
              <Route path="/terms" element={<Terms />} errorElement={<ErrorBoundary />} />
              <Route path="/quality" element={<Quality />} errorElement={<ErrorBoundary />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<ErrorBoundary />} />
            </Routes>
          </HashRouter>
        </div>
        {/* Blinkit Banner floating at the bottom left */}
        <BlinkitBanner />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
