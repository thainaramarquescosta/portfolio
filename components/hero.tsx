"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
              <Image
                src="/foto-perfil.jpg"
                alt="Thainara Marques"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Thainara Marques</h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">Desenvolvedora de Software</p>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Co-founder na <span className="font-semibold text-purple-600 dark:text-purple-400">Script - Software e Inovação</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              Ver Projetos
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/thainara-marques-da-costa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:thainaradev@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
