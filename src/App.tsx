import { Brain, Code2, Database, Workflow } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-96 -right-96 bg-blue-500/5 rounded-full blur-3xl animate-glow" />
        <div className="absolute w-[600px] h-[600px] -bottom-64 -left-64 bg-indigo-500/5 rounded-full blur-3xl animate-glow delay-1000" />
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 bg-cyan-500/5 rounded-full blur-3xl animate-glow delay-2000" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code2 className="absolute top-1/4 left-1/4 text-blue-400/10 w-16 h-16 animate-float" />
        <Database className="absolute top-1/3 right-1/4 text-indigo-400/10 w-12 h-12 animate-float-delayed" />
        <Workflow className="absolute bottom-1/3 left-1/3 text-cyan-400/10 w-14 h-14 animate-float" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-12 space-y-4">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-16 h-16 text-blue-400 mr-3" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Azure AI Foundry
            </h1>
          </div>
          <h2 className="text-3xl font-semibold text-gray-100 tracking-tight">
            Master AI Development with Azure
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore hands-on tutorials and sample applications to accelerate your journey
            with Azure AI services. Learn by building real-world AI solutions.
          </p>
          <p className="text-2xl font-semibold text-blue-400 mt-8">Coming Soon</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Interactive Tutorials",
              description: "Step-by-step guides to build AI applications with Azure services"
            },
            {
              icon: <Code2 className="w-8 h-8" />,
              title: "Sample Projects",
              description: "Production-ready code samples for common AI scenarios"
            },
            {
              icon: <Workflow className="w-8 h-8" />,
              title: "Best Practices",
              description: "Learn Azure AI development patterns and architectures"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div className="flex justify-center mb-4 text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
