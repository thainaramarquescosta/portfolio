"use client"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Sobre */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white">Thainara Marques</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed">
              Desenvolvedora de Software especializada em criar soluções digitais inovadoras. 
              Transformando ideias em produtos de sucesso.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Thainara Marques. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
