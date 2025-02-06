import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import CommunityClub from "./pages/CommunityClub";
import ClassConnections from "./pages/ClassConnections";
import ClubsAndSocieties from "./pages/ClubsAndSocieties";
import Events from "./pages/Events";
import Forums from "./pages/Forums";
import CampusMap from "./pages/CampusMap";
import CampusDating from "./pages/CampusDating";
import UserProfile from "./pages/UserProfile";
import Verification from "./pages/Verification";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/community" element={<CommunityClub />} />
          <Route path="/classes" element={<ClassConnections />} />
          <Route path="/clubs" element={<ClubsAndSocieties />} />
          <Route path="/events" element={<Events />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/map" element={<CampusMap />} />
          <Route path="/dating" element={<CampusDating />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;