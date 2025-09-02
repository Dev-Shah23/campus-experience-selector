import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ThemeProvider } from "next-themes";

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowAnimation(false), 2500); // Show animation for 2.5s
  }, []);

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <main className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
        {/* Full-screen Logo Animation */}
        <AnimatePresence>
          {showAnimation && (
            <motion.div
              className="absolute flex items-center justify-center w-full h-full bg-background z-50"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src="public\WhatsApp_Image_2025-02-05_at_23.14.21-removebg-preview.png" // Replace with actual logo path
                alt="Logo"
                className="w-32 h-32"
                initial={{ scale: 1 }}
                animate={{ scale: 15 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show content ONLY after animation completes */}
        {!showAnimation && (
          <div className="relative w-full">
            <Navbar />
            <HeroSection />
          </div>
        )}
      </main>
    </ThemeProvider>
  );
};

export default Index;
