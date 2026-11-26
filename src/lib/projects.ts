/** One project card and its detail dialog. */
export interface Project {
	title: string;
	cover: string;
	overview?: string;
	problem?: string;
	solution?: string[];
	impact?: string;
	details?: string[];
	techStack: string[];
	link?: string;
	linkLabel?: string;
	nda?: boolean;
	image?: string;
	imageAlt?: string;
}

/** Rescues first, then the rest, as the brief orders them. */
export const projects: Project[] = [
	{
		title: "EngagementFit - Corporate Wellness Platform",
		cover:
			"Corporate wellness platform rescue and rebuild, migrated to CodeIgniter 4 with new UI, dashboards, subscriptions, and reporting.",
		overview:
			"EngagementFit needed a stable, scalable corporate wellness platform after their offshore build failed.",
		problem:
			"The app was unstable, with monolithic 100k+ line files, no search, poor security, and an incomplete migration from CodeIgniter 3 to 4.",
		solution: [
			"Migrated and refactored into clean, modular components.",
			"Redesigned UI with Bootstrap 5, DataTables, and Chart.js.",
			"Added OTP login and AWS SES email notifications.",
			"Built an admin dashboard with permissions, subscriptions, role assignments, event tracking, and PDF reporting.",
		],
		impact:
			"The platform became secure, scalable, and business-ready, enabling EngagementFit to manage affiliates, companies, and employees effectively.",
		techStack: [
			"CodeIgniter 4",
			"PHP",
			"MySQL",
			"Bootstrap 5",
			"Chart.js",
			"DataTables",
			"AWS SES",
		],
		link: "https://engagementfitdrive.com/",
		image: "/EngagementFit.jpeg",
	},
	{
		title: "Exclusive Books – Shopify Integration & Automation",
		cover:
			"Shopify integration for 6M+ products, real-time sync with MySQL, GraphQL APIs, and automation for vouchers and pickup points.",
		overview:
			"Exclusive Books needed a robust integration between their Shopify store and legacy MySQL systems.",
		problem:
			"REST APIs updated products one by one, hitting rate limits. Stock sync took weeks, leaving inventory outdated and unreliable.",
		solution: [
			"Migrated from REST to GraphQL APIs with bulk imports.",
			"Implemented Google Pub/Sub and Maxwell Daemon for real-time sync.",
			"Automated voucher creation, product imports, and pickup points across 40+ stores.",
			"Stabilized the project after rescuing it from a failing previous developer.",
		],
		impact:
			"Stock sync dropped from weeks to hours. Customers and staff gained accurate inventory visibility across millions of products.",
		techStack: [
			"Shopify",
			"GraphQL",
			"Google Pub/Sub",
			"MySQL",
			"Maxwell Daemon",
			"Node.js",
		],
		link: "https://exclusivebooks.co.za",
		image: "/ExclusiveBooks.png",
	},
	{
		title: "DANSA – Dive Insurance Membership Website",
		cover:
			"Membership platform for divers and families with automated Netcash payments, upgrades, and family coverage rules.",
		overview:
			"DANSA needed a modern insurance membership system to handle complex family and diving coverage scenarios.",
		problem:
			"Their old systems couldn’t manage recurring payments, membership upgrades, or diver/non-diver family rules.",
		solution: [
			"Angular frontend + Vendure backend with GraphQL APIs.",
			"Integrated Netcash for debit orders and once-off payments.",
			"Built flexible membership logic for divers, non-divers, and families.",
			"Automated billing, renewals, and upgrades.",
		],
		impact:
			"Thousands of active members now manage memberships seamlessly. Automated payments reduced admin work, while flexible logic improved customer satisfaction.",
		techStack: ["Angular", "Vendure (NestJS)", "GraphQL", "Netcash API"],
		link: "https://dansa.org",
		image: "/Dansa.png",
	},
	{
		title: "SmartBiii – Social Shopping & Collaboration Platform",
		cover:
			"Social media-inspired shopping platform that lets users crowdsource deals, share lists, and plan shopping collaboratively.",
		overview:
			"SmartBiii enables shoppers to discover and share the best deals through a visually engaging, Instagram-style feed. The platform also allows collaborative list creation and community-driven shopping planning.",
		problem:
			"Shoppers struggle to keep track of deals across multiple apps and stores, and needed a single, community-driven platform for sharing, organizing, and planning purchases.",
		solution: [
			"Developed Django API backend and React frontend (Nx monorepo) with real-time updates.",
			"Implemented social feed for deal discovery, collaborative shopping lists, and deal submissions.",
			"Integrated reporting dashboards, cloud hosting, and scalable data sync.",
		],
		impact:
			"Delivered a modern, community-driven shopping platform that connects users, crowdsources deals, and simplifies shopping management.",
		techStack: [
			"Django",
			"React",
			"Nx Monorepo",
			"PostgreSQL",
			"Docker",
			"AWS",
			"RESTful API",
		],
		image: "/SmartBiii.png",
		link: "https://smartbiii.com",
	},
	{
		title: "FinnPont – SEO Optimization",
		cover:
			"SEO audit and optimization to improve PageSpeed, metadata, and structured data for stronger search rankings.",
		overview:
			"FinnPont wanted to strengthen digital visibility and speed up its website performance.",
		problem:
			"The site suffered from slow load speeds, incomplete metadata, and weak technical SEO.",
		solution: [
			"PageSpeed optimization.",
			"Structured data for rich search results.",
			"Metadata fixes and keyword-targeted adjustments.",
		],
		impact:
			"Even with partial rollout, the site gained faster performance, improved rankings, and better user engagement.",
		techStack: ["Next.js", "SEO Tooling", "PageSpeed"],
		link: "https://finnpont.com",
		image: "/Finnpont.png",
	},
	{
		title: "manager-mcp - AI Access to Self-Hosted Accounting",
		cover:
			"Open source MCP server exposing a Manager.io accounting instance to AI assistants, read-only by default with per-domain write permissions.",
		details: [
			"Manager.io is free self-hosted accounting software with an HTTP API. Before this, no MCP server existed for it. The only prior AI integration was a single-author Bash CLI.",
			"The API exposes roughly 650 paths, and the interesting work was deciding what not to expose. Auto-generation would have produced 650 tools, flooding the model's context window and degrading tool selection on every session. I shipped about ten hand-picked tools: resource discovery, six searchable collections, and seven report shortcuts for aged receivables, aged payables, bank balances, trial balance, profit and loss, balance sheet and tax summary.",
			"A single write flag is the wrong shape for accounting, because drafting a quote and deleting a posted invoice carry entirely different risk. Permissions split by domain and by verb across 23 resource types in 9 domains, so create and edit never imply delete. Underneath that sits a denylist no configuration unlocks: access tokens, all chart of accounts and control account forms, tax codes, currencies, exchange rates, starting balances, bank reconciliations. An agent that can mint its own tokens escapes the permission model entirely, so that path is closed by construction, enforced in the HTTP client layer rather than at the tool layer.",
			"The upstream OpenAPI document ships with an empty schemas block, so write payload shapes were undocumented. The first release shipped reads only, with writes rolled out one domain at a time and each shape verified against a test business. The constraint set the roadmap.",
			"52 tests across 7 files, all mocked with respx, so the suite runs without a live instance. CI runs ruff and pytest on Python 3.10 and 3.12. Built with GitHub Spec Kit, with the spec, plan, tasks and checklists committed under specs/.",
		],
		techStack: [
			"Python 3.10+",
			"FastMCP",
			"httpx",
			"pytest",
			"respx",
			"MIT licence",
		],
		link: "https://github.com/flumpiey/manager-mcp",
		linkLabel: "View on GitHub",
		image: "/manager-mcp-cover.png",
		imageAlt: "manager-mcp cover image showing MCP server configuration",
	},
];
