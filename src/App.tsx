
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('🎯 App.tsx: App component rendering');

  useEffect(() => {
    console.log('🔧 App.tsx: useEffect running - handling GitHub Pages routing');
    console.log('🔍 App.tsx: Current search params:', window.location.search);
    console.log('🔍 App.tsx: Current hostname:', window.location.hostname);
    
    // Handle GitHub Pages routing
    if (window.location.search.includes('/?/')) {
      console.log('🔄 App.tsx: Redirecting GitHub Pages route');
      const redirect = window.location.search.replace('/?/', '/').replace(/&/g, '&');
      window.history.replaceState(null, '', window.location.pathname + redirect + window.location.hash);
      console.log('✅ App.tsx: Route redirect completed');
    }
  }, []);

  // Determine if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io') || window.location.hostname.includes('githubusercontent.com');
  const basename = isGitHubPages ? '/analyze-and-bloom' : '';
  
  console.log('🔍 App.tsx: Is GitHub Pages:', isGitHubPages);
  console.log('🔍 App.tsx: Basename:', basename);

  console.log('🎨 App.tsx: Rendering main app structure');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
