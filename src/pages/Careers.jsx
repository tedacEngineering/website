import { useRef, useState } from 'react';
import { GraduationCap, ShieldCheck, Users } from 'lucide-react';
import Seo from '../components/Seo';
import RichText from '../components/RichText';
import { Head, PageHero } from '../components/Ui';
import { ApplyForm } from '../components/Forms';
import { useJobs } from '../hooks/useContent';
import { p } from '../data/images';

const PERKS = [
  [GraduationCap, 'Grow technically', 'Hands-on exposure across engineering, fabrication, construction and integrity work.'],
  [ShieldCheck, 'Work safely', 'Inductions, toolbox meetings and a culture where everyone can raise a hazard.'],
  [Users, 'Build local capacity', 'Skills development and knowledge transfer under our Nigerian content commitment.'],
];

export default function Careers() {
  const [role, setRole] = useState('');
  const form = useRef(null);
  const { items: jobs, loading } = useJobs();
  const apply = (t) => { setRole(t); form.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return (
    <>
      <Seo title="Careers" path="/careers" description="Build your engineering career with TEDAC. View open roles and apply online." />
      <PageHero crumb={[['Careers']]} title="Build your career with TEDAC" text="Join qualified engineers, technicians and site professionals delivering dependable projects for the energy and industrial sectors." image={p('careers-1')} />

      <section className="py-24">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2">
          <div className="brk"><img src={p('careers-1')} alt="TEDAC team on site" className="cut aspect-[4/3] w-full object-cover" /></div>
          <div>
            <Head label="Life at TEDAC" title="Work where ownership of the outcome is expected" />
            <div className="-mt-4 space-y-7">
              {PERKS.map(([I, t, d]) => <div key={t} className="flex gap-5"><span className="grid h-12 w-12 shrink-0 place-items-center bg-navy text-gold"><I size={22} /></span><div><h3 className="text-lg font-bold">{t}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{d}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sheet py-24">
        <div className="wrap">
          <Head label="Open positions" title="Current opportunities" text="Apply to a role below, or send a general application using the form." />
          {loading ? <p className="text-slate-500">Loading positions...</p> : jobs.length === 0 ? (
            <p className="border border-slate-200 bg-white p-8 text-lg text-slate-600">There are no open positions right now. Send a general application below and we will keep your details on file.</p>
          ) : (
            <div className="divide-y divide-slate-200 border border-slate-200 bg-white">
              {jobs.map((r) => (
                <div key={r.title} className="p-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{r.title}</h3>
                      <p className="mt-1 font-mono text-xs text-gold-deep">{r.dept} · {r.where} · {r.type}{r.deadline && ` · Apply by ${r.deadline}`}</p>
                      <p className="mt-2 text-sm text-slate-600">{r.about}</p>
                    </div>
                    <button onClick={() => apply(r.title)} className="btn-navy shrink-0">Apply for this role</button>
                  </div>
                  {r.description?.length > 0 && (
                    <details className="mt-4 text-sm text-slate-700">
                      <summary className="cursor-pointer font-semibold text-navy">View full details</summary>
                      <div className="mt-4 space-y-3 leading-relaxed"><RichText value={r.description} /></div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24" ref={form}>
        <div className="wrap max-w-3xl">
          <Head center label="Apply" title="Send us your application" text="Do not see your role? Send a general application and we will keep your details on file." />
          <ApplyForm key={role} role={role} />
        </div>
      </section>
    </>
  );
}
