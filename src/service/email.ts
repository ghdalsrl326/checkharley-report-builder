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
    user: process.env.NEXT_PUBLIC_ADMIN_USER,
    pass: process.env.NEXT_PUBLIC_ADMIN_PASS,
  },
});

export async function sendEmail({
  name,
  contact,
  harleyModel,
  preferredDate,
}: EmailData) {
  const mailData = {
    to: process.env.NEXT_PUBLIC_ADMIN_USER,
    subject: `[체크할리] ${name}님의 예약 신청입니다.`,
    from: process.env.NEXT_PUBLIC_ADMIN_USER,
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
