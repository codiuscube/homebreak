import React from 'react';
import { Outlet } from 'react-router-dom';

export function SurfTechLayout({ children }: { children?: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background text-foreground font-mono subpixel-antialiased selection:bg-brand-acid selection:text-brand-abyss overflow-x-hidden">
            {/* Fixed Background Noise Layer - fixes scroll height issues */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-noise"></div>

            {/* Background Grid Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none grid-bg opacity-30"></div>

            {/* Grunge Layers */}
            <div className="fixed inset-0 z-40 pointer-events-none grunge-overlay mix-blend-overlay opacity-20"></div>
            <div className="fixed inset-0 z-40 pointer-events-none scratches mix-blend-soft-light opacity-10"></div>

            {/* Scanline Effect */}
            <div className="fixed inset-0 z-50 pointer-events-none scanline"></div>

            {/* Main Content */}
            <div className="relative z-10">
                {children || <Outlet />}
            </div>
        </div>
    );
}
