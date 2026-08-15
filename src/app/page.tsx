import Chatbot from '@/components/Chatbot';
import { fetchProjects, fetchExperience, fetchSkills, fetchEducation, fetchResearch } from '@/lib/api';
import { ExternalLink, Download, Code } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import SkillCard from '@/components/SkillCard';
import { TypewriterText, TerminalWindow, FloatingAvatar } from '@/components/CreativeUI';

function GithubLogo({ size = 20, className = "" }: { size?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function LinkedinLogo({ size = 20, className = "" }: { size?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default async function Home() {
  let projects = [];
  let experience = [];
  let skills = [];
  let education = [];
  let research = [];
  
  try {
    projects = await fetchProjects();
    experience = await fetchExperience();
    skills = await fetchSkills();
    education = await fetchEducation();
    research = await fetchResearch();
  } catch (e) {
    console.error("Backend not reachable or data missing", e);
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Navbar */}
      <nav className="sticky top-0 z-40 w-full glass">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10">
              {/* Animated outer ring */}
              <svg className="absolute inset-0 w-full h-full text-accent group-hover:rotate-180 transition-transform duration-700 ease-in-out" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="60 40 40 100" />
              </svg>
              {/* Simple Clean A Logo */}
              <span className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 z-10">
                A
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight group-hover:text-accent transition-colors">Ankit Adhikari</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-neutral-500 dark:text-neutral-400">
            <Link href="#hero" className="relative text-accent group">
              Home
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-accent rounded-full"></span>
            </Link>
            <Link href="#skills" className="relative hover:text-foreground transition-colors group">
              Skills
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-accent rounded-full transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#projects" className="relative hover:text-foreground transition-colors group">
              Projects
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-accent rounded-full transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#research" className="relative hover:text-foreground transition-colors group">
              Research
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-accent rounded-full transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Social Icons & Theme */}
          <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
            <a href="https://www.linkedin.com/in/ankeet-adhikari-336b18309/" target="_blank" className="flex items-center justify-center w-9 h-9 rounded-full bg-transparent hover:bg-foreground/5 dark:hover:bg-white/5 hover:text-foreground border border-transparent hover:border-foreground/10 dark:hover:border-white/20 transition-all duration-300">
              <LinkedinLogo size={18} />
            </a>
            <a href="https://github.com/ankeetholic" target="_blank" className="flex items-center justify-center w-9 h-9 rounded-full bg-transparent hover:bg-foreground/5 dark:hover:bg-white/5 hover:text-foreground border border-transparent hover:border-foreground/10 dark:hover:border-white/20 transition-all duration-300">
              <GithubLogo size={18} />
            </a>
            <div className="w-px h-5 bg-card-border mx-2"></div>
            <ThemeToggle />
          </div>

        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 space-y-16 py-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10 pb-10 mt-[-4rem]">
          <FadeIn delay={0.1} className="flex flex-col items-start gap-4">
            <div className="text-xl font-medium text-neutral-500 flex items-center gap-2">
              👋 Hello, I'm
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-purple-500 leading-tight mb-2 whitespace-nowrap">
              Ankit Adhikari
            </h1>
            
            <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 whitespace-nowrap overflow-hidden">
              I am a <TypewriterText text="Software Engineer & AI/ML Researcher." className="text-accent" />
            </div>

            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg mt-4 text-lg">
              I build intelligent systems, full-stack applications, and machine learning solutions for real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-8">
              <Link href="/resume" className="px-6 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-accent/20">
                <Download size={20} /> Download CV
              </Link>
              <a href="https://github.com/ankeetholic" target="_blank" className="group px-6 py-3 bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 text-foreground border border-foreground/10 dark:border-white/10 hover:border-foreground/30 dark:hover:border-white/30 backdrop-blur-md rounded-full font-bold transition-all duration-300 flex items-center gap-2">
                <GithubLogo size={20} className="group-hover:scale-110 transition-transform" /> GitHub Profile
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} className="hidden lg:flex justify-center">
            <FloatingAvatar />
          </FadeIn>
        </section>

        {/* Skills Section (Floating Tech Bubbles) */}
        <section id="skills" className="scroll-mt-24">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-4 text-foreground">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Technical Skills
            </h2>
          </FadeIn>
          
          {skills.length > 0 ? (
            <FadeIn delay={0.2} className="relative w-full py-4 min-h-[160px] flex items-center justify-center">
              {/* Subtle background glow for the whole section */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-500/5 to-transparent blur-3xl rounded-full opacity-50"></div>
              
              <div className="relative z-10 flex flex-nowrap items-center gap-x-4 px-4 max-w-full overflow-x-auto py-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {skills.map((skill: any, index: number) => (
                  <div key={skill.id} className="flex-none">
                    <SkillCard skill={skill} index={index} />
                  </div>
                ))}
              </div>
            </FadeIn>
          ) : (
            <p className="text-neutral-500">No skills found.</p>
          )}
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Featured Projects
            </h2>
          </FadeIn>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p: any, idx: number) => {
                // Dynamic gorgeous gradient fallbacks if no image exists
                const gradients = [
                  "from-violet-600 via-fuchsia-600 to-orange-500",
                  "from-cyan-500 via-blue-500 to-indigo-600",
                  "from-emerald-500 via-teal-500 to-cyan-600",
                  "from-rose-500 via-red-500 to-amber-500"
                ];
                const bgClass = gradients[idx % gradients.length];

                return (
                  <FadeIn key={p.id} delay={0.1 * idx} className="group relative rounded-2xl overflow-hidden h-[300px] shadow-sm shadow-black/5 dark:shadow-accent/5 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 cursor-default">
                    
                    {/* Background Layer */}
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    ) : (
                      <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${bgClass} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out`}></div>
                    )}
                  
                  {/* Dark Gradient Overlay for perfect text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                  
                  {/* Content Layer */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div className="transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      
                      {/* Technologies Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.technologies.split(',').slice(0, 3).map((tech: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 bg-white/20 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold rounded-full">
                            {tech.trim()}
                          </span>
                        ))}
                        {p.technologies.split(',').length > 3 && (
                          <span className="px-2 py-0.5 bg-white/10 text-white/70 text-[10px] font-bold rounded-full">
                            +{p.technologies.split(',').length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-black text-white mb-2 tracking-tight line-clamp-1">{p.title}</h3>
                      
                      {/* Description (Fades in) */}
                      <p className="text-white/80 text-xs line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {p.description}
                      </p>
                      
                      {/* Action Buttons (Fades in) */}
                      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        {p.github_url && (
                          <a href={p.github_url} target="_blank" className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-full text-xs font-bold hover:scale-105 transition-transform">
                            <GithubLogo size={14} /> Source
                          </a>
                        )}
                        {p.live_url && (
                          <a href={p.live_url} target="_blank" className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-xs font-bold hover:bg-white/30 transition-colors">
                            <ExternalLink size={14} /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
                );
              })}
            </div>
          ) : (
            <p className="text-neutral-500">No projects found. Add them in the Django admin.</p>
          )}

          <FadeIn delay={0.4} className="mt-8 flex justify-center">
            <a href="https://github.com/ankeetholic" target="_blank" className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 text-foreground border border-foreground/10 dark:border-white/10 hover:border-foreground/30 dark:hover:border-white/30 backdrop-blur-md text-sm font-bold rounded-full transition-all duration-300">
              View all projects on GitHub <GithubLogo size={16} className="group-hover:scale-110 transition-transform" />
            </a>
          </FadeIn>
        </section>

        {/* Research Section (Premium Glassmorphic) */}
        <section id="research" className="scroll-mt-24 relative">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Research & Publications
            </h2>
          </FadeIn>
          
          {research.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {research.map((res: any, idx: number) => (
                <FadeIn key={res.id} delay={0.1 * idx} className="group relative rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-card-border p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all duration-500 overflow-hidden">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">{res.title}</h3>
                        {res.publication_status && (
                          <span className="px-3 py-1 bg-accent/10 dark:bg-accent/20 text-accent border border-accent/20 text-xs font-bold rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(var(--accent),0.1)] dark:shadow-[0_0_15px_rgba(var(--accent),0.2)]">
                            {res.publication_status}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-foreground/70 text-sm leading-relaxed mb-6 max-w-3xl">
                        {res.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {res.methodology && (
                          <div className="bg-foreground/5 backdrop-blur-md p-4 rounded-xl border border-foreground/10">
                            <h4 className="text-[10px] font-black text-foreground/50 uppercase tracking-widest mb-1.5">Methodology</h4>
                            <p className="text-sm font-medium text-foreground/90">{res.methodology}</p>
                          </div>
                        )}
                        {res.dataset && (
                          <div className="bg-foreground/5 backdrop-blur-md p-4 rounded-xl border border-foreground/10">
                            <h4 className="text-[10px] font-black text-foreground/50 uppercase tracking-widest mb-1.5">Dataset</h4>
                            <p className="text-sm font-medium text-foreground/90">{res.dataset}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {res.technologies && res.technologies.split(',').map((tech: string, i: number) => (
                          <span key={i} className="px-3 py-1 bg-foreground/5 border border-foreground/10 text-foreground/80 text-xs font-semibold rounded-lg">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {res.paper_url && (
                      <div className="shrink-0 pt-2">
                        <a href={res.paper_url} target="_blank" className="flex items-center justify-center px-6 py-2.5 bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/10 hover:border-foreground/30 backdrop-blur-md rounded-full text-sm font-bold transition-all duration-300">
                          View Publication
                        </a>
                      </div>
                    )}
                    
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <p className="text-neutral-500">No research publications found.</p>
          )}
        </section>

        {/* Education Section */}
        <FadeIn delay={0.1}>
          <section id="education" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
              <span className="w-8 h-1 bg-accent rounded-full"></span> Education
            </h2>
            <div className="space-y-8 border-l border-card-border ml-3 pl-8 relative">
              {education.length > 0 ? (
                education.map((edu: any, i: number) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <div className="text-accent font-medium mb-2">{edu.institution}</div>
                    <div className="text-sm text-neutral-500 mb-4">{edu.start_date?.split('-')[0]} - {edu.end_date ? edu.end_date.split('-')[0] : 'Present'}</div>
                    <p className="text-neutral-600 dark:text-neutral-400">{edu.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-neutral-500">No education records found.</p>
              )}
            </div>
          </section>
        </FadeIn>

      </main>

      <footer className="border-t border-card-border mt-16 py-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3.5">
            <img src="/profile2.jpg" alt="Ankit Adhikari" className="w-[46px] h-[46px] rounded-full object-cover shadow-sm border border-card-border" />
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-black tracking-tight text-foreground leading-none">Ankit Adhikari</h2>
              <p className="text-neutral-500 text-[13px] mt-1.5 font-medium">Software Engineer & AI/ML Researcher</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-neutral-500">
            <a href="https://github.com/ankeetholic" target="_blank" className="hover:text-foreground hover:bg-foreground/5 p-2 rounded-full transition-all">
              <GithubLogo size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ankeet-adhikari-336b18309/" target="_blank" className="hover:text-foreground hover:bg-foreground/5 p-2 rounded-full transition-all">
              <LinkedinLogo size={20} />
            </a>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-12 mt-6 pt-6 border-t border-card-border/50 text-neutral-500 text-[13px] flex flex-col items-center justify-center gap-2">
          <p>© {new Date().getFullYear()} Ankit Adhikari. All rights reserved.</p>
          <p>Built with <span className="text-foreground font-medium">Next.js</span> & <span className="text-foreground font-medium">Django</span></p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
