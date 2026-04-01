# Portfolio - Thainara

Portfolio pessoal desenvolvido com Next.js, React e TypeScript.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Um gerenciador de pacotes: `npm`, `yarn` ou `pnpm`

## Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd thainara-portfolio
```

2. Instale as dependências:

**Usando npm:**
```bash
npm install
```

**Usando yarn:**
```bash
yarn install
```

**Usando pnpm:**
```bash
pnpm install
```

## Executando o projeto

### Modo de desenvolvimento

Para rodar o projeto em modo de desenvolvimento (com hot-reload):

**Usando npm:**
```bash
npm run dev
```

**Usando yarn:**
```bash
yarn dev
```

**Usando pnpm:**
```bash
pnpm dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

### Build para produção

Para criar uma build de produção:

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

### Executar build de produção

Para executar a build de produção localmente:

```bash
npm run start
# ou
yarn start
# ou
pnpm start
```

## Scripts disponíveis

- `dev` - Inicia o servidor de desenvolvimento
- `build` - Cria uma build de produção
- `start` - Executa a build de produção
- `lint` - Executa o linter do código

## Tecnologias utilizadas

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide React

## Estrutura do projeto

```
thainara-portfolio/
├── app/              # Páginas e rotas (App Router)
├── components/       # Componentes React
│   ├── ui/          # Componentes de UI (shadcn/ui)
│   └── ...          # Outros componentes
├── lib/             # Utilitários e helpers
├── public/          # Arquivos estáticos
└── styles/          # Estilos globais
```

## Desenvolvimento

O projeto utiliza o App Router do Next.js. As páginas estão em `app/` e os componentes reutilizáveis em `components/`.

Para mais informações sobre Next.js, consulte a [documentação oficial](https://nextjs.org/docs).

