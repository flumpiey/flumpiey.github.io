<script lang="ts">
	import ObfuscatedEmailLink from "$lib/components/ObfuscatedEmailLink.svelte";
	import ObfuscatedTelegramLink from "$lib/components/ObfuscatedTelegramLink.svelte";
	import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
	import ProjectModal from "$lib/components/ProjectModal.svelte";

	import { getModalStore } from "@skeletonlabs/skeleton";
	const modalStore = getModalStore();

	interface IProject {
		title: string;
		cover: string;
		overview: string;
		problem: string;
		solution: string[];
		impact: string;
		techStack: string[];
		link?: string;
		nda?: boolean;
		image?: string;
	}

	const projects: IProject[] = [
		{
			title: "EngagementFit – Corporate Wellness Platform",
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
			techStack: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap 5", "Chart.js", "DataTables", "AWS SES"],
			link: "https://engagementfit.com",
			image: "/EngagementFit.jpeg",
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
			title: "Exclusive Books – Shopify Integration & Automation",
			cover:
				"Shopify integration for 6M+ products, real-time sync with MySQL, GraphQL APIs, and automation for vouchers and pickup points.",
			overview: "Exclusive Books needed a robust integration between their Shopify store and legacy MySQL systems.",
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
			techStack: ["Shopify", "GraphQL", "Google Pub/Sub", "MySQL", "Maxwell Daemon", "Node.js"],
			link: "https://exclusivebooks.co.za",
			image: "/ExclusiveBooks.png",
		},
		{
			title: "FinnPont – SEO Optimization",
			cover:
				"SEO audit and optimization to improve PageSpeed, metadata, and structured data for stronger search rankings.",
			overview: "FinnPont wanted to strengthen digital visibility and speed up its website performance.",
			problem: "The site suffered from slow load speeds, incomplete metadata, and weak technical SEO.",
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
			title: "SmartBiii – Shopping & Collaboration Platform",
			cover:
				"Business training and shopper collaboration platform with React frontend and Django API, charts and PDF exports.",
			overview: "SmartBiii provides a collaborative shopping and training experience with dashboards and reporting.",
			problem: "Needed a scalable, modular platform with robust reporting and export features.",
			solution: [
				"Built Django API and React frontend (Nx monorepo).",
				"Implemented session templates, team management, forecasting, and inventory calculations.",
				"Added observer views, charting, and PDF exports.",
			],
			impact: "Delivered a scalable platform used in multiple training cohorts.",
			techStack: ["Django", "React", "Nx Monorepo", "PostgreSQL", "Docker", "Chart.js"],
			image: "/SmartBiii.png",
			link: "https://smartbiii.com",
		},
	];

	function openProject(project: IProject): void {
		modalStore.trigger({
			type: "component",
			component: { ref: ProjectModal, props: { project } },
			modalClasses: "max-w-3xl w-[min(92vw,48rem)] overflow-hidden rounded-xl bg-surface-100-800-token",
			backdropClasses: "bg-black/40 backdrop-blur-sm",
		});
	}
</script>

<section class="container mx-auto p-6 pt-20 md:pt-10 md:p-10 space-y-10">
	<header class="space-y-2">
		<h1 class="h1">Dru Connold</h1>
		<p class="text-xl opacity-90">Full-Stack Developer & Founder of Malva Dev</p>
		<p class="opacity-80">Blairgowrie, Gauteng, South Africa</p>
		<p>
			<ObfuscatedEmailLink buttonClass="btn btn-sm variant-filled" />
			<ObfuscatedTelegramLink buttonClass="btn btn-sm variant-filled" />
			<a
				class="btn btn-sm variant-filled"
				href="https://linkedin.com/in/dru-connold"
				target="_blank"
				rel="noreferrer"
				aria-label="LinkedIn"
			>
				<LinkedInIcon className="w-4 h-4" />
				<span class="sr-only">LinkedIn</span>
			</a>
			<a
				class="btn btn-sm variant-filled"
				href="https://github.com/flumpiey"
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub"
			>
				<GithubIcon className="w-4 h-4" />
				<span class="sr-only">GitHub</span>
			</a>
		</p>
	</header>

	<section
		id="summary"
		class="prose prose-invert max-w-none"
	>
		<h2>Profile Summary</h2>
		<p>
			Full-stack developer with over 10 years of experience delivering software solutions across web, mobile, and
			e-commerce. Founder of <strong>MalvaDev</strong>, helping businesses transform ideas into scalable digital
			platforms. Skilled in modern frontend and backend stacks, e-commerce integrations, project management, and DevOps.
			Experienced in leading small teams, managing end-to-end delivery, and
			<strong>rescuing unstable systems to production quality</strong>.
		</p>
	</section>

	<section
		id="skills"
		class="prose prose-invert max-w-none"
	>
		<h2>Core Skills</h2>
		<ul>
			<li><strong>Frontend Development:</strong> React, Next.js, Angular, Tailwind, Bootstrap</li>
			<li><strong>Backend Development:</strong> Django, Node.js, PHP (CodeIgniter, Vendure)</li>
			<li><strong>Mobile Apps:</strong> React Native, Cross-platform Solutions</li>
			<li><strong>Databases:</strong> PostgreSQL, MySQL, Firebase, Supabase</li>
			<li><strong>E-Commerce:</strong> Shopify, Vendure, Custom Memberships, Payments (Netcash, PayFast)</li>
			<li><strong>DevOps & Cloud:</strong> AWS, DigitalOcean, Docker, Unraid, CI/CD Pipelines</li>
			<li><strong>Other Expertise:</strong> SEO, Web Performance, Automation, Data Visualization</li>
		</ul>
	</section>

	<section
		id="experience"
		class="prose prose-invert max-w-none space-y-4"
	>
		<h2>Professional Experience</h2>
		<div>
			<h3 class="m-0">MalvaDev – Business Owner</h3>
			<p class="mt-1 text-sm opacity-80">June 2023 – Present | Randburg, Gauteng, South Africa</p>
			<ul>
				<li>Delivering full-stack development services for international and South African clients.</li>
				<li>Built and maintained scalable platforms (Next.js, Django, Angular, Vendure).</li>
				<li>Led rescue projects by stabilizing broken offshore builds and delivering production-ready systems.</li>
				<li>Introduced automation, CI/CD pipelines, and cloud infrastructure (AWS, DigitalOcean).</li>
				<li>Managed a small team of developers and designers.</li>
			</ul>
		</div>
		<div>
			<h3 class="m-0">SDF – Export Parts Manager</h3>
			<p class="mt-1 text-sm opacity-80">April 2016 – May 2023 | Southern Africa</p>
			<ul>
				<li>Managed spare parts distribution across Southern Africa, streamlining logistics and workflows.</li>
				<li>Implemented digital systems for efficiency and accuracy.</li>
				<li>Coordinated with international suppliers and led a regional team.</li>
			</ul>
		</div>
		<div>
			<h3 class="m-0">ISIS-DIES – Maintenance Head / Engineering Assistant</h3>
			<p class="mt-1 text-sm opacity-80">August 2010 – February 2016 | Johannesburg, South Africa</p>
			<ul>
				<li>Progressed from Safety Coordinator to Head of Maintenance.</li>
				<li>Oversaw mechanical and electrical maintenance, CAD design, and PLC systems.</li>
				<li>Implemented preventive schedules, supervised technical staff, and managed stock.</li>
			</ul>
		</div>
	</section>

	<section
		id="projects"
		class="prose prose-invert max-w-none space-y-6"
	>
		<h2 class="prose prose-invert">Projects</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as p (p.title)}
				<div
					class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden p-0 rounded-none m-0"
				>
					<header>
						{#if p.image}
							<img
								src={p.image}
								alt={`${p.title} screenshot`}
								class="block w-full aspect-[16/9] object-cover m-0"
							/>
						{:else}
							<div class="aspect-[16/9] w-full bg-surface-200-700-token flex items-center justify-center">
								<span class="text-xs opacity-70">Screenshot Placeholder</span>
							</div>
						{/if}
					</header>
					<article class="space-y-4 p-4">
						<div class="p-4">
							<h3 class="m-0 text-base font-semibold">{p.title}</h3>
							<p class="mt-1 text-sm opacity-80">{p.cover}</p>
							<div class="mt-3 grid grid-cols-2 gap-2">
								<button
									class="btn btn-sm variant-filled w-full"
									on:click={() => openProject(p)}>View details</button
								>
								{#if p.link}
									<a
										class="btn btn-sm variant-ghost w-full"
										href={p.link}
										target="_blank"
										rel="noreferrer">Visit site</a
									>
								{:else}
									<button
										class="btn btn-sm variant-ghost w-full opacity-60 cursor-not-allowed"
										disabled
									>
										Under NDA
									</button>
								{/if}
							</div>
						</div>
					</article>
				</div>
			{/each}
		</div>

		<!-- Modal content handled by global component modal -->
	</section>

	<section
		id="education"
		class="prose prose-invert max-w-none"
	>
		<h2>Education</h2>
		<ul>
			<li><strong>University of South Africa</strong> – Mechatronics Engineering (2012–2017)</li>
			<li><strong>St. Peter’s College</strong> – Matric (2010)</li>
		</ul>
	</section>

	<section
		id="certifications"
		class="prose prose-invert max-w-none"
	>
		<h2>Certifications</h2>
		<ul>
			<li>Mechatronic Systems NQF Level 5 (Festo, 2015)</li>
			<li>PLC – CoDeSys NQF Level 3 (Festo, 2015)</li>
		</ul>
	</section>

	<section
		id="interests"
		class="prose prose-invert max-w-none"
	>
		<h2>Achievements &amp; Interests</h2>
		<ul>
			<li>Qualified <strong>Day Skipper</strong> (sailing)</li>
			<li>Former <strong>Mensa</strong> member</li>
			<li>Scouter at 1st Edenvale &amp; Eastleigh Sea Scout Group</li>
			<li>Sailing, Hiking, Web Design</li>
		</ul>
	</section>
</section>
