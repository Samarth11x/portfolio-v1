import { contactContent } from '@/content/contact';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactGrid() {
  return (
    <div className="flex flex-col gap-4">
      <a href={`mailto:${contactContent.email}`} className="p-6 rounded-2xl bg-surface border border-border/50 hover:border-accent/50 transition-colors flex items-center gap-4 group cursor-pointer w-full">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <Mail className="w-5 h-5 text-accent" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-foreground-subtle mb-1">Email</p>
          <p className="text-base font-semibold text-foreground truncate">{contactContent.email}</p>
        </div>
      </a>
      
      {contactContent.phone && (
        <a href={`tel:${contactContent.phone.replace(/[^0-9+]/g, '')}`} className="p-6 rounded-2xl bg-surface border border-border/50 hover:border-accent/50 transition-colors flex items-center gap-4 group cursor-pointer w-full">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-foreground-subtle mb-1">Phone</p>
            <p className="text-base font-semibold text-foreground truncate">{contactContent.phone}</p>
          </div>
        </a>
      )}

      <div className="p-6 rounded-2xl bg-surface border border-border/50 flex items-center gap-4 w-full">
        <div className="w-12 h-12 rounded-full bg-surface-hover flex items-center justify-center shrink-0 border border-border/50">
          <MapPin className="w-5 h-5 text-foreground-muted" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-foreground-subtle mb-1">Location</p>
          <p className="text-base font-semibold text-foreground truncate">{contactContent.location}</p>
        </div>
      </div>
    </div>
  );
}
