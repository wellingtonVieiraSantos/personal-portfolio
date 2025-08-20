import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { checkRateLimit } from './lib/rateLimit'

export async function POST(req: NextRequest) {
  //bloqueio de multiplos envios
  const ip = req.headers.get('x-forwarded-for') || 'unknown'

  if (!checkRateLimit(ip))
    return NextResponse.json(
      {
        success: false,
        error: 'Muitas tentativas de envio. Tente novamente mais tarde.'
      },
      { status: 429 }
    )

  const { name, email, topic, bodyMessage } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Contato Portifolio - ${topic}`,
      text: bodyMessage,
      replyTo: email
    })

    return NextResponse.json(
      { success: 'E-mail enviado com sucesso.' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erro ao enviar e-mail' },
      { status: 500 }
    )
  }
}
