import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, reason, project, agreed } = await req.json();

        console.log('Request received:', { name, email, project });
        console.log('Env Check:', {
            USER: !!process.env.EMAIL_USER,
            PASS: !!process.env.EMAIL_PASS
        });

        if (!name || !email || !reason || !project || !agreed) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Code Access Request: ${project}`,
            text: `
                Project: ${project}
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                Reason: ${reason}
                Agreed to Terms: Yes
            `,
            html: `
                <h3>Code Access Request</h3>
                <p><strong>Project:</strong> ${project}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Reason:</strong></p>
                <p>${reason}</p>
                <p><strong>Agreed to Copyright Terms:</strong> Yes</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Request sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send request' },
            { status: 500 }
        );
    }
}
