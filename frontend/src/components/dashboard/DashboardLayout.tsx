import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background theme-dashboard">
      <Sidebar />
      {/* Add top padding on mobile for the header, left margin on desktop for sidebar */}
      <main className="pt-16 lg:pt-0 lg:ml-72 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
