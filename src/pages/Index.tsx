import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ThemeProvider } from "next-themes";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background">
        <Navbar />
        <HeroSection />
      </main>
    </ThemeProvider>
  );
};

export default Index;