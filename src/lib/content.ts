// Copy shared by the home page and /cv. Edit it here, then reprint the CV PDF.

/** A line with one bold phrase: text before it, the phrase, text after it. */
export type Marked = [before: string, strong: string, after: string];

export type Row = { label: string; items: string };

export type Role = { title: string; meta: string; duties: string[] };

export const coreSkills: Row[] = [
	{
		label: "Frontend Development:",
		items: "React, Next.js, Angular, Tailwind, Bootstrap",
	},
	{
		label: "Backend Development:",
		items: "Django, Node.js, PHP (CodeIgniter, Vendure)",
	},
	{
		label: "AI & Agent Tooling:",
		items:
			"MCP servers, Claude API, RAG pipelines, n8n, tool design for LLM agents",
	},
	{ label: "Mobile Apps:", items: "React Native, Cross-platform Solutions" },
	{ label: "Databases:", items: "PostgreSQL, MySQL, Firebase, Supabase" },
	{
		label: "E-Commerce:",
		items: "Shopify, Vendure, Custom Memberships, Payments (Netcash, PayFast)",
	},
	{
		label: "DevOps & Cloud:",
		items: "AWS, DigitalOcean, Docker, Unraid, CI/CD Pipelines",
	},
	{
		label: "Other Expertise:",
		items: "SEO, Web Performance, Automation, Data Visualization",
	},
];

export const languages: Row[] = [
	{
		label: "Frontend:",
		items: "JavaScript (ES6+) · TypeScript · HTML5 · CSS3 / SCSS · JSON",
	},
	{
		label: "Backend:",
		items:
			"PHP (CodeIgniter / Laravel) · Python (Django / FastAPI) · Node.js (Express / NestJS) · Go (basic tooling)",
	},
	{
		label: "Cross-Platform & Mobile:",
		items: "Dart / Flutter · Electron.js · Tauri",
	},
	{
		label: "Scripting & Automation:",
		items: "Bash · PowerShell · Make · npm / pnpm scripts",
	},
	{
		label: "Query & Data Formats:",
		items: "SQL · PostgreSQL PL/pgSQL · GraphQL · REST API Schemas",
	},
	{
		label: "Markup & Documentation:",
		items: "Markdown · YAML · XML · OpenAPI / Swagger",
	},
];

export const roles: Role[] = [
	{
		title: "MalvaDev – Business Owner",
		meta: "June 2023 – Present | Randburg, Gauteng, South Africa",
		duties: [
			"Delivering full-stack development services for international and South African clients.",
			"Built and maintained scalable platforms (Next.js, Django, Angular, Vendure).",
			"Led rescue projects by stabilizing broken offshore builds and delivering production-ready systems.",
			"Introduced automation, CI/CD pipelines, and cloud infrastructure (AWS, DigitalOcean).",
			"Managed a small team of developers and designers.",
		],
	},
	{
		title: "SDF – Export Parts Manager",
		meta: "April 2016 – May 2023 | Southern Africa",
		duties: [
			"Managed spare parts distribution across Southern Africa, streamlining logistics and workflows.",
			"Implemented digital systems for efficiency and accuracy.",
			"Coordinated with international suppliers and led a regional team.",
		],
	},
	{
		title: "ISIS-DIES – Maintenance Head / Engineering Assistant",
		meta: "August 2010 – February 2016 | Johannesburg, South Africa",
		duties: [
			"Progressed from Safety Coordinator to Head of Maintenance.",
			"Oversaw mechanical and electrical maintenance, CAD design, and PLC systems.",
			"Implemented preventive schedules, supervised technical staff, and managed stock.",
		],
	},
];

export const education: Marked[] = [
	["", "University of South Africa", " – Mechatronics Engineering (2012–2017)"],
	["", "St. Peter’s College", " – Matric (2010)"],
];

export const certifications: string[] = [
	"Mechatronic Systems NQF Level 5 (Festo, 2015)",
	"PLC – CoDeSys NQF Level 3 (Festo, 2015)",
];

export const interests: Marked[] = [
	["Qualified ", "Day Skipper", " (sailing)"],
	["Scouter at 1st Edenvale & Eastleigh Sea Scout Group", "", ""],
	["Sailing, Hiking", "", ""],
];
