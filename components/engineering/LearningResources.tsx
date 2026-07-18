import { learningResources } from '@/content/books';
import { BookOpen, MonitorPlay, Users, FileText, FlaskConical } from 'lucide-react';

export function LearningResources() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Book': return <BookOpen className="w-4 h-4" />;
      case 'Course': return <MonitorPlay className="w-4 h-4" />;
      case 'Community': return <Users className="w-4 h-4" />;
      case 'Documentation': return <FileText className="w-4 h-4" />;
      case 'Research': return <FlaskConical className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Reading': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case 'Active': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      case 'Completed': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      default: return 'text-foreground-subtle bg-surface border-border';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {learningResources.map((resource) => (
        <div key={resource.title} className="p-5 rounded-xl border border-border/50 bg-surface/20 flex flex-col justify-between gap-4 hover:border-accent/30 transition-colors">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground-subtle mb-3 uppercase tracking-wider">
              {getIcon(resource.type)}
              {resource.type}
            </div>
            <h3 className="text-base font-semibold text-foreground leading-snug">
              {resource.title}
            </h3>
          </div>
          <div className="flex items-start">
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${getStatusColor(resource.status)}`}>
              {resource.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
