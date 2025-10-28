import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateQuoteEmailHTML, generateQuoteEmailText } from '@/lib/email-template'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'MEFRUP Website <quotes@mefrup.com>',
      to: ['ventas@mefrup.com'],
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: generateQuoteEmailHTML({ name, email, company, message }),
      text: generateQuoteEmailText({ name, email, company, message }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
