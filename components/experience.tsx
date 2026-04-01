import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Freelancer - Desenvolvedora",
      company: "Home Office",
      period: "2020 - atual",
      location: "Remoto",
      description:
        "Atuo como freelancer desenvolvendo soluções digitais, incluindo páginas web, aplicativos móveis e aplicações desktop. Sou responsável por criar interfaces funcionais e visuais alinhadas às necessidades dos clientes, garantindo qualidade, inovação e eficiência nos projetos entregues.",
      skills: ["JavaScript", "Tailwind CSS", "SASS", "React.js", "React Native", "Node.js", "Java", "Spring Boot"],
    },
    {
      title: "Jovem Aprendiz",
      company: "Nutrilite",
      period: "ago. 2023 - ago. 2024",
      location: "Ubajara-CE",
      description:
        "Atuei oferecendo suporte administrativo, organizando arquivos, gerenciando planilhas e apoiando recrutamento, eventos e comunicação. Desenvolvi e implementei um sistema de agendamento de refeições, otimizando processos internos.",
      skills: ["Microsoft Office", "JavaScript", "Bootstrap"],
    },
    {
      title: "Iniciação Científica",
      company: "Instituto Federal do Ceará",
      period: "set. 2021 - jan. 2023",
      location: "Home Office",
      description:
        "Instrutora em curso online no Lua Academy, atuando no planejamento e criação de materiais educacionais, análise de dados estatísticos e colaboração na redação de artigos acadêmicos.",
      skills: ["Análise de dados estatísticos", "Tecnologias educacionais", "Moodle", "Escrita científica"],
    },
  ]

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Experiência Profissional</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
