import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight, ArrowLeft, Download, Mail, Linkedin, Github, MapPin, GraduationCap, Phone, FileText, Briefcase, ExternalLink } from 'lucide-react'
import { cases, skills, experiences, cvProjects, educationList, CV_FILE, EMAIL, PHONE, LOCATION, LINKEDIN, GITHUB, Case } from './data'

const links = ['Home','About','Experience','Projects','Skills','Education','Resume','Contact']
const id = (s: string) => s.toLowerCase()

function useHash() {
  const [h, setH] = useState(window.location.hash)
  useEffect(() => { const f = () => setH(window.location.hash); window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f) }, [])
  return h
}

const Tag = ({ children }: { children: React.ReactNode }) => <span className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">{children}</span>
const Btn = ({ href, children, primary, download, target }: { href: string; children: React.ReactNode; primary?: boolean; download?: string; target?: string }) => (
  <a href={href} download={download} target={target} rel={target === '_blank' ? 'noreferrer' : undefined} className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 ${primary ? 'border-navy bg-navy text-white hover:bg-navy-700' : 'border-navy text-navy hover:border-teal hover:text-teal'}`}>{children}</a>
)
const Section = ({ name, title, alt, children }: { name: string; title: string; alt?: boolean; children: React.ReactNode }) => (
  <section id={id(name)} className={alt ? 'bg-slate-50' : ''}><div className="mx-auto max-w-5xl px-5 py-20">
    <p className="text-xs font-semibold uppercase tracking-widest text-teal">{name}</p><h2 className="mb-8 mt-1 text-3xl font-bold tracking-tight">{title}</h2>{children}</div></section>
)

function Nav({ home }: { home: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href={home} className="font-bold">Kinara Hemachandra</a>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <ul className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-3 border-b border-slate-200 bg-white px-5 py-4 md:static md:flex md:flex-row md:gap-5 md:border-0 md:p-0`}>
          {links.map(l => <li key={l}><a onClick={() => setOpen(false)} href={`${home}#${id(l)}`} className="text-sm text-slate-600 hover:text-teal">{l}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}

const Flow = ({ steps }: { steps: string[] }) => (
  <ol className="my-3 flex flex-wrap items-center gap-2">
    {steps.map((s, i) => <li key={s} className="flex items-center gap-2"><span className="rounded-md border border-teal/40 bg-white px-3 py-1.5 text-sm">{s}</span>{i < steps.length - 1 && <ArrowRight size={14} className="text-teal" aria-hidden />}</li>)}
  </ol>
)

function CaseStudy({ c }: { c: Case }) {
  useEffect(() => { window.scrollTo(0, 0); document.title = `${c.title} | Kinara Hemachandra` }, [c])
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <a href="#projects" className="mb-6 inline-flex items-center gap-1 text-sm text-teal"><ArrowLeft size={14} /> Back to projects</a>
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">{c.category}</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight">{c.title}</h1>
      <p className="mt-3 inline-block rounded border border-teal px-2 py-0.5 text-xs font-semibold text-teal">{c.type}</p>
      <p className="mt-4 text-slate-600">{c.summary}</p>
      {c.blocks.map(b => (
        <section key={b.h} className="mt-8">
          <h2 className="mb-2 text-lg font-semibold">{b.h}</h2>
          {b.note && <p className="rounded-lg border-l-4 border-teal bg-slate-50 p-3 text-sm text-slate-700">{b.note}</p>}
          {b.p && <p className="text-slate-700">{b.p}</p>}
          {b.flow && <Flow steps={b.flow} />}
          {b.list && <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">{b.list.map(x => <li key={x}>{x}</li>)}</ul>}
        </section>
      ))}
    </main>
  )
}

function Hero() {
  return (
    <section id="home"><div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-teal">Kinara Hemachandra</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl">Turning Business Problems into Practical Solutions.</h1>
        <p className="mt-4 font-medium text-slate-700">Junior Business Analyst &bull; Software Engineering Undergraduate &bull; Business Process &amp; Systems Analysis</p>
        <p className="mt-3 text-slate-600">Skilled in analyzing business processes, engaging stakeholders, and translating business needs into clear functional requirements for development teams.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Btn href={CV_FILE} download="Kinara_Hemachandra_CV.pdf" primary><Download size={16} />Download My CV</Btn>
          <Btn href="#projects">Explore Projects</Btn>
          <Btn href="#experience">View Experience</Btn>
          <Btn href="#contact">Contact Me</Btn>
        </div>
      </div>
      <svg viewBox="0 0 360 260" role="img" aria-label="Abstract business workflow diagram" className="w-full">
        <g fill="white" stroke="#0b1f3a" strokeWidth="1.5">{[[10,20],[130,20],[250,20],[70,110],[190,110]].map(([x, y]) => <rect key={x + y} x={x} y={y} width="100" height="48" rx="8" />)}<rect x="130" y="196" width="100" height="40" rx="8" stroke="#0f9d9a" /></g>
        <g stroke="#0f9d9a" strokeWidth="1.5" fill="none"><path d="M110 44h20M230 44h20M300 68v20H240v22M120 68v20h-0v22M170 134h20M120 158v20h60v18M240 158v20h-10v18" /></g>
        <g fontSize="12" textAnchor="middle" fill="#0b1f3a">{[['Need',60,48],['Analyze',180,48],['Document',300,48],['Validate',120,138],['Improve',240,138],['Deliver',180,220]].map(([t, x, y]) => <text key={String(t)} x={x} y={y}>{t}</text>)}</g>
      </svg>
    </div></section>
  )
}

function Home() {
  return (<>
    <Hero />
    <Section name="About" title="About Me" alt>
      <div className="max-w-3xl space-y-4 text-slate-700">
        <p>I am a motivated Software Engineering undergraduate at the Sri Lanka Institute of Information Technology (SLIIT) with practical experience in business analysis, requirements gathering, and software documentation.</p>
        <p>Skilled in analyzing business processes, engaging stakeholders, and translating business needs into clear functional requirements for development teams. Experienced with CRM solutions, system integrations (HubSpot, Dinero), and the software development lifecycle, backed by strong communication, analytical, and problem-solving skills.</p>
        <p>Seeking to contribute as a Junior Business Analyst bridging business objectives and technology solutions.</p>
      </div>
    </Section>
    <Section name="Experience" title="Work Experience">
      <div className="space-y-6">
        {experiences.map(exp => (
          <article key={exp.role + exp.company} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold text-slate-900">{exp.role} <span className="text-teal">| {exp.company}</span></h3>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{exp.period}</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{exp.location}</p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            {exp.caseStudyId && (
              <a href={`#/case/${exp.caseStudyId}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline">
                View CRM case study <ArrowRight size={14} />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
    <Section name="Projects" title="Projects & Case Studies" alt>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">In-Depth Business Analysis Case Studies</h3>
        <p className="text-sm text-slate-600">Detailed requirements engineering, workflow modeling, and process improvement walkthroughs.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {cases.map(c => (
          <article key={c.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal">{c.category}</p>
            <h3 className="mt-1 font-semibold">{c.title}</h3>
            <p className="mt-2 w-fit rounded border border-teal px-2 py-0.5 text-xs text-teal">{c.type}</p>
            <p className="mt-3 flex-1 text-sm text-slate-600">{c.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">{c.skills.map(s => <Tag key={s}>{s}</Tag>)}</div>
            <a href={`#/case/${c.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal">View Case Study <ArrowRight size={14} /></a>
          </article>))}
      </div>

      <div className="mt-12 mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Software &amp; Technical Projects</h3>
        <p className="text-sm text-slate-600">Hands-on applications demonstrating full-stack engineering and product capabilities.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cvProjects.map(p => (
          <article key={p.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <h4 className="font-semibold text-slate-900">{p.title}</h4>
              <Briefcase size={16} className="text-teal shrink-0 mt-0.5" />
            </div>
            <p className="mt-1 text-xs font-medium text-teal">{p.tech}</p>
            <p className="mt-3 text-sm text-slate-600">{p.description}</p>
          </article>
        ))}
      </div>
    </Section>
    <Section name="Skills" title="Skills & Competencies">
      <div className="grid gap-5 md:grid-cols-3">
        {Object.entries(skills).map(([k, v]) => <div key={k} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="mb-3 font-semibold text-navy">{k}</h3><div className="flex flex-wrap gap-2">{v.map(s => <Tag key={s}>{s}</Tag>)}</div></div>)}
      </div>
    </Section>
    <Section name="Education" title="Education" alt>
      <div className="grid gap-4 md:grid-cols-2">
        {educationList.map(edu => (
          <div key={edu.degree} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <GraduationCap className="mt-1 text-teal shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-slate-900">{edu.degree}</h3>
              <p className="text-slate-600">{edu.institution}</p>
              <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
    <Section name="Resume" title="Curriculum Vitae (CV)">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-navy p-3 text-white">
              <FileText size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Kinara Hemachandra — CV</h3>
              <p className="text-sm font-medium text-teal">Junior Business Analyst &bull; Software Engineering Undergraduate</p>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Official 1-page CV including Business Analyst internship experience at Cloud Syntex, RAR Properties experience, full requirements engineering competencies, and technical project portfolio.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Btn href={CV_FILE} download="Kinara_Hemachandra_CV.pdf" primary>
              <Download size={16} />Download CV (PDF)
            </Btn>
            <Btn href={CV_FILE} target="_blank">
              <ExternalLink size={16} />View in Browser
            </Btn>
          </div>
        </div>
      </div>
    </Section>
    <Section name="Contact" title="Contact" alt>
      <ul className="space-y-3.5 text-slate-700">
        <li className="flex items-center gap-2.5"><MapPin size={18} className="text-teal shrink-0" />{LOCATION}</li>
        <li className="flex items-center gap-2.5"><Phone size={18} className="text-teal shrink-0" /><a className="hover:text-teal font-medium" href={`tel:${PHONE.replace(/\s+/g, '')}`}>{PHONE}</a></li>
        <li className="flex items-center gap-2.5"><Mail size={18} className="text-teal shrink-0" /><a className="hover:text-teal font-medium" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li className="flex items-center gap-2.5"><Linkedin size={18} className="text-teal shrink-0" /><a className="hover:text-teal font-medium" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn — kinara-hemachandra</a></li>
        <li className="flex items-center gap-2.5"><Github size={18} className="text-teal shrink-0" /><a className="hover:text-teal font-medium" href={GITHUB} target="_blank" rel="noreferrer">GitHub — kinara2003</a></li>
      </ul>
    </Section>
  </>)
}

export default function App() {
  const hash = useHash()
  const m = hash.match(/^#\/case\/(\w+)/)
  const c = m ? cases.find(x => x.id === m[1]) : undefined
  useEffect(() => { if (!c) document.title = 'Kinara Hemachandra | Business Analyst Portfolio' }, [c])
  return (<>
    <Nav home={window.location.pathname.endsWith('/') ? './' : window.location.pathname} />
    {c ? <CaseStudy c={c} /> : <Home />}
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Kinara Hemachandra</footer>
  </>)
}
