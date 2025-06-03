import {
  Briefcase,
  Code,
  Eye,
  Lightbulb,
  MessageCircle,
  Palette,
  Rocket,
  Smartphone,
  Star,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export const slides = [
  {
    id: 1,
    title: "Boas-vindas",
    icon: Users,
    content: {
      emoji: "👋",
      subtitle: "Quem somos nós?",
      points: [
        "Atuamos com tecnologia e design digital.",
        "Trabalhamos criando sites, aplicativos e experiências digitais.",
        "Hoje, viemos mostrar um pouco dos bastidores dessa profissão.",
      ],
    },
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Nossa história",
    icon: Lightbulb,
    content: {
      emoji: "💡",
      subtitle: "Como tudo começou?",
      points: [
        "Estudamos por conta própria, testamos, erramos, aprendemos.",
        "Começamos com projetos pequenos até entrar no mercado.",
        "A tecnologia mudou nossas vidas e pode mudar a de vocês também.",
      ],
    },
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "O que você vai ver hoje",
    icon: Target,
    content: {
      emoji: "🎯",
      subtitle: "Nesta palestra você vai descobrir:",
      points: [
        "Como funciona o trabalho com programação e design.",
        "Como são os bastidores de um projeto real.",
        "Dicas práticas para começar na área, mesmo sem experiência.",
      ],
    },
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "O mercado de programação",
    icon: Code,
    content: {
      emoji: "💼",
      subtitle: "Principais áreas para atuar:",
      points: [
        "Front-end (interfaces visuais)",
        "Back-end (lógica e banco de dados)",
        "Mobile (aplicativos)",
        "Fullstack (um pouco de tudo)",
      ],
    },
    color: "from-orange-500 to-red-500",
    section: "🧑‍💻 Parte 1 – Programação na prática",
  },
  {
    id: 5,
    title: "Inglês",
    icon: MessageCircle,
    content: {
      emoji: "🌍",
      subtitle: "Por que o inglês é fundamental na tech:",
      points: [
        "Documentações, tutoriais e comunidades são em inglês",
        "Melhores oportunidades de trabalho e salários",
        "Acesso a conteúdos mais atualizados e especializados",
      ],
    },
    color: "from-blue-500 to-teal-500",
  },
  {
    id: 6,
    title: "O que usamos no dia a dia",
    icon: Wrench,
    content: {
      emoji: "🧰",
      subtitle: "Ferramentas comuns para devs:",
      points: [
        "Git e GitHub: para versionar e colaborar",
        "Trello: para organizar tarefas",
        "VSCode: editor de código",
      ],
    },
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    title: "Como nasce um projeto real",
    icon: Rocket,
    content: {
      emoji: "🚀",
      subtitle: "Do zero até o lançamento:",
      points: [
        "Recebemos uma demanda do cliente",
        "Alinhamos com o time de design",
        "Planejamos e dividimos as tarefas entre devs",
      ],
    },
    color: "from-teal-500 to-blue-500",
  },
  {
    id: 8,
    title: "Realidades do dia a dia",
    icon: Eye,
    content: {
      emoji: "🔍",
      subtitle: "Como é o trabalho de verdade:",
      points: [
        "Reuniões e muita comunicação",
        "Bugs e prazos (acontece!)",
        "Documentar e testar o código é essencial",
      ],
    },
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 9,
    title: "Quer começar com programação?",
    icon: Code,
    content: {
      emoji: "🛠️",
      subtitle: "Dicas práticas:",
      points: [
        "Comece estudando lógica (é a base de tudo)",
        "Faça projetos simples e poste no GitHub",
        "Mostre curiosidade e vontade de aprender",
      ],
    },
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 10,
    title: "O que é UI/UX?",
    icon: Palette,
    content: {
      emoji: "🧠",
      subtitle: "UX = Experiência | 🎨 UI = Interface",
      points: [
        "UX: como o usuário se sente",
        "UI: como o produto é visualmente",
        "Um complementa o outro",
      ],
    },
    color: "from-violet-500 to-purple-500",
    section: "🎨 Parte 2 – Design de UI/UX",
  },
  {
    id: 11,
    title: "Por que design importa?",
    icon: Smartphone,
    content: {
      emoji: "📱",
      subtitle: "Um bom design faz toda a diferença:",
      points: [
        "Apps que funcionam bem e são bonitos",
        "Evita confusão e frustração do usuário",
        "Exemplo: já usou um app que te irritou?",
      ],
    },
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 12,
    title: "Como um designer trabalha",
    icon: Briefcase,
    content: {
      emoji: "🗂️",
      subtitle: "Etapas de um projeto:",
      points: [
        "Briefing → Pesquisa → Wireframe → Protótipo → Handoff",
        "Trabalhamos junto com devs e clientes",
        "Ferramentas: Figma, Notion, Trello",
      ],
    },
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 13,
    title: "Boas práticas no design",
    icon: Star,
    content: {
      emoji: "📏",
      subtitle: "Para criar bons produtos:",
      points: [
        "Pense primeiro no celular (mobile first)",
        "Hierarquia visual, acessibilidade, consistência",
        "Aprender a ouvir e aplicar feedback",
      ],
    },
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 14,
    title: "Quer começar com design?",
    icon: Target,
    content: {
      emoji: "🎯",
      subtitle: "Dicas úteis:",
      points: [
        "Crie um portfólio com seus projetos",
        "Recrie telas de apps famosos",
        "Participe de desafios como Daily UI",
      ],
    },
    color: "from-red-500 to-pink-500",
  },
  {
    id: 15,
    title: "Como é trabalhar numa empresa tech",
    icon: Users,
    content: {
      emoji: "🤝",
      subtitle: "Como funciona uma equipe:",
      points: [
        "Devs, designers, marketing, produto",
        "Reuniões diárias, sprints, feedbacks",
        "Pode ser remoto ou presencial",
      ],
    },
    color: "from-indigo-500 to-blue-500",
    section: "💼 Parte 3 – Carreira e mercado",
  },
  {
    id: 16,
    title: "Primeiros passos no mercado",
    icon: Rocket,
    content: {
      emoji: "🚀",
      subtitle: "Comece por aqui:",
      points: [
        "Estágios, freelas, projetos pessoais",
        "Mostre atitude e vontade de aprender",
        "Construa sua presença: LinkedIn, GitHub, Behance",
      ],
    },
    color: "from-green-500 to-cyan-500",
  },
  {
    id: 17,
    title: "O que buscamos em quem está começando",
    icon: Eye,
    content: {
      emoji: "🔍",
      subtitle: "Mais do que saber tudo, buscamos:",
      points: [
        "Interesse genuíno",
        "Proatividade e comunicação",
        "Capacidade de aprender e se adaptar",
      ],
    },
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 18,
    title: "Empreender",
    icon: Lightbulb,
    content: {
      emoji: "💡",
      subtitle: "Empreendedorismo na área tech:",
      points: [
        "Criar sua própria empresa ou produto digital",
        "Identificar problemas e criar soluções inovadoras",
        "Combinar conhecimento técnico com visão de negócio",
      ],
    },
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 19,
    title: "Pra fechar com chave de ouro",
    icon: Star,
    content: {
      emoji: "✨",
      subtitle: "Dicas finais:",
      points: [
        "Aprender tecnologia é acessível e transformador",
        "Cada caminho é único: encontre o seu",
        "Recursos gratuitos: Youtube, FreeCodeCamp, Comunidades Discord/Telegram",
      ],
    },
    color: "from-yellow-500 to-red-500",
    section: "🎤 Encerramento",
  },
  {
    id: 20,
    title: "Perguntas e bate-papo",
    icon: MessageCircle,
    content: {
      emoji: "🗣️",
      subtitle: "Agora é com vocês!",
      points: [
        "Quer saber por onde começar?",
        "Dúvidas sobre carreira ou ferramentas?",
        "Estamos aqui para te ajudar!",
      ],
    },
    color: "from-pink-500 to-purple-500",
  },
];
