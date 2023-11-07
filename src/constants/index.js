import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  mine,
  uber,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Estagiario Fullstack",
    company_name: "Renault",
    icon: starbucks,
    iconBg: "#383E56",
    date: "jan 2023 - Atual",
    points: [
      " Concebi e desenvolvi, tanto o frontend quanto o backend, uma rede social completa para aprimorar a comunicação entre os colaboradores, promovendo interatividade e conexão entre a equipe",

      "Engenhei softwares sob medida que aprimoraram o controle, visualização e gerenciamento em tempo real de diversos parâmetros de produção usando a eficiência do Python.",

      "projetado e implementei um software de rastreamento de ocorrências para monitorar quebras e falhas de produção, melhorando a eficiência e minimizando paralisações.",

      "Colaborei ativamente no desenvolvimento de diversas aplicações web que forneceram uma representação visual detalhada de diversos parâmetros de produção, utilizando tecnologias como React e MongoDB, contribuindo para a melhoria geral dos processos de produção",
    ],
  },
  {
    title: "Estagiario Frontend",
    company_name: "Sig Group",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "març 2022 - jan 2023 ",
    points: [
      "Co-liderando um projeto de desenvolvimento de software em colaboração com uma equipe global, fui responsável pelo controle e gerenciamento eficiente de dados na planta localizada no México.",
      "Realizei com sucesso várias automações em Python, otimizando significativamente nossas operações ao economizar tempo e simplificar atividades repetitivas.",
      "Concebi e desenvolvi um aplicativo React Native que aprimorou a comunicação e a eficiência do setor de segurança, possibilitando o armazenamento de dados e a criação de relatórios mensais de forma clara e eficaz.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ConectaOngs(Minha Propria rede social)",
    description:
      "Essa aplicaçao Web esta sendo desenvolvida como um projeto da faculdade e com Intuito de ajudar Ongs. a ideia é uma rede social onde ongs de diversos tipos postam Projetos e os usuarios fazem doação dentro da propria plataforma.",
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Fpereiraaraujo/ConectaOngs",
  },
  {
    name: "RenaultBook",
    description:
      "Concebi e desenvolvi, tanto o frontend quanto o backend, uma rede social completa para aprimorar a comunicação    entre os colaboradores, promovendo interatividade e conexão entre a equipe.",
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://renault-book.vercel.app/",
  },
  {
    name: "Metaversos",
    description:
      "transformei um design Figma em um site totalmente funcional usando Next13, Framer Motion e Tailwind CSS, com tematica metaversos!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "frame-motion",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://metaverse-sage-psi.vercel.app/",
  },
  {
    name: "Minecraft - Python",
    description:
      "criando o minecraft com python usando a biblioteca pygame",
    tags: [
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image:mine,
    source_code_link: "https://github.com/Fpereiraaraujo/MINECRAFT-----PYTHON",
  },
  {
    name: "Uber - Clone",
    description:
      "Um Clone do aplicativo uber completo tanto o lado do usuario quanto o lado do motorista",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Aws",
        color: "green-text-gradient",
      },
     
    ],
    image: uber,
    source_code_link: "https://github.com/Fpereiraaraujo/Uber-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
