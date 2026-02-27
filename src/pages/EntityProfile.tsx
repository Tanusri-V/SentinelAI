import { Mail, Key, ShieldAlert, MapPin, Grid, List, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HEATMAP_DATA = Array.from({ length: 7 * 12 }, (_, i) => ({
  value: Math.random() > 0.8 ? 'high' : Math.random() > 0.5 ? 'medium' : 'low'
}));

const RECENT_EVENTS = [
  { time: '2023-10-24 03:15:22', type: 'Failed Login', ip: '192.168.1.42', device: 'Unknown_Linux', loc: 'Shenzhen, CN', status: 'fail' },
  { time: '2023-10-24 03:15:23', type: 'Successful Login', ip: '192.168.1.42', device: 'Unknown_Linux', loc: 'Shenzhen, CN', status: 'success' },
  { time: '2023-10-24 03:10:05', type: 'File Access', ip: '10.0.0.55', device: 'MacBook_Pro_16', loc: 'London, UK', status: 'log' },
  { time: '2023-10-24 02:45:11', type: 'Data Export', ip: '10.0.0.55', device: 'MacBook_Pro_16', loc: 'London, UK', status: 'flagged' },
  { time: '2023-10-23 18:00:00', type: 'Session End', ip: '10.0.0.55', device: 'MacBook_Pro_16', loc: 'London, UK', status: 'log' },
];

export default function EntityProfile() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <span>Alerts</span>
          <span>/</span>
          <span>User Analysis</span>
          <span>/</span>
          <span className="text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 font-mono">u-9422</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Identity & Risk */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          {/* Profile Card */}
          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-border to-bg-dark">
                <img 
                  src="https://picsum.photos/seed/eleanor/200/200" 
                  alt="Eleanor Vance" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-success rounded-full border-2 border-bg-card" />
            </div>
            <h2 className="text-xl font-display font-bold text-white mb-1">Eleanor Vance</h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-2 py-0.5 rounded bg-bg-dark border border-border text-xs font-mono text-text-secondary">u-9422</span>
              <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-xs font-mono text-primary">Active</span>
            </div>
            
            <div className="w-full space-y-3 mb-6 text-sm">
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-text-muted">Role</span>
                <span className="font-medium text-white">Sr. DevOps Engineer</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-text-muted">Department</span>
                <span className="font-medium text-white">Infrastructure</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-text-muted">Manager</span>
                <span className="font-medium text-white">Sarah Connor</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-text-muted">Last Active</span>
                <span className="font-mono text-white">2 mins ago</span>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-bg-dark hover:bg-bg-card-hover border border-border rounded-lg text-xs font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-wide">
                <Mail className="w-3 h-3" /> Contact
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-bg-dark hover:bg-bg-card-hover border border-border rounded-lg text-xs font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-wide">
                <Key className="w-3 h-3" /> Reset PW
              </button>
            </div>
          </div>

          {/* Risk Gauge */}
          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-critical opacity-10 blur-[40px] rounded-full" />
            
            <div className="flex justify-between items-center mb-6 z-10">
              <h3 className="font-display font-bold text-xs text-text-muted uppercase tracking-widest">Risk Score</h3>
              <ShieldAlert className="w-4 h-4 text-critical animate-pulse" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-4">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-bg-dark stroke-current" cx="50" cy="50" r="42" strokeWidth="8" fill="transparent" />
                  <circle 
                    className="text-critical stroke-current transition-all duration-1000 ease-out" 
                    cx="50" 
                    cy="50" 
                    r="42" 
                    strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray="264" 
                    strokeDashoffset={264 * (1 - 0.88)} 
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-mono font-bold text-white tracking-tighter drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">88</span>
                  <span className="text-xs font-bold text-critical uppercase mt-1 bg-critical/10 px-2 py-0.5 rounded border border-critical/20">Critical</span>
                </div>
              </div>
              <p className="mt-6 text-center text-xs text-text-secondary px-4 leading-relaxed">
                Score spiked <span className="text-critical font-bold">+42%</span> in the last 6 hours due to impossible travel velocity.
              </p>
            </div>

            <button className="w-full mt-4 py-3 bg-critical/10 hover:bg-critical/20 border border-critical/50 text-critical font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] z-10 uppercase tracking-wide text-xs">
              Suspend User
            </button>
          </div>
        </div>

        {/* Right Column: Visualizations */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[340px]">
            {/* Map */}
            <div className="bg-bg-card border border-border rounded-xl overflow-hidden relative group">
              <div className="absolute top-4 left-4 z-10 bg-bg-card/90 backdrop-blur border border-border px-3 py-1.5 rounded-lg">
                <h3 className="font-display font-bold text-xs text-text-muted uppercase tracking-widest flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Access Locations
                </h3>
              </div>
              <div className="w-full h-full bg-[#0F1623] relative opacity-80">
                {/* Simplified Map Background */}
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaJPdgJU8HHVyyIpK_MeYi2ysiVbhXw00KhTQGFM98VQnywA-EVBoGaC-uc3i14BdbzW2dbBCDp9bhQ1EpNCYx158b2ooHYdwFnaiNfJ5KRd-f42cx8xelUVcwce8n56Ljccjv3qyWI7yS59Qf_BCakMPQPuDgd8Qx6Ww4FwdbMYXwws1lRs77lOObXzmuHwQ0PBbjX_FrhAXkuSLsY4zBX1UvKWEGIsBXGO2OBCDWIboRNxQOAxyNro5UCHCYNC5bSGrKbX0Q01o" 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-40 grayscale invert"
                />
                
                {/* Pins */}
                <div className="absolute top-[28%] left-[48%] w-3 h-3 bg-success rounded-full shadow-[0_0_10px_#10B981]" />
                <div className="absolute top-[38%] left-[78%] w-3 h-3 bg-critical rounded-full shadow-[0_0_10px_#EF4444] animate-pulse" />
                
                {/* Connection Line */}
                <svg className="absolute inset-0 pointer-events-none">
                  <path d="M 400 150 Q 550 100 650 200" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" className="opacity-60" />
                </svg>
              </div>
            </div>

            {/* Heatmap */}
            <div className="bg-bg-card border border-border rounded-xl p-5 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display font-bold text-xs text-text-muted uppercase tracking-widest flex items-center gap-2">
                  <Grid className="w-3 h-3" /> Activity Heatmap (7d)
                </h3>
                <div className="flex items-center gap-1 text-[10px] text-text-muted">
                  <span>Low</span>
                  <div className="w-2 h-2 rounded-sm bg-bg-dark" />
                  <div className="w-2 h-2 rounded-sm bg-primary/40" />
                  <div className="w-2 h-2 rounded-sm bg-primary" />
                  <span>High</span>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-12 gap-1 content-center">
                {HEATMAP_DATA.map((cell, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "aspect-square rounded-sm transition-all hover:scale-110",
                      cell.value === 'high' ? "bg-primary shadow-[0_0_5px_var(--color-primary)]" :
                      cell.value === 'medium' ? "bg-primary/40" : "bg-bg-dark"
                    )}
                  />
                ))}
              </div>

              <div className="mt-4 p-3 bg-critical/10 border border-critical/20 rounded-lg flex gap-3 items-start">
                <ShieldAlert className="w-4 h-4 text-critical mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Anomalous Spike Detected</p>
                  <p className="text-[10px] text-text-secondary mt-0.5 leading-relaxed">
                    Unexpected activity volume at 03:00 AM on Thursday (342% above baseline).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Events Table */}
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex justify-between items-center bg-bg-card/50">
              <h3 className="font-display font-bold text-sm text-text-muted uppercase tracking-widest flex items-center gap-2">
                <List className="w-4 h-4" /> Recent Events
              </h3>
              <button className="text-xs text-primary hover:text-white font-mono flex items-center gap-1 transition-colors">
                View All Logs <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-bg-dark text-xs text-text-muted uppercase tracking-wider font-display border-b border-border">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Timestamp</th>
                    <th className="px-5 py-3 font-semibold">Event Type</th>
                    <th className="px-5 py-3 font-semibold">IP Address</th>
                    <th className="px-5 py-3 font-semibold">Device</th>
                    <th className="px-5 py-3 font-semibold">Location</th>
                    <th className="px-5 py-3 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-mono text-text-secondary divide-y divide-border">
                  {RECENT_EVENTS.map((event, i) => (
                    <tr key={i} className={cn(
                      "hover:bg-white/5 transition-colors cursor-pointer border-l-2",
                      event.status === 'fail' ? "bg-critical/5 border-l-critical" : "border-l-transparent"
                    )}>
                      <td className="px-5 py-3 text-white">{event.time}</td>
                      <td className="px-5 py-3 font-sans">{event.type}</td>
                      <td className="px-5 py-3">{event.ip}</td>
                      <td className="px-5 py-3">{event.device}</td>
                      <td className="px-5 py-3">{event.loc}</td>
                      <td className="px-5 py-3 text-right">
                        <span className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase border",
                          event.status === 'fail' ? "bg-critical/10 text-critical border-critical/20" :
                          event.status === 'success' ? "bg-success/10 text-success border-success/20" :
                          event.status === 'flagged' ? "bg-warning/10 text-warning border-warning/20" :
                          "bg-bg-dark text-text-muted border-border"
                        )}>
                          {event.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
