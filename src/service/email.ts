import nodemailer from "nodemailer";

export type EmailData = {
  name: string;
  contact: string;
  harleyModel: string;
  preferredDate: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({
  name,
  contact,
  harleyModel,
  preferredDate,
}: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[체크할리] ${name}님의 예약 신청입니다.`,
    from: process.env.AUTH_USER,
    html: `
        <h1>예약 신청이 왔습니다.</h1>
        <p>이름: ${name}</p>
        <p>연락처: ${contact}</p>
        <p>할리 모델: ${harleyModel}</p>
        <p>선호 날짜: ${preferredDate}</p>
        `,
  };

  return transporter.sendMail(mailData);
}
