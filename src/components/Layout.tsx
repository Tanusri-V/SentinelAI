import React from 'react';
import { 
  LayoutDashboard, 
  FileInput, 
  AlertTriangle, 
  Users, 
  BrainCircuit, 
  Settings, 
  Search, 
  Bell, 
  Calendar,
  ChevronDown,
  Shield
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: FileInput, label: 'Data Ingest', path: '/ingest' },
  { icon: AlertTriangle, label: 'Alert Center', path: '/alerts', count: 12 },
  { icon: Users, label: 'Entity Profiles', path: '/profiles' },
  { icon: BrainCircuit, label: 'Model Logic', path: '/model' },
  { icon: Settings, label: 'System Config', path: '/config' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-bg-dark text-text-primary font-sans">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-border bg-bg-card flex flex-col z-20">
        <div className="h-16 flex items-center px-6 border-b border-border gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-[0_0_15px_var(--color-primary-glow)]">
            <Shield className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">SentinelAI</span>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                  isActive 
                    ? "text-white bg-primary/10 border-l-2 border-primary" 
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-text-muted group-hover:text-white")} />
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.count && (
                  <span className="ml-auto bg-critical text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-bg-dark/50 border border-border/50">
            <img 
              src="https://picsum.photos/seed/user/100/100" 
              alt="User" 
              className="w-8 h-8 rounded-full border border-border"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Alex Chen</p>
              <p className="text-xs text-text-muted truncate">SOC Lead Analyst</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-bg-dark relative overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-bg-card/50 backdrop-blur-md flex items-center justify-between px-6 z-10">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search IP, User ID, Event..." 
                className="w-full bg-bg-dark border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-bg-card border border-border rounded-lg cursor-pointer hover:border-text-muted transition-colors">
              <Calendar className="w-4 h-4 text-text-muted" />
              <span className="text-sm text-text-secondary">Last 24 Hours</span>
              <ChevronDown className="w-3 h-3 text-text-muted" />
            </div>
            
            <button className="relative p-2 text-text-secondary hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-critical rounded-full border border-bg-card animate-pulse" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
