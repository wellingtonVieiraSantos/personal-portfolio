import html from '@/assets/coloredIcons/html5.svg'
import css from '@/assets/coloredIcons/css3.svg'
import js from '@/assets/coloredIcons/js.svg'
import react from '@/assets/coloredIcons/react.svg'
import next from '@/assets/coloredIcons/nextjs.svg'
import ts from '@/assets/coloredIcons/typescript.svg'
import tailwind from '@/assets/coloredIcons/tailwindcss.svg'
import styled from '@/assets/coloredIcons/styled.svg'
import motion from '@/assets/coloredIcons/motion.svg'
import node from '@/assets/coloredIcons/node.svg'
import express from '@/assets/coloredIcons/express.svg'
import mysql from '@/assets/coloredIcons/mysql.svg'
import mongodb from '@/assets/coloredIcons/mongodb.svg'
import git from '@/assets/coloredIcons/git.svg'
import github from '@/assets/coloredIcons/github.svg'

export const skills = [
  {
    id: 1,
    title: 'HTML',
    img: html,
    content:
      'HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar páginas da web. Ele define a organização do conteúdo por meio de elementos como títulos, parágrafos, imagens, links e listas.'
  },
  {
    id: 2,
    title: 'CSS',
    img: css,
    content:
      'CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas da web, definindo cores, fontes, espaçamentos, layouts e animações. Ele permite separar o conteúdo (HTML) da apresentação visual, garantindo flexibilidade e melhor manutenção do design. Com CSS, é possível criar interfaces responsivas e atraentes para diferentes dispositivos.'
  },
  {
    id: 3,
    title: 'JavaScript',
    img: js,
    content:
      'JavaScript é uma linguagem de programação voltada para a criação de interatividade em páginas da web. Ele permite manipular o HTML e o CSS dinamicamente, responder a eventos do usuário, validar formulários, criar animações e desenvolver aplicações web completas. '
  },
  {
    id: 4,
    title: 'React',
    img: react,
    content:
      'React é uma biblioteca JavaScript para a criação de interfaces de usuário interativas e eficientes. Ele utiliza um modelo baseado em componentes reutilizáveis e um estado gerenciado de forma reativa, permitindo a construção de aplicações web dinâmicas e performáticas. Com o uso do Virtual DOM, o React otimiza a atualização da interface, tornando as interações mais rápidas. '
  },
  {
    id: 5,
    title: 'Next.js',
    img: next,
    content:
      'Next.js é um framework baseado em React que facilita o desenvolvimento de aplicações web fullstack. Ele oferece recursos avançados, como renderização híbrida (SSR e SSG), otimização de performance, roteamento simplificado e suporte nativo a API Routes. '
  },
  {
    id: 6,
    title: 'TypeScript',
    img: ts,
    content:
      'TypeScript (TS) é uma linguagem de programação que é uma superset do JavaScript, adicionando tipagem estática e recursos de orientação a objetos. Ele permite detectar erros de tipo durante o desenvolvimento, antes da execução do código, aumentando a confiabilidade e a manutenção de grandes projetos.'
  },
  {
    id: 7,
    title: 'Tailwind',
    img: tailwind,
    content:
      'Tailwind CSS é um framework de CSS utilitário que permite criar designs personalizados diretamente no HTML, utilizando classes pré-definidas para estilizar elementos. Em vez de escrever estilos CSS personalizados, o Tailwind oferece uma abordagem mais prática e flexível, onde você pode combinar suas classes para controlar rapidamente a aparência de um site. '
  },
  {
    id: 8,
    title: 'Styled',
    img: styled,
    content:
      'Styled Components é uma biblioteca para React e outras bibliotecas JavaScript que permite criar componentes de estilo com CSS dentro do JavaScript. Ele utiliza o conceito de CSS-in-JS, onde você escreve estilos diretamente no código de componentes usando template literals.'
  },
  {
    id: 9,
    title: 'Motion',
    img: motion,
    content:
      'Framer Motion é uma biblioteca de animações para React que permite criar animações complexas de forma simples e declarativa. Ela oferece um conjunto de APIs poderosas para animar elementos, como transições, gestos e interações, com controle total sobre os parâmetros de tempo, easing e comportamento das animações.'
  },
  {
    id: 10,
    title: 'Node',
    img: node,
    content:
      'Node.js é um ambiente de execução JavaScript do lado do servidor, baseado no motor V8 do Google Chrome. Ele permite que você execute JavaScript fora do navegador, o que o torna ideal para criar servidores web e aplicações backend escaláveis e de alto desempenho.'
  },
  {
    id: 11,
    title: 'Express',
    img: express,
    content:
      'Express.js é um framework minimalista e flexível para Node.js, usado para criar aplicações web e APIs. Ele facilita o roteamento de requisições HTTP, o gerenciamento de middlewares e a integração com bancos de dados, simplificando o processo de desenvolvimento backend.'
  },
  {
    id: 12,
    title: 'MySQL',
    img: mysql,
    content:
      'MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado, baseado no modelo de dados estruturado em tabelas. Ele usa SQL (Structured Query Language) para criar, manipular e consultar os dados. '
  },
  {
    id: 13,
    title: 'MongoDB',
    img: mongodb,
    content:
      'MongoDB é um banco de dados NoSQL orientado a documentos, que armazena dados em formato BSON (uma extensão binária do JSON). Ele é altamente escalável e flexível, permitindo o armazenamento de dados não estruturados ou semi-estruturados.'
  },
  {
    id: 14,
    title: 'Git',
    img: git,
    content:
      'Git é um sistema de controle de versão distribuído, utilizado para gerenciar e acompanhar as mudanças no código-fonte ao longo do tempo. Ele permite que múltiplos desenvolvedores trabalhem de forma colaborativa em um projeto, facilitando o controle das alterações feitas por diferentes pessoas.'
  },
  {
    id: 15,
    title: 'Github',
    img: github,
    content:
      'GitHub é uma plataforma de hospedagem de código-fonte baseada no Git, que facilita o versionamento e colaboração em projetos de software. Ele oferece funcionalidades como repositórios privados e públicos, controle de versão, pull requests, issues e integração com outras ferramentas de desenvolvimento. '
  }
]
