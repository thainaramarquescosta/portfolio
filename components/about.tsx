import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Atuo como desenvolvedora de software focada no desenvolvimento de aplicações web, mobile e desktop, criação de APIs e evolução de sistemas em produção. Trabalho tanto na construção de sistemas desde o início, definindo estrutura e implementando funcionalidades, quanto na manutenção e melhoria de aplicações existentes. 
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Minha stack principal inclui PHP com Laravel, Node.js (Express), React.js e React Native. Utilizo também Java (Spring) e Python quando necessário. No dia a dia trabalho com bancos de dados relacionais e não relacionais, como MySQL, PostgreSQL e MongoDB, além de versionamento com Git e ambientes containerizados com Docker.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Formação</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Bacharelado em Ciência da Computação</strong>
                    <br />
                    Instituto Federal do Ceará (2020-2025)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Empresa</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Script - Software e Inovação</strong>
                    <br />
                    Co-founder e Desenvolvedora
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Localização</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Ceará, Brasil</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
