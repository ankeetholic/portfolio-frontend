'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { sendChatMessage } from '@/lib/api';

type Message = { role: 'user' | 'ai'; content: string };

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hi! I'm Ankit's AI Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    
    try {
      const response = await sendChatMessage(userMessage);
      setMessages(prev => [...prev, { role: 'ai', content: response.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "Network error: Could not reach the backend server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[300px] sm:w-[320px] h-[450px] bg-card border border-card-border shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden rounded-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="pt-5 pb-3 px-5 flex justify-between items-center bg-card border-b border-card-border/50">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              <h3 className="font-bold text-sm tracking-wide text-foreground">Ankit's Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-foreground transition-colors">
              <X size={18} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-[14px] bg-background">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                  msg.role === 'user' 
                    ? 'bg-accent text-white rounded-br-sm shadow-sm' 
                    : 'bg-card text-foreground border border-card-border rounded-bl-sm shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card text-foreground border border-card-border rounded-2xl px-4 py-2.5 rounded-bl-sm flex gap-2 items-center shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-accent" /> <span className="text-foreground/70">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="p-3 bg-card border-t border-card-border">
            <div className="flex gap-2 items-end bg-background rounded-2xl border border-card-border focus-within:border-accent/50 focus-within:ring-1 focus-within:ring-accent/20 transition-all p-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Message Assistant..."
                className="w-full max-h-32 resize-none bg-transparent px-3 py-2.5 focus:outline-none text-sm text-foreground placeholder:text-neutral-400"
                rows={1}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 mb-0.5 mr-0.5 bg-accent text-white rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-sm disabled:shadow-none"
              >
                <Send size={16} className="translate-x-[-1px] translate-y-[1px]" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-accent text-white w-14 h-14 rounded-full shadow-[0_0_20px_rgba(var(--accent),0.4)] hover:shadow-[0_0_30px_rgba(var(--accent),0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
