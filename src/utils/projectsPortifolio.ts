import criatividadeEmMatematica from '../assets/criatividadeEmMatematica.png'
import formNext from '../assets/formNext.png'
import weather from '../assets/weatherapp.png'
import portugueseQuiz from '../assets/portugueseQuiz.png'

export const projects = [
  {
    title: 'Criatividade em Matemática',
    img: criatividadeEmMatematica,
    description: '',
    stack: ['React', 'TypeScript', 'Tailwind', 'React Router Dom v6', 'Vite'],
    links: { githubCode: '#', website: '#' }
  },
  {
    title: 'Form Next.js',
    img: formNext,
    description: '',
    stack: [
      'React',
      'Next',
      'TypeScript',
      'Tailwind',
      'React Hook Form',
      'Zod',
      'Prisma'
    ],
    links: { githubCode: '#', website: '#' }
  },
  {
    title: 'Wheater App',
    img: weather,
    description: '',
    stack: ['React', 'Tailwind', 'Vite', 'Open Meteo Api'],
    links: { githubCode: '#', website: '#' }
  },
  {
    title: 'Quiz Conjuções',
    img: portugueseQuiz,
    description: '',
    stack: ['React', 'Tailwind', 'Vite', 'React Router Dom v6'],
    links: { githubCode: '#', website: '#' }
  }
]
