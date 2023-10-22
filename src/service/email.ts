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
    user: process.env.ADMIN_USER,
    pass: process.env.ADMIN_PASS,
  },
});

export async function sendEmail({
  name,
  contact,
  harleyModel,
  preferredDate,
}: EmailData) {
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    to: process.env.ADMIN_USER,
    subject: `[체크할리] ${name}님의 예약 신청입니다.`,
    from: process.env.ADMIN_USER,
    html: `
        <h1>예약 신청이 왔습니다.</h1>
        <p>이름: ${name}</p>
        <p>연락처: ${contact}</p>
        <p>할리 모델: ${harleyModel}</p>
        <p>선호 날짜: ${preferredDate}</p>
        `,
  };

  const info = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return { status: "OK", info };
}
