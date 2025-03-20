/* import nodemailer from 'nodemailer'; */

export async function GET(request: Request, response: Response) {
  return Response.json({
    name: 'teste',
    email: 'teste@teste.com',
    topic: 'contatoComercial',
    text: 'testando 1 testando 2 testando 3'
  })
}

/* app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou qualquer serviço de email que você usar
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `Mensagem de ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email enviado com sucesso');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
 */
