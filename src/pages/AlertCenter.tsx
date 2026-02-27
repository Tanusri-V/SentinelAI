import { X, MapPin, Clock, Shield, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const ALERTS = [
  { id: '#8842', severity: 'Critical', time: 'Oct 24, 09:42:12', user: 'u-992', type: 'Impossible Travel' },
  { id: '#8841', severity: 'High', time: 'Oct 24, 09:15:00', user: 'u-412', type: 'New Device' },
  { id: '#8839', severity: 'Medium', time: 'Oct 24, 08:55:21', user: 'u-773', type: 'Failed Login' },
  { id: '#8835', severity: 'Medium', time: 'Oct 24, 07:12:44', user: 'u-102', type: 'VPN Usage' },
  { id: '#8810', severity: 'Low', time: 'Oct 23, 23:45:10', user: 'u-550', type: 'Password Reset' },
];

export default function AlertCenter() {
  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Left List */}
      <div className="w-1/3 flex flex-col bg-bg-card border border-border rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="font-display font-bold text-lg text-white mb-1">Alert Center</h2>
          <p className="text-xs text-text-muted">Manage and triage security incidents.</p>
          
          <div className="flex gap-2 mt-4">
            <FilterBadge label="Risk: Critical & High" active />
            <FilterBadge label="Status: Open" />
            <FilterBadge label="Type: All" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-bg-dark text-text-muted font-mono uppercase sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">Alert ID</th>
                <th className="px-4 py-3">Severity</th>
                <th className="px-4 py-3">Timestamp</th>
                <th className="px-4 py-3">User</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {ALERTS.map((alert) => (
                <tr 
                  key={alert.id} 
                  className={cn(
                    "hover:bg-white/5 cursor-pointer transition-colors border-l-2",
                    alert.id === '#8842' ? "bg-white/5 border-l-critical" : "border-l-transparent"
                  )}
                >
                  <td className="px-4 py-3 font-mono text-primary">{alert.id}</td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "flex items-center gap-1.5 font-bold",
                      alert.severity === 'Critical' ? "text-critical" :
                      alert.severity === 'High' ? "text-critical" :
                      alert.severity === 'Medium' ? "text-warning" : "text-success"
                    )}>
                      <div className={cn("w-1.5 h-1.5 rounded-full", 
                        alert.severity === 'Critical' ? "bg-critical" :
                        alert.severity === 'High' ? "bg-critical" :
                        alert.severity === 'Medium' ? "bg-warning" : "bg-success"
                      )} />
                      {alert.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-secondary font-mono">{alert.time}</td>
                  <td className="px-4 py-3 text-white">{alert.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Detail Panel */}
      <div className="flex-1 bg-bg-card border border-border rounded-xl overflow-hidden flex flex-col relative">
        {/* Header */}
        <div className="p-6 border-b border-border flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-text-muted font-mono">#8842</span>
              <span className="bg-critical/10 text-critical border border-critical/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Critical Risk</span>
            </div>
            <h1 className="text-2xl font-display font-bold text-white">Impossible Travel Detected</h1>
            <div className="flex items-center gap-4 mt-2 text-xs text-text-secondary">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Oct 24, 09:42:12 UTC</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> User: u-992 (Finance)</span>
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg text-text-muted hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Map Visualization */}
          <div className="relative w-full h-64 bg-[#0F1623] rounded-xl border border-border overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaJPdgJU8HHVyyIpK_MeYi2ysiVbhXw00KhTQGFM98VQnywA-EVBoGaC-uc3i14BdbzW2dbBCDp9bhQ1EpNCYx158b2ooHYdwFnaiNfJ5KRd-f42cx8xelUVcwce8n56Ljccjv3qyWI7yS59Qf_BCakMPQPuDgd8Qx6Ww4FwdbMYXwws1lRs77lOObXzmuHwQ0PBbjX_FrhAXkuSLsY4zBX1UvKWEGIsBXGO2OBCDWIboRNxQOAxyNro5UCHCYNC5bSGrKbX0Q01o" 
              alt="World Map" 
              className="w-full h-full object-cover opacity-30 grayscale invert"
            />
            
            {/* NYC Point */}
            <div className="absolute top-[35%] left-[28%] flex flex-col items-center">
              <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#3B82F6]" />
              <span className="mt-1 text-[10px] font-bold text-white bg-bg-dark/80 px-1 rounded">NYC</span>
            </div>

            {/* Tokyo Point */}
            <div className="absolute top-[40%] left-[85%] flex flex-col items-center">
              <div className="w-3 h-3 bg-critical rounded-full shadow-[0_0_10px_#EF4444] animate-pulse" />
              <span className="mt-1 text-[10px] font-bold text-white bg-bg-dark/80 px-1 rounded">Tokyo</span>
            </div>

            {/* Arc Line (SVG) */}
            <svg className="absolute inset-0 pointer-events-none">
              <path 
                d="M 250 100 Q 450 20 750 120" 
                fill="none" 
                stroke="#EF4444" 
                strokeWidth="2" 
                strokeDasharray="4 4"
                className="opacity-60"
              />
            </svg>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-bg-dark border border-border rounded-lg p-4">
              <p className="text-xs text-text-muted mb-1">Calculated Speed</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-bold text-critical">950</span>
                <span className="text-sm font-mono text-text-secondary">km/h</span>
              </div>
              <p className="text-[10px] text-critical mt-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Exceeds Commercial Air
              </p>
            </div>
            <div className="bg-bg-dark border border-border rounded-lg p-4">
              <p className="text-xs text-text-muted mb-1">Time Difference</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-bold text-white">2h 14m</span>
              </div>
              <p className="text-[10px] text-text-muted mt-1">Between Login A and B</p>
            </div>
          </div>

          {/* Risk History */}
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider">User Risk History (30d)</h3>
              <span className="text-xs font-mono text-text-muted">Avg: 12</span>
            </div>
            <div className="flex items-end gap-1 h-16">
              {Array.from({ length: 14 }).map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex-1 rounded-t-sm",
                    i === 13 ? "bg-critical" : i > 10 ? "bg-warning" : "bg-primary/30"
                  )}
                  style={{ height: `${i === 13 ? 100 : Math.random() * 40 + 10}%` }}
                />
              ))}
            </div>
          </div>

          {/* Automated Analysis */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex gap-3">
            <div className="mt-0.5">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-text-primary leading-relaxed">
                Model confidence is <span className="font-bold text-white">98.2%</span>. Pattern matches "VPN Tunneling" or "Credential Sharing". User IP originates from unknown ASN in Tokyo.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-border bg-bg-card flex gap-3">
          <button className="flex-1 py-2.5 bg-bg-dark border border-border hover:bg-bg-card-hover text-white text-sm font-bold rounded-lg transition-colors">
            Mark Safe
          </button>
          <button className="flex-1 py-2.5 bg-critical hover:bg-red-600 text-white text-sm font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            Suspend User
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterBadge({ label, active }: { label: string, active?: boolean }) {
  return (
    <button className={cn(
      "px-3 py-1 rounded-full text-xs font-medium border transition-colors",
      active ? "bg-primary/20 border-primary text-primary" : "bg-bg-dark border-border text-text-muted hover:text-white"
    )}>
      {label}
    </button>
  );
}
