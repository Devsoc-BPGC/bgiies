import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, reason } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BGIIES Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${reason}`,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Reason:</b> ${reason}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}
