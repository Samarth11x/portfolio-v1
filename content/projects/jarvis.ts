import { ProjectCaseStudy } from './types';

export const jarvis: ProjectCaseStudy = {
  id: 'jarvis-os',
  title: 'JARVIS OS',
  tagline: 'An extensible, agentic AI assistant system.',
  status: 'In Progress',
  summary: 'JARVIS OS is an intelligent, modular AI assistant designed to automate personal workflows, synthesize information, and act autonomously based on user context. It aims to bridge the gap between simple chatbots and fully autonomous agentic systems.',
  problem: 'Current LLM interfaces are isolated silos. They lack deep contextual memory of the user and cannot easily execute local actions or chain multiple complex tools without significant scaffolding.',
  solution: 'I architected JARVIS OS as a modular framework where the core language model is decoupled from the execution environment. This allows the system to route intents to specialized sub-agents and execute tools locally while maintaining a unified memory state.',
  features: [
    { title: 'Modular Architecture', description: 'Agentic subsystems are encapsulated, allowing new capabilities to be added without rewriting the core routing logic.' },
    { title: 'Intelligent Automation', description: 'Capable of chaining multiple steps to resolve complex user intents autonomously.' },
    { title: 'Voice & Memory Capabilities', description: 'Long-term context retention and voice interaction modules. (Planned)' },
  ],
  techStack: [
    { category: 'AI & ML', technologies: ['Python', 'OpenAI API', 'LangChain'] },
    { category: 'Backend', technologies: ['FastAPI', 'Node.js'] },
  ],
  architecture: 'The system utilizes a central orchestrator pattern. A primary router model classifies the user intent and delegates the execution to specialized agents (e.g., Code Agent, Research Agent). Memory is managed via a vector database for semantic retrieval of past interactions.',
  challenges: 'Managing hallucination during complex multi-step tool execution was a major hurdle. Early versions would get stuck in infinite loops if a tool returned an unexpected error format.',
  decisions: 'I chose Python for the core AI orchestration due to its superior ecosystem for machine learning and natural language processing, while keeping the possibility open for lightweight Node.js microservices for I/O bound web integrations.',
  lessonsLearned: 'I developed a deep understanding of prompt engineering for tool use and the importance of strictly typing the JSON schemas that the LLM is expected to return.',
  futureScope: 'Integrating fully local, lightweight LLMs to reduce API costs and latency, alongside implementing a persistent long-term memory graph.',
  links: {
    github: 'https://github.com/Samarth11x/jarvis-os', // Placeholder, update if known
  },
  order: 1,
  featured: true,
};
