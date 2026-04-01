export function Technologies() {
  const technologies = [
    // Frontend
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Tailwind", category: "Frontend" },
    // Backend
    { name: "PHP", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "Spring Framework", category: "Backend" },
    { name: "Python", category: "Backend" },
    // Mobile
    { name: "React Native", category: "Mobile" },
    // Database
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Sequelize", category: "Database" },
    // Tools
    { name: "Docker", category: "Tools" }, 
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
  ]

  return (
    <section id="technologies" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Tecnologias</h2>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="bg-white dark:bg-gray-700 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200 shadow-sm"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
