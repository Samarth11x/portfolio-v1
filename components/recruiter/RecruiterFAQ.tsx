import { recruiterFAQ } from '@/content/faq';

export function RecruiterFAQ() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {recruiterFAQ.map((faq) => (
        <div key={faq.question} className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground leading-snug">{faq.question}</h3>
          <p className="text-foreground-muted leading-relaxed">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
