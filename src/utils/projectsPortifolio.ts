import criatividadeEmMatematica from '../assets/criatividadeEmMatematica.webp'
import formNext from '../assets/formNext.webp'
import weather from '../assets/weatherapp.webp'
import portugueseQuiz from '../assets/portugueseQuiz.webp'
import uiLib from '../assets/uiLib.png'

export const projects = [
  {
    title: 'UI Lib',
    img: uiLib,
    description:
      'Biblioteca de componentes UI, usando os primitive components da lib Radix e estilizando-os de forma elegante e responsiva.',
    stack: ['Next', 'TypeScript', 'Tailwind', 'Radix', 'Lucide'],
    links: {
      githubCode: 'https://github.com/wellingtonVieiraSantos/UI-lib'
    }
  },
  {
    title: 'Criatividade em Matemática',
    img: criatividadeEmMatematica,
    description:
      'Site, no formato edital, feito para promover um curso de nível superior para professores de matemática. Criado de forma totalmente responsiva e performática.',
    stack: ['React', 'TypeScript', 'Tailwind', 'React Router Dom v6', 'Vite'],
    links: {
      githubCode:
        'https://github.com/wellingtonVieiraSantos/criatividade-em-matematica',
      website: 'https://www.criatividadeemmatematica.com/'
    }
  },
  {
    title: 'Form Next.js',
    img: formNext,
    description:
      'Formulário feito para praticar a validação de campos com zod e react-hook-form e também a persistência dos dados no back-end usando o mapeador objeto-relacional (ORM) Prisma com o SQLite.',
    stack: [
      'React',
      'Next',
      'TypeScript',
      'Tailwind',
      'React Hook Form',
      'Zod',
      'Prisma'
    ],
    links: {
      githubCode: 'https://github.com/wellingtonVieiraSantos/form-next',
      website: ''
    }
  },
  {
    title: 'Wheater App',
    img: weather,
    description:
      'App de clima feito para praticar integração com api externa, que nesse caso foi usado a open-meteo. Surgiu como um desafio react em que sai vencedor.',
    stack: ['React', 'Tailwind', 'Vite', 'Open Meteo Api'],
    links: {
      githubCode: 'https://github.com/wellingtonVieiraSantos/weather-app',
      website: 'https://weather-app-delta-amber.vercel.app/'
    }
  },
  {
    title: 'Quiz Conjuções',
    img: portugueseQuiz,
    description:
      'Quiz feito para auxiliar professores de um cursinho preparatório à memorizar as conjunções. Impactou e ajudou vários professores que compartilharam o app, o qual teve mais de uma centena de acessos.',
    stack: ['React', 'Tailwind', 'Vite', 'React Router Dom v6'],
    links: {
      githubCode: 'https://github.com/wellingtonVieiraSantos/quiz-react',
      website: 'https://quiz-react-ton.vercel.app/'
    }
  }
]
