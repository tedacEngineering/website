import { useState } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import useForm from '../hooks/useForm';
import { SERVICES } from '../data/site';

const F = ({ label, children }) => (
  <label className="block text-sm font-medium">{label}<span className="mt-1.5 block">{children}</span></label>
);
const Honeypot = () => <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />;

function Sent({ title, reset }) {
  return (
    <div className="border-t-4 border-gold bg-navy p-10 text-center text-white">
      <CheckCircle2 className="mx-auto text-gold" size={48} />
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-white/70">Our team will get back to you shortly.</p>
      <button onClick={reset} className="btn-line mt-6">Send another</button>
    </div>
  );
}
const Err = () => (
  <p className="flex items-center gap-2 text-sm font-medium text-red-600"><AlertTriangle size={16} /> We could not send your message. Please try again or call us.</p>
);

export function ContactForm() {
  const { status, submit, reset } = useForm('Website request: TEDAC');
  if (status === 'sent') return <Sent title="Request received" reset={reset} />;
  return (
    <form onSubmit={submit} className="space-y-5 border border-slate-200 bg-white p-7 shadow-xl shadow-navy/5 md:p-10">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="Full name"><input required name="name" className="field" autoComplete="name" /></F>
        <F label="Company"><input name="company" className="field" autoComplete="organization" /></F>
        <F label="Email"><input required type="email" name="email" className="field" autoComplete="email" /></F>
        <F label="Phone"><input type="tel" name="phone" className="field" autoComplete="tel" /></F>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="I am requesting"><select name="request_type" className="field"><option>A quotation</option><option>Technical support</option><option>Manpower supply</option><option>A partnership</option><option>General enquiry</option></select></F>
        <F label="Service of interest"><select name="service" className="field"><option value="">Not sure yet</option>{SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}</select></F>
      </div>
      <F label="Project details"><textarea required name="message" rows="5" className="field" placeholder="Scope, location, timeline" /></F>
      {status === 'error' && <Err />}
      <button disabled={status === 'sending'} className="btn-navy w-full disabled:opacity-60">{status === 'sending' ? 'Sending...' : 'Send request'}</button>
    </form>
  );
}

export function ApplyForm({ role }) {
  const { status, submit, reset } = useForm(`Job application: ${role || 'General'}`);
  const [file, setFile] = useState('');
  if (status === 'sent') return <Sent title="Application received" reset={reset} />;
  return (
    <form onSubmit={submit} className="space-y-5 border border-slate-200 bg-white p-7 shadow-xl shadow-navy/5 md:p-10">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="Full name"><input required name="name" className="field" autoComplete="name" /></F>
        <F label="Email"><input required type="email" name="email" className="field" autoComplete="email" /></F>
        <F label="Phone"><input type="tel" name="phone" className="field" autoComplete="tel" /></F>
        <F label="Role"><input name="role" defaultValue={role} className="field" placeholder="General application" /></F>
      </div>
      <F label="CV or resume (PDF)"><input name="cv" type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0]?.name || '')} className="field file:mr-4 file:border-0 file:bg-navy file:px-4 file:py-1.5 file:text-white" /></F>
      {file && <p className="text-xs text-slate-500">Selected: {file}</p>}
      <F label="Cover note"><textarea required name="message" rows="5" className="field" placeholder="Tell us about your experience and what you want to work on" /></F>
      {status === 'error' && <Err />}
      <button disabled={status === 'sending'} className="btn-navy w-full disabled:opacity-60">{status === 'sending' ? 'Sending...' : 'Submit application'}</button>
    </form>
  );
}
