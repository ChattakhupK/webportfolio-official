import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const { email, subject, description } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `${email} <onboarding@resend.dev>`,
      to: ["delivered@resend.dev"],
      subject: `[Portfolio] สำคัญ | ${subject} | ${email}`,
      html: `
      <h1>อีเมล : ${email}</h1>
      <h3>หัวข้อ : ${subject}</h3>
      <p>รายละเอียด : ${description}</p>
      `,
    });
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
