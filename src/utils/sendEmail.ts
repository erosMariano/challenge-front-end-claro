interface SendEmailProps {
  name: string;
  email: string;
  cake: string;
}
export async function sendEmail({ name, email, cake }: SendEmailProps) {
  const serviceId = import.meta.env.SERVICE_ID;
  const templateId = import.meta.env.TEMPLATE_ID;
  const publicKey = import.meta.env.PUBLIC_KEY;

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: name,
      from_email: email,
      from_cake: cake,
      from_url_cake: `https://challenge-front-end-claro.vercel.app/images/${createSlug(name)}.jpg`
    }
  };

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return res.ok;
  } catch (error) {
    console.error(error);
  }
}

function createSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-{2,}/g, '-')
    .trim();
}
