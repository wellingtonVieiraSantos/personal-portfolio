import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import { Layers, MonitorSmartphone, Palette } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

export default function Experience(
  setActiveSection: Dispatch<SetStateAction<string>>
) {
  return (
    <section
      id='experiencia'
      className='grid place-items-center gap-3 p-3 py-10 '
    >
      <div className='w-full max-w-7xl text-center md:text-left'>
        <h2 className='text-3xl'>Experiência</h2>
        <p className='text-sm py-2 text-foreground-secondary'>
          Sou especializado em desenvolver aplicações web fluídas, responsivas e
          intuitivas.
        </p>
      </div>
      <div className='w-full max-w-7xl flex flex-col md:flex-row gap-2 justify-between'>
        <Card className='flex-1 p-2'>
          <CardHeader>
            <CardTitle className='flex items-center gap-4 text-lg'>
              <MonitorSmartphone />
              <span>O que eu posso fazer</span>
            </CardTitle>
            <CardDescription>
              Eu posso te ajudar a criar soluções para fazer seu negócio crescer
              e gerar mais lucros.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc list-inside text-left marker:text-button space-y-3 text-sm'>
              <li>Desenvolvimento Fullstack Web</li>
              <li>Automação com IA</li>
              <li>Integração de Api</li>
              <li>UI/UX Design</li>
              <li>Design de banco de dados</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='flex-1 p-2'>
          <CardHeader>
            <CardTitle className='flex items-center gap-4 text-lg'>
              <Layers />
              <span>Ferramentas que uso</span>
            </CardTitle>
            <CardDescription>
              Uso métodos e ferramentas mais atuais e otimizadas para construir
              produtos escaláveis e funcionais.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc list-inside text-left marker:text-button text-sm'>
              <li>Frontend</li>
              <span className='block indent-5 text-foreground-secondary pt-1 pb-3'>
                Next.js, TypeScript, Tailwind CSS
              </span>
              <li>Backend</li>
              <span className='block indent-5 text-foreground-secondary pt-1 pb-3'>
                Node.js, Express, ORM (Prisma), PostgreSQL
              </span>
            </ul>
          </CardContent>
        </Card>
        <Card className='flex-1 p-2'>
          <CardHeader>
            <CardTitle className='flex items-center gap-4 text-lg'>
              <Palette />
              <span>UI/UX Design</span>
            </CardTitle>
            <CardDescription>
              Sou desenvolvedor, mas também consigo ajudar a cria um design
              limpo e interfaces modernas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc list-inside text-left marker:text-button space-y-3 text-sm'>
              <li>Design voltado ao usuário</li>
              <li>Layouts Responsivos</li>
              <li>Interfaces modernas e limpas</li>
              <li>Cuidado com cores e fontes</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
