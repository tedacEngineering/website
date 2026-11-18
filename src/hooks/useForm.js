import { useState } from 'react';
import { SITE } from '../data/site';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

// Posts the form to VITE_FORM_ENDPOINT (Formspree etc.). Without an endpoint it opens the visitor's email app.
export default function useForm(subject) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_gotcha')) return; // honeypot: bots fill this hidden field
    data.append('_subject', subject);
    setStatus('sending');
    try {
      if (!ENDPOINT) {
        const body = [...data.entries()].filter(([k, v]) => typeof v === 'string' && !k.startsWith('_')).map(([k, v]) => `${k}: ${v}`).join('\n');
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus('sent');
        return;
      }
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };
  return { status, submit, reset: () => setStatus('idle') };
}
