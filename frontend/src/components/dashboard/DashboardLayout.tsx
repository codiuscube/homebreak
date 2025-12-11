import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      {/* Add top padding on mobile for the header, left margin on desktop for sidebar */}
      <main className="pt-14 lg:pt-0 lg:ml-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
