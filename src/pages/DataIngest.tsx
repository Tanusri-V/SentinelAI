import { Upload, FileText, CheckCircle, AlertCircle, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

const FILES = [
  { id: 1, name: 'server_logs_q3_2023.csv', size: '45.2 MB', time: 'Uploaded just now', status: 'ready', records: '152,040' },
];

const PREVIEW_DATA = [
  { user_id: 'u-9421', timestamp: '2023-10-24 14:02:11', lat: '40.7128', long: '-74.0060', device_id: 'd-iPhone13-01' },
  { user_id: 'u-8823', timestamp: '2023-10-24 14:03:45', lat: '35.6895', long: '139.6917', device_id: 'd-MacBookPro-X' },
  { user_id: 'u-1204', timestamp: '2023-10-24 14:05:10', lat: '51.5074', long: '-0.1278', device_id: 'd-Win11-Dell' },
  { user_id: 'u-9421', timestamp: '2023-10-24 14:15:22', lat: '40.7128', long: '-74.0060', device_id: 'd-iPhone13-01' },
];

export default function DataIngest() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-bold text-white mb-2">Dataset Ingest</h1>
        <p className="text-text-secondary">Upload raw server logs for model training and anomaly detection.</p>
        <p className="text-text-muted text-sm">Ensure data follows the required schema.</p>
      </div>

      <div className="w-full max-w-3xl space-y-6">
        {/* Dropzone */}
        <div className="border-2 border-dashed border-border hover:border-primary/50 bg-bg-card/50 rounded-2xl p-12 flex flex-col items-center justify-center transition-all cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Drag & drop CSV file</h3>
          <p className="text-text-muted mb-6">or click to browse local files</p>
          
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-bg-dark px-4 py-2 rounded border border-border">
            <span>REQUIRED SCHEMA:</span>
            <span className="bg-bg-card px-1.5 py-0.5 rounded border border-border">user_id</span>
            <span className="bg-bg-card px-1.5 py-0.5 rounded border border-border">timestamp</span>
            <span className="bg-bg-card px-1.5 py-0.5 rounded border border-border">lat</span>
            <span className="bg-bg-card px-1.5 py-0.5 rounded border border-border">long</span>
            <span className="bg-bg-card px-1.5 py-0.5 rounded border border-border">device_id</span>
          </div>
        </div>

        {/* File List & Preview */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          {/* File Header */}
          <div className="p-4 border-b border-border flex items-center justify-between bg-bg-card/50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-success/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-success" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">server_logs_q3_2023.csv</h4>
                <p className="text-xs text-text-muted">45.2 MB • Uploaded just now</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-success text-xs font-bold uppercase tracking-wide">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Ready for analysis
            </div>
          </div>

          {/* Data Table Preview */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-bg-dark text-text-muted uppercase tracking-wider border-b border-border">
                <tr>
                  <th className="px-4 py-3 font-medium">USER_ID</th>
                  <th className="px-4 py-3 font-medium">TIMESTAMP</th>
                  <th className="px-4 py-3 font-medium">LAT</th>
                  <th className="px-4 py-3 font-medium">LONG</th>
                  <th className="px-4 py-3 font-medium">DEVICE_ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-text-secondary">
                {PREVIEW_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-white">{row.user_id}</td>
                    <td className="px-4 py-3">{row.timestamp}</td>
                    <td className="px-4 py-3">{row.lat}</td>
                    <td className="px-4 py-3">{row.long}</td>
                    <td className="px-4 py-3">{row.device_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-bg-dark/50 p-2 text-center text-[10px] text-text-muted border-t border-border">
            Showing 4 of 152,040 records
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2">
          <BrainCircuit className="w-5 h-5" />
          Run Anomaly Detection
        </button>
        <p className="text-center text-xs text-text-muted">
          Estimated processing time: <span className="text-white font-bold">~45s</span> based on file size.
        </p>
      </div>
    </div>
  );
}
