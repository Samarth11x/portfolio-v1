import { toolsContent } from '@/content/tools';

export function DeveloperEnvironment() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          {toolsContent.map((tool) => (
            <tr key={tool.category} className="border-b border-border/30 last:border-0 hover:bg-surface/30 transition-colors">
              <th className="py-4 pr-6 text-sm font-semibold text-foreground-subtle whitespace-nowrap">
                {tool.category}
              </th>
              <td className="py-4 text-foreground font-medium">
                {tool.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
