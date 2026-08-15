import Link from 'next/link';
import { ArrowLeft, FileText, Clock } from 'lucide-react';

export const metadata = {
  title: 'Resume | Ankit Adhikari',
  description: 'Ankit Adhikari\'s Resume',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full bg-card border border-card-border rounded-3xl p-8 shadow-xl shadow-black/5 dark:shadow-white/5 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 relative">
            <FileText size={40} className="text-accent" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-card shadow-sm">
              <Clock size={16} className="text-purple-500" />
            </div>
          </div>
          
          <h1 className="text-3xl font-black text-foreground mb-3 tracking-tight">
            Resume Coming Soon
          </h1>
          
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
            I am currently updating my resume with my latest research and projects. I will upload it here shortly!
          </p>
          
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background dark:bg-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
