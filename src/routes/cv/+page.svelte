<script lang="ts">
	import { onMount } from "svelte";
	import ProfileText from "#lib/components/ProfileText.svelte";
	import { EMAIL_B64, PHONE_B64, TELEGRAM_USER_B64 } from "#lib/contact.ts";
	import { certifications, coreSkills, education, interests, languages, type Row, roles } from "#lib/content.ts";
	import DownloadIcon from "#lib/icons/DownloadIcon.svelte";
	import { type Project, projects } from "#lib/projects.ts";

	// PurpleCube AI appears on the CV only: the website has no screenshot for it.
	const purpleCube: Project = {
		title: "PurpleCube AI – Unified Data Orchestration Platform",
		cover:
			"Designed and maintained a cloud-native platform that streamlines enterprise data operations. Delivered a full front-end redesign with GSAP animations, integrated Sanity CMS for structured content management, optimized backend performance, and deployed scalable workflows on AWS and Vercel.",
		impact: "Improved usability, scalability, and content management efficiency for large enterprise teams.",
		techStack: ["Next.js", "Laravel", "Sanity CMS", "AWS", "Vercel", "Zoho"],
		link: "https://purplecube.ai",
	};
	// After the third project (DANSA), as on the previous CV.
	const cvProjects: Project[] = [...projects.slice(0, 3), purpleCube, ...projects.slice(3)];

	let phone: string = $state("");
	let email: string = $state("");
	let telegram: string = $state("");

	onMount((): void => {
		phone = atob(PHONE_B64);
		email = atob(EMAIL_B64);
		telegram = atob(TELEGRAM_USER_B64);
	});

	const bare = (url: string): string => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
</script>

<svelte:head>
	<title>Dru Connold – CV</title>
</svelte:head>

<div class="bg-surface py-6 sm:py-10 print:bg-transparent print:py-0">
	<div class="cv-toolbar mx-auto flex flex-wrap gap-3 px-(--gutter) pb-6 print:hidden">
		<a class="button-primary" href="/250000 Professional - Dru Connold - CV.pdf" download>
			Download PDF
			<DownloadIcon />
		</a>
		<button type="button" class="button-secondary" data-requires-js onclick={() => window.print()}>Print</button>
	</div>

	<!-- The sheet is always the light theme, on screen and on paper. -->
	<article class="cv-sheet mx-auto bg-paper text-ink">
		<header class="cv-pad grid gap-6 pb-6 sm:grid-cols-2 sm:items-end">
			<div>
				<h1 class="cv-name">
					<span class="block">Dru</span>
					<span class="block"><span class="inline-block bg-mark px-[0.04em]">Connold.</span></span>
				</h1>
				<p class="type-ui mt-4">Full-Stack Developer & Founder of Malva Dev</p>
				<p class="type-ui mt-1 text-ink-muted">Randburg, Gauteng, South Africa</p>
			</div>
			<address class="bg-red-solid p-4 text-sm leading-relaxed text-on-red not-italic">
				<dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 [&_dt]:font-bold [&_dd]:wrap-anywhere">
					<dt>Phone</dt>
					<dd>{#if phone}<a href="tel:{phone.replaceAll(' ', '')}">{phone}</a>{/if}</dd>
					<dt>Email</dt>
					<dd>{#if email}<a href="mailto:{email}">{email}</a>{/if}</dd>
					<dt>Telegram</dt>
					<dd>{#if telegram}<a href="https://t.me/{telegram}">{telegram}</a>{/if}</dd>
					<dt>Web</dt>
					<dd><a href="https://flumpiey.github.io">flumpiey.github.io</a></dd>
					<dt>GitHub</dt>
					<dd><a href="https://github.com/flumpiey">github.com/flumpiey</a></dd>
					<dt>LinkedIn</dt>
					<dd><a href="https://linkedin.com/in/dru-connold">linkedin.com/in/dru-connold</a></dd>
				</dl>
			</address>
		</header>

		<section class="cv-section cv-pad">
			<h2 class="cv-heading">Profile Summary</h2>
			<p><ProfileText /></p>
		</section>

		{#snippet rows(list: Row[])}
			<ul class="divide-y divide-on-block/25">
				{#each list as row (row.label)}
					<li class="cv-keep grid gap-x-3 py-1.5 first:pt-0 sm:grid-cols-[2fr_3fr]">
						<strong>{row.label}</strong>
						<span>{row.items}</span>
					</li>
				{/each}
			</ul>
		{/snippet}

		<div class="bg-block text-on-block">
			<section class="cv-section cv-pad">
				<h2 class="cv-heading">Core Skills</h2>
				{@render rows(coreSkills)}
			</section>
			<section class="cv-section cv-pad">
				<h2 class="cv-heading">Languages &amp; Frameworks</h2>
				{@render rows(languages)}
			</section>
		</div>

		<section class="cv-section cv-pad">
			<h2 class="cv-heading">Professional Experience</h2>
			<ol class="divide-y divide-rule">
				{#each roles as role (role.title)}
					<li class="cv-keep py-3 first:pt-0 last:pb-0">
						<h3 class="cv-title">{role.title}</h3>
						<p class="text-ink-muted">{role.meta}</p>
						<ul class="mt-1.5 list-disc pl-4">
							{#each role.duties as duty (duty)}
								<li>{duty}</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ol>
		</section>

		<section class="cv-section cv-pad">
			<h2 class="cv-heading">Selected Projects</h2>
			<ol class="divide-y divide-rule">
				{#each cvProjects as project (project.title)}
					<li class="cv-keep py-3 first:pt-0 last:pb-0">
						<h3 class="cv-title">{project.title}</h3>
						{#if project.link}
							<a class="text-red-text underline underline-offset-2" href={project.link}>{bare(project.link)}</a>
						{/if}
						<p class="mt-1">{project.cover}</p>
						{#if project.impact}
							<p class="mt-1"><strong>Result:</strong> {project.impact}</p>
						{/if}
						<p class="mt-1 text-ink-muted"><strong>Tech:</strong> {project.techStack.join(" · ")}</p>
					</li>
				{/each}
			</ol>
		</section>

		<section class="cv-section cv-pad">
			<h2 class="cv-heading">Education</h2>
			<ul>
				{#each education as [before, strong, after] (strong)}
					<li>{before}<strong>{strong}</strong>{after}</li>
				{/each}
			</ul>
		</section>

		<section class="cv-section cv-pad">
			<h2 class="cv-heading">Certifications</h2>
			<ul>
				{#each certifications as certification (certification)}
					<li>{certification}</li>
				{/each}
			</ul>
		</section>

		<section class="cv-section cv-pad">
			<h2 class="cv-heading">Achievements &amp; Interests</h2>
			<ul>
				{#each interests as [before, strong, after] (before)}
					<li>{before}<strong>{strong}</strong>{after}</li>
				{/each}
			</ul>
		</section>
	</article>
</div>

<style>
	.cv-sheet,
	.cv-toolbar {
		max-width: 210mm;
	}

	.cv-sheet {
		font-size: 0.9375rem;
		line-height: 1.5;
		/*
		 * The light values from app.css, repeated: the build lowers light-dark() so tokens resolve on :root,
		 * and `color-scheme: light` on this element alone does not change them. Keep both in step.
		 */
		color-scheme: light;
		--color-paper: #f5f0e8;
		--color-ink: #06004f;
		--color-ink-muted: #3a3578;
		--color-rule: rgb(6 0 79 / 0.25);
		--color-block: #06004f;
		--color-red-text: #202d85;
		--color-mark: #f2ff26;
	}

	.cv-pad {
		padding-inline: clamp(1rem, 5vw, 3rem);
	}

	header.cv-pad {
		padding-top: clamp(1.5rem, 5vw, 3rem);
	}

	.cv-section {
		display: grid;
		gap: 0.75rem 1.5rem;
		padding-block: 1.25rem;
		border-top: 1px solid var(--color-rule);
	}

	.cv-name {
		font-size: clamp(3.5rem, 12vw, 5.5rem);
		font-weight: 900;
		font-stretch: 62%;
		line-height: 0.85;
		letter-spacing: -0.03em;
		text-transform: uppercase;
	}

	.cv-heading {
		font-size: 1.75rem;
		font-weight: 800;
		font-stretch: 68%;
		line-height: 0.95;
		text-transform: uppercase;
		break-after: avoid;
	}

	.cv-title {
		font-size: 1.125rem;
		font-weight: 800;
		font-stretch: 75%;
		line-height: 1.15;
		text-transform: uppercase;
		break-after: avoid;
	}

	.cv-keep {
		break-inside: avoid;
	}

	@media (width >= 40rem) {
		.cv-section {
			grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
		}
	}

	/* No page margin, so the off-white reaches the paper edge; the sheet padding repeats on each page. */
	@page {
		size: A4;
		margin: 0;
	}

	@media print {
		/* The canvas behind the sheet, also when the visitor prints from the dark theme. */
		:global(html),
		:global(body) {
			background: #f5f0e8 !important;
		}

		:global(html) {
			font-size: 12.5px;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}

		.cv-sheet {
			max-width: none;
			padding-block: 10mm;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
		}

		header.cv-pad {
			padding-top: 0;
		}

		.cv-pad {
			padding-inline: 12mm;
		}

		/* Chrome splits grid rows badly across pages, so headings sit above their content on paper. */
		.cv-section {
			display: block;
			padding-block: 1rem;
		}

		.cv-heading {
			margin-bottom: 0.75rem;
		}
	}
</style>
