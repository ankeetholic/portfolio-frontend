'use client';

import { Code } from 'lucide-react';
import { StaggerItem } from './AnimatedSection';

export default function SkillCard({ skill, index = 0 }: { skill: any, index?: number }) {
  // Normalize skill name for the CDN
  let slug = skill.name.toLowerCase().replace(/\s+/g, '');
  if (slug === 'next.js') slug = 'nextdotjs';
  if (slug === 'c++') slug = 'cplusplus';
  if (slug === 'node.js') slug = 'nodedotjs';
  if (slug === 'react') slug = 'react';

  const floatClasses = ["animate-float", "animate-float-delayed", "animate-float-slow"];
  const floatClass = floatClasses[index % 3];

  return (
    <div className={`relative flex flex-col items-center justify-center w-20 h-24 group cursor-default ${floatClass}`}>
      {/* The Floating Glass Bubble */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-full glass border border-card-border shadow-lg shadow-black/5 dark:shadow-accent/5 group-hover:shadow-accent/20 group-hover:border-accent group-hover:scale-110 transition-all duration-500 z-10 bg-background/50">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <img 
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={skill.name}
          className="w-7 h-7 grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 z-10"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden text-neutral-400 group-hover:text-accent transition-all duration-500 z-10">
          <Code size={20} />
        </div>
      </div>
      
      {/* Skill Name */}
      <span className="absolute -bottom-2 text-[10px] font-bold text-transparent group-hover:text-foreground transition-all duration-500 text-center tracking-wider uppercase transform translate-y-1 group-hover:translate-y-2 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}
