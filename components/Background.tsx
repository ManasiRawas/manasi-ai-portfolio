export default function Background() {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
  
        {/* Center Glow */}
        <div className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[170px] animate-pulse" />
  
        {/* Top Left */}
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[140px] animate-[pulse_7s_ease-in-out_infinite]" />
  
        {/* Bottom Right */}
        <div className="absolute -right-32 bottom-10 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[170px] animate-[pulse_8s_ease-in-out_infinite]" />
  
        {/* Bottom Left */}
        <div className="absolute left-20 bottom-0 h-[360px] w-[360px] rounded-full bg-cyan-400/15 blur-[140px] animate-[pulse_9s_ease-in-out_infinite]" />
  
        {/* Top Right */}
        <div className="absolute right-24 top-10 h-[280px] w-[280px] rounded-full bg-indigo-500/20 blur-[130px] animate-[pulse_6s_ease-in-out_infinite]" />
  
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]" />
  
      </div>
    );
  }