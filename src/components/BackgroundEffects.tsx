const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block" style={{ zIndex: 0 }}>
      {/* Grid Pattern Base */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(111, 74, 149, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient 1 - Hero Section (Top Right) */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/4 translate-x-1/4"
        style={{
          background: 'radial-gradient(circle, rgba(111, 74, 149, 0.15) 0%, transparent 50%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Gradient 2 - Middle (Center Left) */}
      <div
        className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/4"
        style={{
          background: 'radial-gradient(circle, rgba(218, 213, 208, 0.08) 0%, transparent 50%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Gradient 3 - Bottom Right */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-y-1/4 translate-x-1/4"
        style={{
          background: 'radial-gradient(circle, rgba(111, 74, 149, 0.12) 0%, transparent 50%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Mesh Gradient Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(111, 74, 149, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(42, 42, 40, 0.3) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(28, 28, 26, 0.4) 0px, transparent 50%)
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* Concentric Circles - Hero */}
      <div className="absolute -top-32 -right-32 hidden md:block animate-spin-slow">
        <div className="w-[300px] h-[300px] rounded-full border border-[rgba(111,74,149,0.1)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(111,74,149,0.08)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[rgba(111,74,149,0.05)]" />
      </div>

      {/* Grid Lines Tecnológico */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(218, 213, 208, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(218, 213, 208, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Hexágonos Decorativos */}
      <div className="absolute top-1/4 left-1/4 w-[100px] h-[100px] animate-float hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill="url(#hexGradient1)"
            stroke="rgba(111, 74, 149, 0.15)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(111, 74, 149, 0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-2/3 right-1/3 w-[60px] h-[60px] animate-float-delayed hidden lg:block" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full rotate-45">
          <polygon
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill="url(#hexGradient2)"
            stroke="rgba(111, 74, 149, 0.15)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(111, 74, 149, 0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-1/2 right-1/4 w-[150px] h-[150px] animate-float hidden lg:block" style={{ animationDelay: '4s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-12">
          <polygon
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill="url(#hexGradient3)"
            stroke="rgba(111, 74, 149, 0.15)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="hexGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(111, 74, 149, 0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Linhas de Conexão Neural */}
      <svg className="absolute inset-0 w-full h-full hidden md:block" style={{ opacity: 0.15 }}>
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="rgba(218, 213, 208, 0.3)" strokeWidth="1" />
        <line x1="70%" y1="30%" x2="85%" y2="50%" stroke="rgba(218, 213, 208, 0.3)" strokeWidth="1" />
        <line x1="20%" y1="60%" x2="40%" y2="80%" stroke="rgba(218, 213, 208, 0.3)" strokeWidth="1" />
        <line x1="60%" y1="70%" x2="80%" y2="85%" stroke="rgba(218, 213, 208, 0.3)" strokeWidth="1" />
        <circle cx="10%" cy="20%" r="3" fill="rgba(111, 74, 149, 0.4)" />
        <circle cx="30%" cy="40%" r="3" fill="rgba(111, 74, 149, 0.4)" />
        <circle cx="70%" cy="30%" r="3" fill="rgba(111, 74, 149, 0.4)" />
        <circle cx="85%" cy="50%" r="3" fill="rgba(111, 74, 149, 0.4)" />
      </svg>

      {/* Partículas Flutuantes */}
      <div className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-[rgba(111,74,149,0.3)] animate-particle-1 hidden lg:block" />
      <div className="absolute top-[40%] right-[25%] w-1 h-1 rounded-full bg-[rgba(218,213,208,0.2)] animate-particle-2 hidden lg:block" />
      <div className="absolute top-[60%] left-[30%] w-1 h-1 rounded-full bg-[rgba(111,74,149,0.3)] animate-particle-3 hidden lg:block" />
      <div className="absolute top-[80%] right-[35%] w-1 h-1 rounded-full bg-[rgba(218,213,208,0.2)] animate-particle-1 hidden lg:block" />
      <div className="absolute top-[25%] left-[70%] w-1 h-1 rounded-full bg-[rgba(111,74,149,0.3)] animate-particle-2 hidden lg:block" />
      <div className="absolute top-[50%] right-[10%] w-1 h-1 rounded-full bg-[rgba(218,213,208,0.2)] animate-particle-3 hidden lg:block" />

      {/* Scan Lines */}
      <div 
        className="absolute inset-0 opacity-20 animate-scan-lines"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(218, 213, 208, 0.02) 0px, rgba(218, 213, 208, 0.02) 2px, transparent 2px, transparent 6px)',
        }}
      />

      {/* Código Binário Decorativo */}
      <div className="absolute top-10 right-10 text-[10px] font-mono text-[rgba(111,74,149,0.04)] leading-tight opacity-30 hidden xl:block">
        01001101 01000001<br />
        01010011 01010100<br />
        01000101 01010010<br />
        01010000 01001001<br />
        01000101 01000011<br />
        01000101
      </div>

      <div className="absolute bottom-20 left-10 text-[10px] font-mono text-[rgba(111,74,149,0.04)] leading-tight opacity-30 hidden xl:block">
        01010011 01000001<br />
        01000001 01010011<br />
        00110010 00110000<br />
        00110010 00110101
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 animate-shimmer hidden lg:block" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(218, 213, 208, 0.03) 50%, transparent 100%)',
        transform: 'translateX(-100%)',
      }} />
    </div>
  );
};

export default BackgroundEffects;
