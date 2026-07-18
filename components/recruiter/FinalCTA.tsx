import { recruiterContent } from '@/content/recruiter';
import { contactContent } from '@/content/contact';
import { Send } from 'lucide-react';

export function FinalCTA() {
  return (
    <div className="p-8 md:p-12 rounded-3xl bg-accent/5 border border-accent/20 text-center space-y-6">
      <p className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed">
        "{recruiterContent.cta.message}"
      </p>
      <div className="pt-4 flex justify-center">
        <a 
          href={`mailto:${contactContent.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold tracking-wide hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(var(--accent),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent),0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Send className="w-5 h-5" />
          {recruiterContent.cta.buttonLabel}
        </a>
      </div>
    </div>
  );
}
