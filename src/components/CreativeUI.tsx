'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle"
      />
    </span>
  );
}

export function TerminalWindow() {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="rounded-xl overflow-hidden border border-card-border bg-[#0d1117] shadow-2xl"
    >
      <div className="bg-[#161b22] px-4 py-2 flex items-center gap-2 border-b border-card-border">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-xs text-neutral-500 font-mono ml-2">ankit@portfolio:~</span>
      </div>
      <div className="p-6 font-mono text-sm">
        <div className="text-accent-light mb-2">$ whoami</div>
        <div className="text-green-400 mb-4">Ankit Adhikari</div>
        
        <div className="text-accent-light mb-2">$ cat passion.txt</div>
        <div className="text-neutral-300 leading-relaxed mb-4">
          Bridging the gap between cutting-edge AI/ML research and scalable full-stack applications.
        </div>

        <div className="text-accent-light mb-2">$ ./deploy_future.sh</div>
        <div className="text-yellow-400 flex items-center gap-2">
          <span>Loading models...</span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            [OK]
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export function FloatingAvatar() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-purple-500 blur-3xl opacity-20 animate-pulse" />
      <div className="absolute inset-2 rounded-full border-2 border-accent/30 overflow-hidden bg-card">
        <img 
          src="/profile2.jpg" 
          alt="Ankit Adhikari" 
          className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/profile1.png";
          }}
        />
      </div>
    </motion.div>
  );
}
