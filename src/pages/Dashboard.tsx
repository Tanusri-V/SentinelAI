import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ArrowUpRight, AlertCircle, ShieldAlert, Activity, MapPin, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

const LOGIN_DATA = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  value: Math.floor(Math.random() * 500) + 100 + (i > 12 ? i * 20 : 0)
}));

const RISK_DATA = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  value: i > 18 ? Math.floor(Math.random() * 40) + 60 : Math.floor(Math.random() * 20) + 10
}));

const ALERTS = [
  { id: 1, type: 'critical', title: 'u-992 (London, UK)', desc: 'Impossible Travel detected. Speed: 950 km/h', time: '14:22:01' },
  { id: 2, type: 'success', title: 'u-412 (New York, US)', desc: 'Successful login - Mac OSX / Chrome', time: '14:21:45' },
  { id: 3, type: 'warning', title: 'u-884 (Tokyo, JP)', desc: 'New device fingerprint: Windows 11', time: '14:20:12' },
  { id: 4, type: 'critical', title: 'u-115 (Multiple IPs)', desc: 'Credential stuffing attempt suspected', time: '14:19:55' },
  { id: 5, type: 'success', title: 'u-003 (Paris, FR)', desc: 'System-wide baseline sync completed', time: '14:18:30' },
  { id: 6, type: 'success', title: 'u-556 (Berlin, DE)', desc: 'Password changed successfully', time: '14:15:10' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="TOTAL LOGIN ATTEMPTS" 
          value="24,592" 
          trend="+12%" 
          trendUp={true}
          color="primary"
        />
        <StatCard 
          title="ANOMALIES DETECTED" 
          value="142" 
          trend="~2%" 
          trendUp={false}
          color="warning"
        />
        <StatCard 
          title="HIGH RISK ALERTS" 
          value="8" 
          badge="CRITICAL"
          color="critical"
        />
        <div className="bg-bg-card border border-border rounded-xl p-5 flex items-center justify-between relative overflow-hidden group">
          <div className="z-10">
            <h3 className="text-xs font-bold text-text-muted tracking-wider mb-1">AVG RISK SCORE</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-bold text-white">12</span>
              <span className="text-sm text-text-muted">/ 100</span>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-bg-dark border-t-success border-r-success border-b-bg-dark border-l-bg-dark rotate-45" />
        </div>
      </div>

      {/* Quick Actions Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionCard 
          icon={Activity} 
          title="Impossible Travel" 
          count="3" 
          color="text-warning" 
          bg="bg-warning/10"
        />
        <ActionCard 
          icon={Monitor} 
          title="New Devices" 
          count="45" 
          color="text-primary" 
          bg="bg-primary/10"
        />
        <ActionCard 
          icon={MapPin} 
          title="New Locations" 
          count="12" 
          color="text-success" 
          bg="bg-success/10"
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Charts Column */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Login Activity */}
          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-sm text-white tracking-wide">LOGIN ACTIVITY</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-text-muted">ATTEMPTS</span>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={LOGIN_DATA}>
                  <defs>
                    <linearGradient id="colorLogin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A3655" vertical={false} />
                  <XAxis dataKey="time" stroke="#64748B" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#151E32', borderColor: '#2A3655', color: '#F8FAFC' }}
                    itemStyle={{ color: '#3B82F6' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorLogin)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-[10px] text-text-muted font-mono mt-4">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>
          </div>

          {/* Risk Trend */}
          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-sm text-white tracking-wide">RISK TREND</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-critical" />
                <span className="text-xs text-text-muted">SCORE INDEX</span>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={RISK_DATA}>
                  <defs>
                    <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A3655" vertical={false} />
                  <XAxis dataKey="time" stroke="#64748B" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#151E32', borderColor: '#2A3655', color: '#F8FAFC' }}
                    itemStyle={{ color: '#EF4444' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorRisk)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-[10px] text-text-muted font-mono mt-4">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>
          </div>
        </div>

        {/* Live Event Stream */}
        <div className="bg-bg-card border border-border rounded-xl flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-border flex justify-between items-center bg-bg-card/50">
            <h3 className="font-display font-bold text-sm text-white tracking-wide">LIVE EVENT STREAM</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-bold text-text-muted tracking-wider">CONNECTED</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {ALERTS.map((alert) => (
              <div 
                key={alert.id} 
                className={cn(
                  "p-3 rounded-lg border transition-all hover:bg-white/5 cursor-pointer group",
                  alert.type === 'critical' ? "border-critical/30 bg-critical/5" :
                  alert.type === 'warning' ? "border-warning/30 bg-warning/5" :
                  "border-border bg-bg-dark/30"
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className={cn(
                    "text-[10px] font-bold font-mono uppercase px-1.5 py-0.5 rounded",
                    alert.type === 'critical' ? "text-critical bg-critical/10" :
                    alert.type === 'warning' ? "text-warning bg-warning/10" :
                    "text-success bg-success/10"
                  )}>
                    {alert.type === 'critical' ? 'HIGH RISK (88)' : 
                     alert.type === 'warning' ? 'MEDIUM RISK (54)' : 
                     'LOW RISK (12)'}
                  </span>
                  <span className="text-[10px] text-text-muted font-mono">{alert.time}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-0.5 group-hover:text-primary transition-colors">{alert.title}</h4>
                <p className="text-xs text-text-secondary">{alert.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border bg-bg-card/50">
            <button className="w-full py-2 text-xs font-bold text-primary hover:text-white hover:bg-primary/10 rounded-lg transition-colors uppercase tracking-wider">
              View Full History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, trendUp, color, badge }: any) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-text-muted/30 transition-colors">
      <div className="z-10">
        <h3 className="text-xs font-bold text-text-muted tracking-wider mb-2">{title}</h3>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-display font-bold text-white tracking-tight">{value}</span>
          {trend && (
            <span className={cn("text-xs font-bold flex items-center", trendUp ? "text-success" : "text-critical")}>
              {trendUp ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowUpRight className="w-3 h-3 mr-0.5 rotate-90" />}
              {trend}
            </span>
          )}
          {badge && (
            <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded bg-critical/20 text-critical border border-critical/30")}>
              {badge}
            </span>
          )}
        </div>
      </div>
      <div className={cn(
        "absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 blur-xl transition-opacity group-hover:opacity-20",
        color === 'primary' ? "bg-primary" :
        color === 'warning' ? "bg-warning" :
        color === 'critical' ? "bg-critical" : "bg-white"
      )} />
    </div>
  );
}

function ActionCard({ icon: Icon, title, count, color, bg }: any) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-bg-card-hover transition-colors">
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", bg)}>
        <Icon className={cn("w-6 h-6", color)} />
      </div>
      <div>
        <h4 className="text-sm text-text-muted">{title}</h4>
        <span className="text-2xl font-display font-bold text-white">{count}</span>
      </div>
    </div>
  );
}
