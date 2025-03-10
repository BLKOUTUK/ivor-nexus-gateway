
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Community from "./pages/Community";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              } 
            />
            <Route path="/auth" element={<Auth />} />
            <Route 
              path="/resources" 
              element={
                <MainLayout>
                  <Resources />
                </MainLayout>
              } 
            />
            <Route 
              path="/events" 
              element={
                <MainLayout>
                  <Events />
                </MainLayout>
              } 
            />
            <Route 
              path="/community" 
              element={
                <MainLayout>
                  <Community />
                </MainLayout>
              } 
            />
            <Route 
              path="/about" 
              element={
                <MainLayout>
                  <About />
                </MainLayout>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
