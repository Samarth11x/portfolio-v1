import { resumeContent } from '@/content/resume';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Badge, Button } from '@/components/ui';

export function ResumeCard() {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border/50 flex flex-col lg:flex-row gap-6 md:gap-8 justify-between items-start lg:items-center">
      <div className="space-y-4 flex-grow">
        <div className="flex flex-wrap items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-accent" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-foreground">Curriculum Vitae</h3>
              <Badge variant="success">ATS Friendly</Badge>
            </div>
            <p className="text-sm text-foreground-subtle flex items-center gap-2">
              <span>Updated {resumeContent.lastUpdated}</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span>Version {resumeContent.version}</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span>PDF</span>
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-foreground-muted">
          <p><strong className="text-foreground">Education:</strong> {resumeContent.education}</p>
          <p><strong className="text-foreground">Current Focus:</strong> {resumeContent.currentFocus}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {resumeContent.coreSkills.map(skill => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0">
        <Button 
          variant="secondary"
          href={resumeContent.downloadUrl}
          external
          className="w-full sm:w-auto"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Preview
        </Button>
        <a 
          href={resumeContent.downloadUrl}
          download
          className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </div>
    </div>
  );
}
