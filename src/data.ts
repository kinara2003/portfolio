// EDIT HERE: all site content lives in this file.
export const CV_FILE = './cv/Kinara_Hemachandra_CV.pdf'
export const EMAIL = 'Kinarahemachandra2003@gmail.com'
export const PHONE = '+94 77 222 1736'
export const LOCATION = 'Wijayaba Place, Malabe, Sri Lanka'
export const LINKEDIN = 'https://www.linkedin.com/in/kinara-hemachandra-10a174284'
export const GITHUB = 'https://github.com/kinara2003'

export type Block = { h: string; p?: string; list?: string[]; flow?: string[]; note?: string }
export type Case = { id: string; title: string; category: string; type: string; summary: string; skills: string[]; blocks: Block[] }

export interface WorkExperience {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  caseStudyId?: string
}

export const experiences: WorkExperience[] = [
  {
    role: 'Business Analyst (Intern)',
    company: 'Cloud Syntex',
    location: 'No. 210, N. J. V. Cooray Mawatha, Rajagiriya',
    period: 'February 2026 – September 2026',
    caseStudyId: 'crm',
    bullets: [
      'Collaborated with clients to gather, analyze, and document business and functional requirements for CRM enhancements and new features.',
      'Prepared Business Requirement Documents (BRDs), Software Requirement Specifications (SRS), user guides, and other project documentation.',
      'Participated in client meetings, captured meeting minutes, clarified requirements, and translated business needs into actionable tasks for the development team.',
      'Worked closely with developers, UI/UX designers, and QA engineers throughout the SDLC to ensure requirements were accurately implemented.',
      'Analyzed existing CRM workflows and identified opportunities to improve usability, automation, and business processes.',
      'Documented CRM integrations, including HubSpot and Dinero, detailing integration workflows, data synchronization, and user processes.',
      'Created process flows, feature descriptions, and functional documentation to support system development and client onboarding.',
      'Assisted in backlog management by converting business requirements into clear user stories and acceptance criteria.',
      'Validated implemented features against documented requirements and coordinated with stakeholders to resolve requirement-related issues.',
      'Contributed to continuous improvement of product documentation, ensuring accuracy, consistency, and alignment with client expectations.',
      'Analyzed business processes and gathered requirements to support data-driven decision-making, improving project efficiency and stakeholder alignment.'
    ]
  },
  {
    role: 'Virtual Telecommunication Assistant',
    company: 'RAR Properties',
    location: 'Al Moosa Tower 1, Sheikh Zayed Road, Dubai, UAE',
    period: 'September 2025 – November 2026',
    bullets: [
      'Managed customer communications through phone, email, and digital platforms, addressing inquiries and ensuring professional, timely responses.',
      'Maintained and updated customer information, interaction records, and follow-up activities using CRM systems.',
      'Coordinated with internal teams and customers to resolve issues, manage requests, and improve overall communication processes.'
    ]
  }
]

export interface CVProject {
  title: string
  tech: string
  description: string
}

export const cvProjects: CVProject[] = [
  {
    title: 'Wellness Studio Management System',
    tech: 'Java, MERN, HTML, CSS',
    description: 'Collaborated with a real-world client to build a wellness studio system with appointment scheduling, client management, and service tracking.'
  },
  {
    title: 'Finance Tracker',
    tech: 'Kotlin, Android Studio',
    description: 'Finance tracking app to manage income, expenses, and categories, with realtime balance updates and basic financial insights.'
  },
  {
    title: 'Online Job Portal',
    tech: 'JavaScript, HTML, CSS',
    description: 'Portal enabling employers to post vacancies and job seekers to search, apply, and manage applications efficiently.'
  },
  {
    title: 'Clean Water & Sanitation System',
    tech: 'HTML, CSS, JavaScript',
    description: 'System to monitor water resources, track sanitation services, and support community-level reporting.'
  },
  {
    title: 'Online Vehicle Spare Parts Management System',
    tech: 'HTML, CSS, JavaScript',
    description: 'System to manage inventory, process orders, and track customer purchases efficiently.'
  }
]

export const educationList = [
  {
    degree: 'BSc (Hons) Software Engineering',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Jul 2023 – Present'
  },
  {
    degree: 'Physical Science',
    institution: 'Cambridge International School',
    period: 'Secondary Education'
  }
]

export const skills: Record<string, string[]> = {
  'Business Analysis': [
    'Requirements Gathering',
    'Business Process Analysis',
    'Workflow Analysis',
    'Business Requirements Documentation (BRDs)',
    'Software Requirement Specifications (SRS)',
    'User Stories & Acceptance Criteria',
    'Process Improvement',
    'CRM Requirements Analysis',
    'Stakeholder Engagement',
    'System Documentation'
  ],
  'Tools & Technologies': [
    'CRM Software (HubSpot, Dinero)',
    'SQL (Intermediate)',
    'Microsoft Excel (Intermediate)',
    'Jira & Agile Tools',
    'Figma (Used in practice)',
    'Trello & PM tools',
    'Microsoft Word & Google Docs'
  ],
  'Professional & Core Skills': [
    'Data Analysis',
    'Customer Service',
    'Remote Collaboration',
    'Report Writing',
    'Multitasking',
    'Technical Troubleshooting',
    'Analytical Thinking & Problem-Solving',
    'Teamwork & Collaboration'
  ],
}

export const cases: Case[] = [
{ id:'crm', title:'CRM Business Analysis — Cloud Syntex', category:'CRM · Business Systems', type:'Internship work',
  summary:'Business analysis for a CRM solution: leads, opportunities, pipelines, activities, dashboards and HubSpot and Dinero integration requirements.',
  skills:['Requirements Analysis','Workflow Analysis','System Documentation','CRM'],
  blocks:[
  {h:'Scope and confidentiality',p:'From my Business Analyst Intern role at Cloud Syntex (2 Feb – 7 Aug 2026). Client details, credentials and internal documents are withheld; diagrams and examples are anonymized or illustrative.'},
  {h:'Business context',p:'The CRM solution supported sales and customer management through a CRM and Client Manager area, a Task Manager and administrative functions, alongside product and sales-related workflows.'},
  {h:'Objectives',list:['Understand how sales and customer information is managed day to day','Document requirements and business rules clearly for design and development','Explore how CRM data should connect with HubSpot and the Dinero accounting system']},
  {h:'My role and contribution',p:'I analyzed and documented requirements and workflows and collaborated with team members to understand business needs. I did not independently implement every feature, and features described as proposals were not necessarily deployed.'},
  {h:'Areas analyzed',list:['Leads, companies, contacts and sales opportunities','Multiple sales pipelines and opportunity stages','Calls, meetings, tasks, pending and completed activities','Dashboard metrics, filters, targets and reporting','HubSpot synchronization requirements','Dinero accounting integration requirements','Product information in sales workflows']},
  {h:'Sample workflow (illustrative)',flow:['Lead captured','Qualified','Opportunity created','Pipeline stages','Activities & follow-ups','Won / Lost','Accounting handoff']},
  {h:'Sample requirements (sanitized, illustrative)',list:['FR-1: A user can create an opportunity linked to a company and contact.','FR-2: An opportunity belongs to one pipeline and one stage at a time.','FR-3: Stage changes are recorded with date and user.','FR-4: The dashboard shows pending and completed activities, filterable by user and period.','BR-1: Closed opportunities require an outcome (won or lost) before leaving the active pipeline.']},
  {h:'Sample user story and acceptance criteria',p:'As a sales user, I want to move an opportunity to the next stage so that the team can see current deal status.',list:['When I change an open opportunity’s stage, the new stage and timestamp are saved.','The pipeline view reflects the change.','The change appears in the activity history.']},
  {h:'Integration considerations',list:['Which system is the source of truth for customer and sales data','How customer, sales and financial information moves between CRM, HubSpot and Dinero','How sync errors are reported to users']},
  {h:'Possible improvements (proposals only)',note:'Conceptual recommendations, not delivered features.',list:['Clearer stage definitions and entry criteria per pipeline','Overdue-activity visibility on the dashboard','Documented field mapping between systems']},
  {h:'Lessons learned',list:['Business rules need to be written down, not assumed','Integration requirements start with data ownership questions','Good documentation gives technical and business teams one shared understanding']},
  ]},
{ id:'water', title:'IoT-Based Water Fraud and Non-Revenue Water Detection', category:'IoT · Utilities Analytics', type:'University research (4th-year project)',
  summary:'My individual component of an intelligent IoT-based water infrastructure monitoring platform for Sri Lanka, focused on detecting possible water theft, meter tampering and abnormal flow.',
  skills:['Stakeholder Analysis','Requirements','Process Workflows','Data Monitoring'],
  blocks:[
  {h:'Status note',note:'Detection scenarios, alerts and dashboard features below are proposed concepts. No model accuracy, savings or deployment results are claimed. Diagrams are illustrative.'},
  {h:'Background and problem',p:'The wider project is an intelligent IoT-based platform for monitoring water infrastructure in Sri Lanka. Utilities lose water and revenue through theft, meter tampering, leaks and unmetered use (non-revenue water), which are hard to identify early.'},
  {h:'Business objectives',list:['Identify possible water fraud and tampering through monitoring and data analysis','Support non-revenue water monitoring','Give operators timely, understandable alerts and a dashboard']},
  {h:'Stakeholder analysis',list:['Water utility management: loss reduction and revenue protection','Billing and operations teams: reliable consumption data','Field inspectors: clear, prioritized alerts','Customers: fair billing and quick leak notification','Project team and supervisors']},
  {h:'Proposed detection scenarios',list:['Magnetic interference with a meter (magnetometer-based concept)','Physical tilt or removal of a meter (tilt-based concept)','Reverse flow','Abnormal flow patterns','Possible bypass-line scenarios']},
  {h:'System workflow (proposed)',flow:['Sensor readings','IoT transmission','Data analysis / detection','Alert generation','Dashboard review','Field investigation']},
  {h:'Functional requirements',list:['FR-1: The platform receives periodic meter and sensor readings.','FR-2: The platform flags readings matching defined tampering or abnormal-flow rules.','FR-3: Alerts are categorized by type and priority.','FR-4: Operators can view, acknowledge and close alerts on a dashboard.']},
  {h:'Non-functional requirements',list:['Reliable data delivery and handling of missing readings','Secure transmission and access control','Alerts that limit false-alarm fatigue','Scalability across many meters']},
  {h:'Example user story and acceptance criteria',p:'As a utility operator, I want to be alerted to reverse flow so that I can send an inspector.',list:['An alert is created when reverse flow meets the defined rule.','The alert shows meter, time and type.','The alert stays open until acknowledged.']},
  {h:'Data and monitoring requirements',list:['Flow readings with timestamps','Tamper-related signals (magnetic, tilt)','Meter and location identifiers','Alert history for review']},
  {h:'Proposed alerts and dashboard',list:['Open alerts by type and priority','Meter status overview','Alert history and investigation outcomes']},
  {h:'Potential benefits (not measured)',list:['Earlier detection of losses for utilities','Fairer billing and faster leak response for customers']},
  {h:'Lessons learned',list:['Requirements should separate detection rules from model assumptions','Operators need prioritization; managers need summaries']},
  ]},
{ id:'inquiry', title:'Customer Inquiry Management and Business Process Improvement', category:'Process Improvement', type:'Practice project (fictional company, not client work)',
  summary:'A self-initiated case study showing how I would analyze and improve an inefficient customer inquiry process, from AS-IS to TO-BE, requirements and KPIs.',
  skills:['Process Mapping','Requirements','User Stories','KPIs'],
  blocks:[
  {h:'Practice case',note:'Self-initiated practice project for a fictional company. Not employment or client work; all benefits are proposed, not achieved.'},
  {h:'1. Business problem',p:'Inquiries arrive by email, phone and social media with no shared record. Replies are slow and inconsistent and some inquiries are lost.'},
  {h:'2. Business objectives',list:['Respond to every inquiry consistently and on time','Give managers visibility of workload','Reduce lost and repeated work']},
  {h:'3. Stakeholders',list:['Customers','Support agents','Sales team','Support manager','Management']},
  {h:'4. AS-IS process',flow:['Inquiry received','Agent notes it personally','Forwarded by email/chat','Reply when available','No follow-up']},
  {h:'5. Bottlenecks and likely root causes',list:['No central inbox or tracking, so inquiries get lost','No ownership or priority rules, so replies are delayed','No reusable answers, so replies are inconsistent','No reporting, so problems stay invisible']},
  {h:'6. TO-BE process',flow:['All channels logged as tickets','Categorized & assigned','Reply with templates','Escalate if overdue','Close & feedback']},
  {h:'7. Functional requirements',list:['FR-1: Create a ticket for each inquiry from email and web form.','FR-2: Assign tickets by category with a priority.','FR-3: Escalate tickets unanswered past the target time.','FR-4: Provide reply templates.','FR-5: Provide a manager view of open and overdue tickets.']},
  {h:'8. User stories',list:['As an agent, I want all inquiries in one queue so none are missed.','As a manager, I want to see overdue tickets so I can rebalance workload.','As a customer, I want an acknowledgement so I know my inquiry was received.']},
  {h:'9. Acceptance criteria',list:['Every inquiry from a connected channel appears as a ticket with an owner.','Overdue tickets are flagged automatically.','The manager view can be filtered by agent and status.']},
  {h:'10. Proposed KPIs',list:['First response time','Resolution time','% of inquiries answered within target','Number of lost or unanswered inquiries','Customer satisfaction score']},
  {h:'11. Implementation considerations',list:['Agree categories, priorities and response targets with stakeholders','Train agents and migrate from email gradually','Review KPIs after an initial period']},
  {h:'12. Expected benefits (proposed, not achieved)',list:['Fewer lost inquiries','More consistent replies','Better workload visibility']},
  ]},
]
