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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
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
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
