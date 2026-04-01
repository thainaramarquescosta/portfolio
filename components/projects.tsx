import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Agendamento de Refeições e Transporte Nutrilite",
      description:
        "Sistema web desenvolvido para otimizar a logística de refeições e transporte em um ambiente de grande escala de  uma empresa Multinacional. O sistema permite que colaboradores agendem e gerenciem seus pedidos de forma autônoma, enquanto o RH utiliza um painel administrativo  para controlar, confirmar e cancelar solicitações, garantindo eficiência operacional e reduzindo erros de planejamento.",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "MySQL"],
      type: "Sistema Web",
      status: "Interno",
    },
    {
      title: "Siauto Multimarcas",
      description:
        "O Siauto Multimarcas é uma Plataforma de Software como Serviço (SaaS), projetada para ser alugada por concessionárias e lojas de veículos multimarcas. O objetivo principal é oferecer uma solução de Planejamento de Recursos Empresariais (ERP) completa e centralizada. O sistema automatiza todos os processos críticos de vendas, gestão operacional e conformidade fiscal dos lojistas. ",
      technologies: ["React", "Electron", "JavaScript", "Tailwind CSS"],
      type: "Sistema Desktop",
      status: "Interno",
    },
    {
      title: "Grupo Savires",
      description:
        "O Aplicativo Grupo Savires é uma solução móvel  desenvolvida para transformar a gestão e o acompanhamento de obras no setor da construção civil. Focada em otimizar a organização, a comunicação interna e a documentação digital, esta plataforma oferece gerenciamento de obras, relatórios de progresso, acompanhamento de campo com recursos de captura de fotos dos projetos e um chat interno de comunicação para conectar as equipes no canteiro e no escritório.",
      technologies: ["React Native", "Node.js", "JavaScript", "TypeScript", "Tailwind CSS"],
      type: "Aplicativo Mobile",
      status: "Interno",
    },
      {
      title: "Desenvolve",
      description:
        "Plataforma web voltada para capacitação profissional, reunindo treinamentos e ferramentas práticas para o desenvolvimento de carreira. No projeto, contribuí para a implementação de módulos interativos de cursos, a criação de um gerador de currículos dinâmico e o desenvolvimento da área de candidaturas, onde usuários podem visualizar, filtrar e se inscrever em vagas. Trata-se de um projeto orientado a impacto social, com foco em apoiar usuários na jornada rumo ao mercado de trabalho.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
      type: "Sistema Web",
      status: "Público",
      link: "https://desenvolve.netlify.app/",
    },
    {
      title: "Sistema de Cadastro de Pets",
      description:
        "Aplicação desenvolvida em Laravel para auxiliar pet shops no gerenciamento de informações de animais de estimação atendidos. O sistema permite registrar dados completos dos pets como nome, espécie, raça, idade e histórico do tutor. Facilitando o controle e o acompanhamento dos animais. Inclui um painel administrativo intuitivo, com funcionalidades de busca, filtros e edição de cadastros, otimizando o fluxo de atendimento e a organização interna.",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      type: "Sistema Web",
      status: "Interno",
    },
  
   
  ]

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Projetos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Concluído" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="mt-auto">
                      <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver Projeto
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
