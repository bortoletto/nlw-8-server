import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail.adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "14162b7f50f596",
    pass: "1d71d5b91a64cf"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Albert Rocha Bortoletto <albert.bortoletto@hotmail.com>',
      subject,
      html: body
    });
  };
}