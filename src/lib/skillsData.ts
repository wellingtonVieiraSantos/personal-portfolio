import html from '@/assets/coloredIcons/html5.svg'
import css from '@/assets/coloredIcons/css3.svg'
import js from '@/assets/coloredIcons/js.svg'
import react from '@/assets/coloredIcons/react.svg'
import next from '@/assets/coloredIcons/nextjs.svg'
import ts from '@/assets/coloredIcons/typescript.svg'
import tailwind from '@/assets/coloredIcons/tailwindcss.svg'
import node from '@/assets/coloredIcons/node.svg'
import git from '@/assets/coloredIcons/git.svg'

export const skills = [
  {
    id: 1,
    title: 'HTML',
    img: html,
    content:
      'HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar páginas da web.',
    topics: ['Tags Semânticas', 'Formulários', 'Acessibilidade', 'SEO']
  },
  {
    id: 2,
    title: 'CSS',
    img: css,
    content:
      'CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas da web, definindo cores, fontes, espaçamentos, layouts e animações.',
    topics: [
      'Layouts (flex, grid, position)',
      'Box model',
      'Responsividade',
      'Animações'
    ]
  },
  {
    id: 3,
    title: 'JavaScript',
    img: js,
    content:
      'JavaScript é uma linguagem de programação voltada para a criação de interatividade em páginas da web.',
    topics: ['POO e Funcional', 'Es6', 'Programação assíncrona', 'DOM']
  },
  {
    id: 4,
    title: 'React',
    img: react,
    content:
      'React é uma biblioteca JavaScript para a criação de interfaces de usuário interativas e eficientes.',
    topics: ['JSX', 'Components e Hooks', 'React Router', 'Context Api']
  },
  {
    id: 5,
    title: 'Next.js',
    img: next,
    content:
      'Next.js é um framework baseado em React que facilita o desenvolvimento de aplicações web fullstack.',
    topics: [
      'Navegação e rotas',
      'Renderização (SSR, SSG, ISR)',
      'Autenticação',
      'API routes'
    ]
  },
  {
    id: 6,
    title: 'TypeScript',
    img: ts,
    content:
      'TypeScript (TS) é uma linguagem de programação que é uma superset do JavaScript, adicionando tipagem estática e recursos de orientação a objetos.',
    topics: [
      'Tipagem de básicos, literais e union',
      'Type e interfaces',
      'Generics',
      'Advanced Types'
    ]
  },
  {
    id: 7,
    title: 'Tailwind',
    img: tailwind,
    content:
      'Tailwind CSS é um framework de CSS utilitário que permite criar designs personalizados diretamente no HTML, utilizando classes pré-definidas para estilizar elementos.',
    topics: [
      'classes utilitárias',
      'Responsividade - Mobile-first',
      'Composição',
      'Variantes e estados'
    ]
  },
  {
    id: 8,
    title: 'Node',
    img: node,
    content:
      'Node.js é um ambiente de execução JavaScript do lado do servidor, baseado no motor V8 do Google Chrome.',
    topics: [
      'Genciamento de pacotes (npm)',
      'Express',
      'Banco de dados (sql, nosql)',
      'Rest API'
    ]
  },
  {
    id: 9,
    title: 'Git',
    img: git,
    content:
      'Git é um sistema de controle de versão distribuído, utilizado para gerenciar e acompanhar as mudanças no código-fonte ao longo do tempo.',
    topics: [
      'Controle de versão',
      'Branches',
      'Fork, clone, pull e colaboração',
      'Github'
    ]
  }
]
