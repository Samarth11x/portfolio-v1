import { resumeContent } from '@/content/resume';
import { FileText, Download } from 'lucide-react';

export function ResumeCard() {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border/50 flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start md:items-center">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Curriculum Vitae</h3>
            <p className="text-sm text-foreground-subtle">Last updated: {resumeContent.lastUpdated}</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-foreground-muted">
          <p><strong className="text-foreground">Education:</strong> {resumeContent.education}</p>
          <p><strong className="text-foreground">Current Focus:</strong> {resumeContent.currentFocus}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {resumeContent.coreSkills.map(skill => (
              <span key={skill} className="px-2 py-0.5 rounded-md bg-surface-hover text-xs font-medium text-foreground-subtle border border-border/50">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <a 
        href={resumeContent.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        <Download className="w-4 h-4" />
        Download PDF
      </a>
    </div>
  );
}
