import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = lazy(() => import("./pages/Index.tsx"));
const WorkersCompensation = lazy(() => import("./pages/WorkersCompensation.tsx"));
const PersonalInjury = lazy(() => import("./pages/PersonalInjury.tsx"));
const BookACall = lazy(() => import("./pages/BookACall.tsx"));
const ThankYou = lazy(() => import("./pages/ThankYou.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-dark" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/workers-compensation" element={<WorkersCompensation />} />
              <Route path="/personal-injury" element={<PersonalInjury />} />
              <Route path="/book-a-call" element={<BookACall />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
