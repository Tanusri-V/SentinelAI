import { Save, Sliders, Zap, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function SystemConfig() {
  const [riskThreshold, setRiskThreshold] = useState(50);
  const [highRiskThreshold, setHighRiskThreshold] = useState(80);

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-white uppercase tracking-wide">System Configuration</h1>
          <p className="text-sm text-text-secondary">Calibrate risk sensitivity and automated response protocols</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-bg-card border border-border rounded-lg text-xs font-bold text-text-secondary hover:text-white hover:bg-bg-card-hover transition-colors uppercase tracking-wide">
            Discard
          </button>
          <button className="px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-xs font-bold shadow-[0_0_15px_var(--color-primary-glow)] transition-all flex items-center gap-2 uppercase tracking-wide">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Risk Scoring Logic */}
        <section className="bg-bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Risk Scoring Logic</h3>
              <p className="text-sm text-text-secondary">Define the thresholds for risk categorization.</p>
            </div>
          </div>

          <div className="px-4 pb-4">
            <div className="flex justify-between text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span className="text-success">Safe Zone (0-50)</span>
              <span className="text-warning">Suspicious (51-79)</span>
              <span className="text-critical">High Risk (80+)</span>
            </div>
            
            {/* Custom Range Slider Visualization */}
            <div className="relative h-4 w-full rounded-full bg-bg-dark overflow-hidden mb-12">
              <div className="absolute inset-y-0 left-0 bg-success/80" style={{ width: '50%' }} />
              <div className="absolute inset-y-0 left-[50%] bg-warning/80" style={{ width: '30%' }} />
              <div className="absolute inset-y-0 left-[80%] bg-critical/80" style={{ width: '20%' }} />
              
              {/* Handles (Visual Only) */}
              <div className="absolute top-0 bottom-0 left-[50%] w-1 bg-white shadow-[0_0_10px_white] z-10 cursor-ew-resize group">
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-bg-card border border-border px-2 py-1 rounded text-xs font-mono font-bold text-white group-hover:scale-110 transition-transform">50</div>
              </div>
              <div className="absolute top-0 bottom-0 left-[80%] w-1 bg-white shadow-[0_0_10px_white] z-10 cursor-ew-resize group">
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-bg-card border border-border px-2 py-1 rounded text-xs font-mono font-bold text-white group-hover:scale-110 transition-transform">80</div>
              </div>
            </div>

            <div className="bg-bg-dark/50 border border-border/50 rounded p-4 flex gap-3 text-xs text-text-secondary">
              <HelpCircle className="w-4 h-4 text-primary shrink-0" />
              <p>Adjusting these thresholds will trigger a system-wide re-evaluation of all open alerts. This may take up to 5 minutes.</p>
            </div>
          </div>
        </section>

        {/* Feature Weighting */}
        <section className="bg-bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Feature Weighting</h3>
                <p className="text-sm text-text-secondary">Calibrate impact of specific anomalies on total risk score.</p>
              </div>
            </div>
            <button className="text-xs font-bold text-primary hover:text-white uppercase tracking-wide transition-colors">Reset to Defaults</button>
          </div>

          <div className="space-y-8">
            <WeightSlider label="Impossible Travel Velocity" value={0.9} />
            <WeightSlider label="New Device Fingerprint" value={0.5} />
            <WeightSlider label="Off-hours Login" value={0.3} />
          </div>
        </section>

        {/* Automated Response */}
        <section className="bg-bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded bg-warning/10 flex items-center justify-center text-warning">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Automated Response</h3>
              <p className="text-sm text-text-secondary">Configure autonomous actions based on risk levels.</p>
            </div>
          </div>

          <div className="space-y-4">
            <ToggleItem 
              title="Auto-lock account on Critical Alert" 
              desc="Triggered when risk score exceeds 80." 
              active={false} 
              color="bg-critical"
            />
            <ToggleItem 
              title="Email SOC team on High Risk" 
              desc="Sends digest to security@sentinel.ai" 
              active={true} 
              color="bg-primary"
            />
            <ToggleItem 
              title="Require 2FA for Medium Risk" 
              desc="Enforce re-authentication for scores > 50." 
              active={true} 
              color="bg-primary"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function WeightSlider({ label, value }: { label: string, value: number }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-white flex items-center gap-2">
          {label}
          <HelpCircle className="w-3 h-3 text-text-muted opacity-50 group-hover:opacity-100 transition-opacity cursor-help" />
        </label>
        <input 
          type="number" 
          value={value} 
          readOnly
          className="w-16 bg-bg-dark border border-border rounded px-2 py-1 text-right font-mono text-sm text-primary focus:outline-none focus:border-primary"
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono text-text-muted w-6">0.0</span>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          defaultValue={value}
          className="w-full h-1 bg-bg-dark rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        />
        <span className="text-xs font-mono text-text-muted w-6 text-right">1.0</span>
      </div>
    </div>
  );
}

function ToggleItem({ title, desc, active, color }: { title: string, desc: string, active: boolean, color: string }) {
  const [isOn, setIsOn] = useState(active);

  return (
    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-bg-dark/30 p-4 hover:border-border transition-colors">
      <div>
        <h4 className="text-sm font-medium text-white">{title}</h4>
        <p className="text-xs text-text-secondary">{desc}</p>
      </div>
      <button 
        onClick={() => setIsOn(!isOn)}
        className={cn(
          "w-11 h-6 rounded-full relative transition-colors duration-200 ease-in-out focus:outline-none",
          isOn ? color : "bg-bg-card border border-border"
        )}
      >
        <span 
          className={cn(
            "block w-5 h-5 bg-white rounded-full shadow transform transition duration-200 ease-in-out absolute top-0.5 left-0.5",
            isOn ? "translate-x-5" : "translate-x-0"
          )} 
        />
      </button>
    </div>
  );
}
