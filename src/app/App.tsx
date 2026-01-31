import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/app/pages/HomePage';
import { MissionPage } from '@/app/pages/MissionPage';
import { InitiativesPage } from '@/app/pages/InitiativesPage';
import { NewsPage } from '@/app/pages/NewsPage';
import { AwardsPage } from '@/app/pages/AwardsPage';
import { PartnersPage } from '@/app/pages/PartnersPage';
import { ContactPage } from '@/app/pages/ContactPage';

export default function App() {
  return ( 
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/initiatives" element={<InitiativesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
