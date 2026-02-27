import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Network, GitCommit, Zap, ArrowUpRight } from 'lucide-react';

const FEATURE_IMPORTANCE = [
  { name: 'geo_velocity', value: 0.90 },
  { name: 'device_fp', value: 0.75 },
  { name: 'login_hour', value: 0.40 },
  { name: 'session_bytes', value: 0.25 },
  { name: 'auth_fails', value: 0.15 },
];

const POPULATION_RISK = Array.from({ length: 50 }, (_, i) => ({
  x: i,
  y: Math.exp(-Math.pow(i - 15, 2) / 50) * 100 + (i > 40 ? Math.random() * 20 : 0)
}));

export default function ModelLogic() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-white flex items-center gap-3">
            Model Logic 
            <span className="text-xs bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded font-mono">v2.1 ONLINE</span>
          </h1>
          <p className="text-text-secondary text-sm">AI explainability and health monitoring parameters</p>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-bg-card border border-border rounded-xl p-6 flex items-start justify-between relative overflow-hidden">
          <div>
            <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">ALGORITHM</p>
            <h2 className="text-2xl font-display font-bold text-white mb-1">Isolation Forest</h2>
            <p className="text-xs text-primary font-mono">Build: v2.1.4</p>
            <div className="flex items-center gap-2 mt-4 text-[10px] text-success font-bold uppercase tracking-wide">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Inferencing Active
            </div>
          </div>
          <Network className="w-16 h-16 text-border opacity-20 absolute right-4 top-4" />
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-6 relative overflow-hidden">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">MODEL ACCURACY</p>
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="text-4xl font-display font-bold text-white">94.2%</h2>
            <span className="text-xs font-bold text-success flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +0.4%
            </span>
          </div>
          <p className="text-xs text-text-muted font-mono mb-4">Baseline: 91.0%</p>
          <div className="h-12 w-full absolute bottom-0 left-0 right-0 opacity-30">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={POPULATION_RISK}>
                  <Area type="monotone" dataKey="y" stroke="#3B82F6" fill="#3B82F6" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-6 grid grid-cols-2 divide-x divide-border">
          <div className="px-4 first:pl-0">
            <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">PRECISION</p>
            <h2 className="text-3xl font-display font-bold text-white">0.91</h2>
          </div>
          <div className="px-4">
            <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">RECALL</p>
            <h2 className="text-3xl font-display font-bold text-white">0.88</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feature Importance */}
        <div className="lg:col-span-2 bg-bg-card border border-border rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide">FEATURE IMPORTANCE (SHAP VALUES)</h3>
            <button className="text-xs text-primary hover:text-white transition-colors">View Detailed Report →</button>
          </div>
          
          <div className="space-y-6">
            {FEATURE_IMPORTANCE.map((feature) => (
              <div key={feature.name}>
                <div className="flex justify-between text-xs font-mono text-text-secondary mb-2">
                  <span>{feature.name}</span>
                  <span>{feature.value.toFixed(2)}</span>
                </div>
                <div className="h-2 bg-bg-dark rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full relative overflow-hidden" 
                    style={{ width: `${feature.value * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hyperparameters */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide mb-6">HYPERPARAMETERS</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="text-sm text-text-secondary font-mono">n_estimators</span>
              <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">100</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="text-sm text-text-secondary font-mono">contamination</span>
              <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">0.05</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="text-sm text-text-secondary font-mono">max_samples</span>
              <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">auto</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="text-sm text-text-secondary font-mono">bootstrap</span>
              <span className="text-sm font-bold text-warning bg-warning/10 px-2 py-0.5 rounded border border-warning/20">False</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="text-sm text-text-secondary font-mono">random_state</span>
              <span className="text-sm font-bold text-white">42</span>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-bg-dark hover:bg-bg-card-hover border border-border rounded-lg text-sm font-bold text-text-secondary hover:text-white transition-colors">
            Export Config JSON
          </button>
        </div>
      </div>

      {/* Population Risk Spread */}
      <div className="bg-bg-card border border-border rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide">POPULATION RISK SPREAD</h3>
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-sm" />
              <span className="text-text-secondary">Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-critical rounded-sm" />
              <span className="text-text-secondary">Anomalous ({'>'}0.7)</span>
            </div>
          </div>
        </div>
        
        <div className="h-64 w-full relative">
           {/* Custom Chart Placeholder - Recharts Area */}
           <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={POPULATION_RISK}>
                <defs>
                  <linearGradient id="colorPop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A3655" vertical={false} />
                <XAxis hide />
                <YAxis hide />
                <Tooltip contentStyle={{ backgroundColor: '#151E32', borderColor: '#2A3655', color: '#F8FAFC' }} />
                <Area type="step" dataKey="y" stroke="#3B82F6" fill="url(#colorPop)" />
              </AreaChart>
           </ResponsiveContainer>
           
           {/* Threshold Line */}
           <div className="absolute top-0 bottom-0 left-[80%] border-l-2 border-dashed border-critical flex flex-col items-center">
              <span className="bg-critical text-white text-[10px] font-bold px-1.5 py-0.5 rounded -mt-3">THRESHOLD</span>
           </div>
        </div>
      </div>
    </div>
  );
}
