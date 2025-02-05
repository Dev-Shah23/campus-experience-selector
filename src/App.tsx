import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import CommunityClub from "@/pages/CommunityClub";
import ClassConnections from "@/pages/ClassConnections";
import ClubsAndSocieties from "@/pages/ClubsAndSocieties";
import Events from "@/pages/Events";
import CampusMap from "@/pages/CampusMap";
import Forums from "@/pages/Forums";
import CampusDating from "@/pages/CampusDating";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/community" element={<CommunityClub />} />
        <Route path="/community/classes" element={<ClassConnections />} />
        <Route path="/community/clubs" element={<ClubsAndSocieties />} />
        <Route path="/community/events" element={<Events />} />
        <Route path="/community/map" element={<CampusMap />} />
        <Route path="/community/forums" element={<Forums />} />
        <Route path="/dating" element={<CampusDating />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;