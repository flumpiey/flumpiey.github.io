<script lang="ts">
	export const prerender = true;

	import ObfuscatedEmailLink from "$lib/components/ObfuscatedEmailLink.svelte";
	import ObfuscatedTelegramLink from "$lib/components/ObfuscatedTelegramLink.svelte";
	import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
</script>

<section class="container mx-auto p-6 pt-20 md:pt-10 md:p-10 space-y-10">
	<!-- Header -->
	<header class="space-y-3">
		<!-- Mobile avatar -->
		<div class="md:hidden">
			<img
				src="/AlexanderSmith_D&G-97.jpg"
				alt="Dru Connold portrait"
				class="w-24 h-24 rounded-xl object-cover object-top shadow"
			/>
		</div>
		<h1 class="h1">Dru Connold</h1>
		<p class="text-xl opacity-90">Full-Stack Developer & Founder of Malva Dev</p>
		<p class="opacity-80">Blairgowrie, Gauteng, South Africa</p>
		<div class="flex flex-wrap gap-2 pt-2">
			<ObfuscatedEmailLink />
			<ObfuscatedTelegramLink />
			<a
				class="btn btn-sm variant-ghost-surface"
				href="https://linkedin.com/in/dru-connold"
				target="_blank"
				rel="noreferrer"
				aria-label="LinkedIn"
			>
				<LinkedInIcon className="w-4 h-4" />
			</a>
			<a
				class="btn btn-sm variant-ghost-surface"
				href="https://github.com/flumpiey"
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub"
			>
				<GithubIcon className="w-4 h-4" />
			</a>
		</div>
	</header>

	<!-- Profile Summary -->
	<section
		id="summary"
		class="prose prose-invert max-w-none scroll-mt-24"
	>
		<h2>Profile Summary</h2>
		<p>
			Full-stack developer with over 10 years of experience across web development, mobile applications, and
			engineering. Founder of Malva Dev, helping clients transform ideas into digital solutions. Skilled in both
			frontend and backend technologies, project management, and delivering scalable software systems. Strong experience
			with cloud, DevOps, and leading small teams from concept to deployment.
		</p>
	</section>

	<!-- Core Skills -->
	<section
		id="skills"
		class="prose prose-invert max-w-none scroll-mt-24"
	>
		<h2>Core Skills</h2>
		<ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
			<li><strong>Full-Stack Development:</strong> React, Next.js, Angular, Django, Node.js, PHP</li>
			<li><strong>Mobile App Development</strong></li>
			<li><strong>Cloud & DevOps:</strong> AWS, DigitalOcean, Docker, Unraid</li>
			<li><strong>Databases:</strong> SQL, Firestore, Supabase, PostgreSQL, MySQL</li>
			<li><strong>Project Management:</strong> ClickUp, Clockify, GitHub, Jira</li>
			<li><strong>Other:</strong> SEO, Web Performance, CI/CD pipelines</li>
		</ul>
	</section>

	<!-- Professional Experience -->
	<section
		id="experience"
		class="prose prose-invert max-w-none space-y-6 scroll-mt-24"
	>
		<h2>Professional Experience</h2>
		<div>
			<h3 class="m-0">Malva Dev – Business Owner</h3>
			<p class="mt-1 text-sm opacity-80">June 2023 – Present | Randburg, Gauteng, South Africa</p>
			<ul>
				<li>
					Delivering software, mobile, and full-stack development services for international and South African clients.
				</li>
				<li>Built and maintained scalable web applications (Next.js, Django, Angular, Vendure).</li>
				<li>Led client projects end-to-end: scoping, development, deployment, and ongoing support.</li>
				<li>Introduced automation, CI/CD pipelines, and cloud infrastructure (AWS, DigitalOcean).</li>
				<li>Managed a small team of designers and developers.</li>
			</ul>
		</div>
		<div>
			<h3 class="m-0">SDF – Export Parts Manager</h3>
			<p class="mt-1 text-sm opacity-80">April 2016 – May 2023 | Southern Africa</p>
			<ul>
				<li>
					Oversaw parts distribution across Southern Africa, managing logistics, customer relationships, and systems.
				</li>
				<li>Streamlined workflows and implemented digital systems for improved efficiency.</li>
				<li>Managed a team and coordinated with international suppliers.</li>
			</ul>
		</div>
		<div>
			<h3 class="m-0">ISIS-DIES – Maintenance Head / Engineering Assistant</h3>
			<p class="mt-1 text-sm opacity-80">August 2010 – February 2016 | Johannesburg, South Africa</p>
			<ul>
				<li>Progressed from Safety Coordinator to Maintenance Supervisor to Head of Maintenance.</li>
				<li>Oversaw mechanical and electrical maintenance, CAD design, and PLC systems.</li>
				<li>Implemented preventive maintenance schedules, supervised staff, and managed stock.</li>
			</ul>
		</div>
	</section>

	<!-- Projects & GitHub -->
	<section
		id="projects"
		class="prose prose-invert max-w-none space-y-6 scroll-mt-24"
	>
		<h2>Projects & GitHub</h2>
		<div>
			<h3 class="m-0">EngagementFit (Corporate Wellness Platform)</h3>
			<p>
				Migrated and extended a Bubble.io app into CodeIgniter, building dashboards for affiliates, companies, and
				teams. Added custom role/permission system, reports, and charts. Integrated with PayFast for payments. <em
					>Tech:</em
				> CodeIgniter 4, Bootstrap 5.3, DataTables, PHP, MySQL.
			</p>
		</div>
		<div>
			<h3 class="m-0">ExclusiveBooks (Shopify Audit Scripts)</h3>
			<p>
				Developed Node/TypeScript scripts to audit product/catalog data. Migrated codebases into an Nx monorepo and
				introduced Redux, RTK Query, Vite. <em>Tech:</em> TypeScript, Nx, Redux, Shopify APIs.
			</p>
		</div>
		<div>
			<h3 class="m-0">SmartBiii (Training Simulation Platform)</h3>
			<p>
				Django API backend with web scraping, React frontend, and Nx monorepo setup. Simulation for players, observers,
				and admins with forecasting, orders, and stock management. <em>Tech:</em> Django, React, Nx, Firebase/Firestore.
			</p>
		</div>
		<div>
			<h3 class="m-0">DANSA (Scuba Diving Insurance Site)</h3>
			<p>
				Angular + GraphQL membership site. Built custom membership logic (pending, upgrades, family members, debit
				orders vs once-off). Integrated with Netcash (SOAP API) for payments. <em>Tech:</em> Angular, Vendure (NestJS), GraphQL,
				Netcash API.
			</p>
		</div>
		<div>
			<h3 class="m-0">FinnPont & Finnegan Burger (SEO & Web Performance)</h3>
			<p>
				Performed SEO audits and page speed optimization. Improved Google visibility, metadata, and indexing. <em
					>Tech:</em
				> Next.js, SEO tooling, PageSpeed.
			</p>
		</div>
		<div>
			<h3 class="m-0">LDV South Africa (Next.js E-commerce)</h3>
			<p>
				Proposal and partial build of LDV car brand site using Next.js, Vendure, and Sanity. Considered 3D configurator
				for vehicle models. <em>Tech:</em> Next.js, Vendure, Sanity CMS.
			</p>
		</div>
		<div>
			<h3 class="m-0">Malva Dev Open Source Projects</h3>
			<ul>
				<li>Sconaut – SEO audit tool (Go).</li>
				<li>MediaServer – Internal tooling for media handling.</li>
				<li>Vendure Extensions – Plugins for memberships and payments.</li>
				<li>Focuscus – AI prompt and text generation experiments (Python).</li>
			</ul>
		</div>
		<div>
			<h3 class="m-0">Vendure Contributions</h3>
			<p>
				Forked and extended GraphQL headless e-commerce framework to support custom membership and payment workflows. <em
					>Tech:</em
				> TypeScript, GraphQL, NestJS.
			</p>
		</div>
	</section>

	<!-- Education -->
	<section
		id="education"
		class="prose prose-invert max-w-none scroll-mt-24"
	>
		<h2>Education</h2>
		<ul>
			<li>University of South Africa – Mechatronics Engineering (2012–2017)</li>
			<li>St. Peter’s College – Matric (2010)</li>
		</ul>
	</section>

	<!-- Certifications -->
	<section
		id="certifications"
		class="prose prose-invert max-w-none scroll-mt-24"
	>
		<h2>Certifications</h2>
		<ul>
			<li>Mechatronic Systems NQF Level 5 (Festo, 2015)</li>
			<li>PLC – CoDeSys NQF Level 3 (Festo, 2015)</li>
		</ul>
	</section>

	<!-- Achievements & Interests -->
	<section
		id="interests"
		class="prose prose-invert max-w-none scroll-mt-24"
	>
		<h2>Achievements & Interests</h2>
		<ul>
			<li>Previously Scouter at 1st Edenvale Scout Group and Eastleigh Sea Scout Group</li>
			<li>Previously a member of Mensa</li>
			<li>Day Skipper’s license</li>
			<li>Sailing, Hiking, Web Design</li>
		</ul>
	</section>
</section>
