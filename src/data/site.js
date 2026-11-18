// DEMO CONTENT NOTICE: company facts (name, address, phone, services, policies, partners) come from the TEDAC brochure.
// PROJECTS, NEWS, TEAM, ROLES, STATS and SITE.email are sample content: replace with real details before launch.
import { p } from './images';

export const SITE = {
  name: 'TEDAC Engineering Limited',
  short: 'TEDAC',
  url: 'https://tedacengineering.com',
  tagline: 'Engineering Solutions. Delivering Excellence.',
  phone: '+234(0) 813 774 1112',
  tel: '+2348137741112',
  email: 'info@tedacengineering.com', // confirm with client
  address: ['8 Panama Estate, Trans Amadi', 'Port Harcourt 500101', 'Rivers State, Nigeria'],
  social: { linkedin: 'https://www.linkedin.com/', facebook: 'https://www.facebook.com/', youtube: 'https://www.youtube.com/' }, // add real profile URLs
};

export const NAV = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/news', label: 'News' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export const PILLARS = [
  ['Engineering design', 'Sound technical judgement from first assessment'],
  ['Project execution', 'Field delivery planned, supervised and handed over'],
  ['Technical excellence', 'Safety, quality and efficiency on every site'],
];

export const STATS = [
  { n: 9, s: '', icon: 'layers', l: 'Service lines under one roof', d: 'From fabrication to asset integrity' },
  { n: 6, s: '', icon: 'handshake', l: 'Partner organisations', d: 'Established Nigerian firms' },
  { n: 4, s: '', icon: 'factory', l: 'Sectors served', d: 'Oil and gas, power, industrial, construction' },
  { n: 100, s: '%', icon: 'shield', l: 'Commitment to safe work', d: 'Zero tolerance for impairment' },
];

const S = (slug, title, short, points) => ({ slug, title, short, points });
export const SERVICES = [
  S('mechanical-fabrication-installation', 'Mechanical Fabrication & Installation', 'Precision fabrication and installation of mechanical systems for oil and gas facilities and industrial plants.', ['Fabrication to approved drawings and specifications', 'Installation, alignment and mechanical completion support', 'Quality checks at every stage of the work']),
  S('pipeline-plant-construction', 'Pipeline & Plant Construction', 'End-to-end pipeline and plant construction, from planning and preparation through execution and completion.', ['Pipeline and process plant construction', 'Planning, preparation and site mobilisation', 'Coordinated execution with safety and schedule control']),
  S('civil-works', 'Civil Works', 'Dependable civil and structural works delivered to specification, safely and on schedule.', ['Foundations, structures and site civil works', 'Supervised construction to applicable standards', 'Support for oil and gas facilities and construction projects']),
  S('project-supervision', 'Project Supervision', 'Qualified supervision that keeps safety, quality and schedule under close control on site.', ['Experienced supervisors matched to the scope', 'Monitoring of progress, quality and HSE compliance', 'Clear, honest reporting to the client']),
  S('machine-tools-equipment-supply', 'Machine Tools & Technical Equipment Supply', 'Sourcing and supply of machine tools and technical equipment matched to each assignment.', ['Machine tools and technical equipment supply', 'Selection against project requirements', 'Dependable sourcing and delivery coordination']),
  S('flange-management-torquing', 'Flange Management & Torquing', 'Controlled flange management and bolt torquing services that protect joint integrity.', ['Flange management programmes', 'Controlled bolt torquing by competent technicians', 'Support for shutdowns, maintenance and commissioning']),
  S('technical-manpower-supply', 'Technical Manpower Supply', 'Engineers, technicians and skilled site personnel selected for the work in hand.', ['Qualified engineers and technicians', 'Skilled site personnel matched to field requirements', 'Short and long-term deployment']),
  S('project-management-general-contracting', 'Project Management & General Contracting', 'Coordinated project management and contracting under a single accountable structure.', ['Planning, coordination and monitoring', 'General contracting across disciplines', 'One accountable team from start to handover']),
  S('asset-integrity-reliability', 'Asset Integrity & Reliability', 'Integrity and reliability services that keep critical assets safe, compliant and productive.', ['Integrity and reliability support for facilities', 'Compliance with statutory and industry requirements', 'Practical, risk-aware technical recommendations']),
].map((s, i) => ({ ...s, image: p(`service-${i + 1}`) }));

export const PROCESS = [
  ['Assess', 'We listen first and study the site, scope and objectives.'],
  ['Design', 'Technical solutions are shaped around your requirements.'],
  ['Mobilise', 'Qualified people, equipment and HSE plans are put in place.'],
  ['Execute', 'Supervised field work to the agreed quality and schedule.'],
  ['Hand over', 'Honest reporting and accountability through final handover.'],
];

export const INDUSTRIES = [
  { t: 'Oil & gas facilities', d: 'Upstream and downstream facility works.', image: p('industry-1') },
  { t: 'Power & LNG', d: 'Technical support across energy infrastructure.', image: p('industry-2') },
  { t: 'Industrial plants', d: 'Fabrication, installation and integrity services.', image: p('industry-3') },
  { t: 'Construction & infrastructure', d: 'Civil works and project delivery.', image: p('industry-4') },
];

export const WHY = [
  ['Client accountability', 'We take ownership of the outcome, not simply the deliverable, and keep you informed with clear communication and consistent follow-through.'],
  ['Integrated technical capability', 'Engineering, fabrication, construction and project management come together in one coordinated structure, backed by partnerships where broader reach is needed.'],
  ['Safety first', 'Responsible site practices protect personnel, clients, assets and the environment on every project.'],
  ['Quality assurance', 'Technical quality and professional standards are maintained throughout project execution.'],
  ['Timely, reliable delivery', 'Clear planning, effective communication and close monitoring support on-time execution without compromising quality.'],
  ['Qualified personnel', 'Engineers, technicians and skilled site teams are selected to match the technical and field requirements of each job.'],
];

export const VALUES = [
  ['Innovation', 'Contemporary technology applied with precision and purpose.'],
  ['Integrity', 'Honest reporting and clear communication in every engagement.'],
  ['Continuous improvement', 'Constantly advancing our capabilities, processes and people.'],
  ['Safety', 'Hazards controlled before they cause harm.'],
];

export const PARTNERS = [
  { name: 'JompaHeros Global Services Ltd', logo: null, text: 'Indigenous Nigerian EPC company delivering project management, facility upgrades and turnkey solutions across construction and oil and gas. Sole representative of FOTRIC in Nigeria for facility integrity testing.' },
  { name: 'FWE Western Energy Ltd', logo: null, text: 'Leading indigenous oil and gas services company providing specialised EPICC solutions across onshore and offshore upstream, downstream, LNG and power generation projects.' },
  { name: 'QED International (Oil & Gas) Nigeria Ltd', logo: null, text: 'Indigenous provider of engineering design, technical recruitment, commissioning and operation management, technical training, procurement, construction and installation in West Africa.' },
  { name: 'NIVAFER Engineering & Construction Ltd', logo: null, text: 'Steel fabrication and erection specialist serving oil and gas and allied industries, with about 40 years of experience and recognised as an industry leader in structural steel works.' },
  { name: 'Nathan Christopher Ltd', logo: null, text: 'Indigenous construction, electrification and civil engineering firm delivering cost-effective, high-quality infrastructure for private and public sector organisations across Nigeria.' },
  { name: 'Stanodali Contracting Services Ltd', logo: null, text: 'Delta State-headquartered engineering and contracting company specialising in civil works, electrical infrastructure, procurement and facility maintenance.' },
];

export const POLICIES = [
  { id: 'hse', title: 'HSE policy', intro: 'TEDAC protects the health and safety of its employees, clients, contractors, visitors and the public, and the environment. Health, Safety and Environmental considerations are integrated into every stage of project execution, in compliance with all applicable statutory, regulatory and industry requirements.', points: ['Identify and control hazards and risks before they result in injury, illness, property damage or environmental harm, supported by PPE where required', 'Comply with applicable laws, regulations and industry HSE standards', 'Ensure employees and contractors are trained, competent and equipped to work safely', 'Encourage participation through hazard reporting, safety observations, inductions, toolbox meetings and site briefings', 'Prevent pollution and minimise environmental impact', 'Investigate incidents and hazards and apply corrective and preventive measures'], close: 'HSE performance is continually reviewed. All employees, contractors and other persons working under TEDAC’s activities must comply with this policy.' },
  { id: 'alcohol-drugs', title: 'Alcohol & drug policy', intro: 'Impairment endangers our people, our clients, our assets and the environment, so TEDAC maintains a strict zero-tolerance policy on working under the influence.', points: ['Prohibit working while impaired by alcohol, illegal drugs or other substances', 'Prohibit possession, use, distribution or sale of illegal drugs and unauthorised alcohol on premises, project sites and during company activities', 'Promote awareness of the health, safety and performance risks of alcohol and drug misuse', 'Restrict access and remove from duty any person reasonably believed to be impaired', 'Take disciplinary or contractual action for confirmed breaches, subject to due process'], close: 'All employees, contractors and personnel engaged in TEDAC’s activities must comply.' },
  { id: 'nigerian-content', title: 'Nigerian content policy', intro: 'TEDAC is committed to developing Nigerian capacity and promoting meaningful participation of Nigerian personnel, businesses and service providers, supporting local expertise, employment and indigenous enterprise.', points: ['Engage qualified Nigerian personnel and indigenous suppliers, contractors and service providers where capabilities meet project requirements', 'Support skills development, knowledge transfer and practical technical exposure', 'Collaborate with clients, partners and stakeholders while maintaining required quality and standards'], close: 'All employees must comply with this policy and applicable Nigerian Content requirements.' },
  { id: 'quality', title: 'Quality policy', intro: 'TEDAC delivers quality services that meet client requirements and applicable standards across its engineering, construction, technical supply, project management and asset integrity activities, with emphasis on consistency, technical accuracy and reliable delivery.', points: ['Meet agreed client requirements and project specifications', 'Ensure quality requirements are understood by the personnel involved', 'Identify and resolve issues that may affect delivery or project outcomes', 'Comply with applicable statutory, regulatory and industry requirements', 'Review the policy periodically to keep it relevant'], close: 'All personnel are expected to uphold the quality requirements applicable to their roles.' },
];

export const PROJECTS = [
  { slug: 'gas-gathering-pipeline-spread', title: 'Gas gathering pipeline spread', cat: 'Pipeline & plant', place: 'Niger Delta', scope: 'Pipeline construction, flange management and torquing', image: p('project-1') },
  { slug: 'tank-farm-fabrication', title: 'Tank farm structural fabrication', cat: 'Fabrication', place: 'Port Harcourt', scope: 'Mechanical fabrication and installation', image: p('project-2') },
  { slug: 'pipe-rack-steelwork', title: 'Pipe rack steelwork package', cat: 'Fabrication', place: 'Rivers State', scope: 'Structural steel erection with supervision', image: p('project-3') },
  { slug: 'facility-integrity-programme', title: 'Facility integrity programme', cat: 'Asset integrity', place: 'Onshore facility', scope: 'Asset integrity and reliability services', image: p('project-4') },
  { slug: 'access-road-civil-works', title: 'Access road and site civil works', cat: 'Civil works', place: 'Delta State', scope: 'Civil works and general contracting', image: p('project-5') },
  { slug: 'turnaround-manpower', title: 'Turnaround technical manpower', cat: 'Manpower', place: 'Port Harcourt', scope: 'Technical manpower supply and supervision', image: p('project-6') },
];

export const NEWS = [
  { slug: 'hse-toolbox-culture', date: '12 November 2026', cat: 'HSE', title: 'Why daily toolbox meetings anchor our safety culture', excerpt: 'Short, focused briefings before work begins keep every person on site aligned on hazards and controls.', image: p('news-1'), body: ['Safety at TEDAC begins before the first tool is lifted. Inductions, toolbox meetings and site briefings give every team member a clear picture of the day’s hazards and the controls in place.', 'Hazard reporting and safety observations are encouraged from everyone on site, and incidents are investigated so corrective and preventive measures reduce recurrence.', 'This sample article shows how the News section will look. Replace it with TEDAC’s own announcements.'] },
  { slug: 'local-content-capacity', date: '28 October 2026', cat: 'Company', title: 'Building Nigerian technical capacity through every project', excerpt: 'Skills development and knowledge transfer sit at the heart of our Nigerian content commitment.', image: p('news-2'), body: ['TEDAC engages qualified Nigerian personnel and indigenous suppliers where their capabilities meet project requirements.', 'Practical technical exposure and knowledge transfer help grow the next generation of engineers and technicians.', 'This is a sample article. Replace it with real company news.'] },
  { slug: 'integrated-delivery', date: '9 October 2026', cat: 'Insight', title: 'Integrated delivery: engineering and field execution under one team', excerpt: 'Why connecting design competence with field execution reduces risk and protects schedule.', image: p('news-3'), body: ['When engineering judgement and field execution sit in one coordinated structure, issues are identified earlier and resolved faster.', 'Supported by established partnerships, TEDAC extends its reach for demanding technical requirements.', 'This is a sample article. Replace it with real company news.'] },
];

export const TEAM = [
  { name: 'Full Name', role: 'Managing Director', image: p('team-1') },
  { name: 'Full Name', role: 'Head of Engineering', image: p('team-2') },
  { name: 'Full Name', role: 'Operations Manager', image: p('team-3') },
  { name: 'Full Name', role: 'HSE Manager', image: p('team-4') },
];

export const ROLES = [
  { title: 'Pipeline Engineer', dept: 'Engineering', where: 'Port Harcourt', type: 'Full-time', about: 'Support design, construction and commissioning of pipeline and plant works.' },
  { title: 'Mechanical Fabrication Supervisor', dept: 'Operations', where: 'Port Harcourt', type: 'Full-time', about: 'Supervise fabrication and installation crews to quality and safety standards.' },
  { title: 'HSE Officer', dept: 'HSE', where: 'Field and Port Harcourt', type: 'Full-time', about: 'Run inductions, toolbox meetings and site safety observations.' },
  { title: 'Project Engineer', dept: 'Projects', where: 'Port Harcourt', type: 'Full-time', about: 'Coordinate planning, execution and reporting across project phases.' },
  { title: 'Graduate Engineer Trainee', dept: 'Early careers', where: 'Port Harcourt', type: 'Trainee', about: 'Structured exposure to design, fabrication, construction and integrity work.' },
];
