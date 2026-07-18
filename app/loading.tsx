import { Loader2 } from 'lucide-react';
import { Container } from '@/components/layout';

export default function Loading() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[60vh]">
      <Container className="flex justify-center">
        <Loader2 className="w-8 h-8 text-accent animate-spin" />
        <span className="sr-only">Loading...</span>
      </Container>
    </div>
  );
}
