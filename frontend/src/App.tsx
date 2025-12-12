import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocationProvider } from './contexts/LocationContext';
import { SurfTechLayout } from './components/layout/SurfTechLayout';
import { DashboardLayout } from './components/dashboard';
import {
  LandingPage,
  DashboardOverview,
  TriggersPage,
  SpotPage,
  AlertsPage,
  PersonalityPage,
  AccountPage,
} from './pages';

function App() {
  return (
    <ThemeProvider>
      <LocationProvider>
        <SurfTechLayout>
          <BrowserRouter>
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<LandingPage />} />

              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="triggers" element={<TriggersPage />} />
                <Route path="spot" element={<SpotPage />} />
                <Route path="alerts" element={<AlertsPage />} />
                <Route path="personality" element={<PersonalityPage />} />
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SurfTechLayout>
      </LocationProvider>
    </ThemeProvider>
  );
}

export default App;
