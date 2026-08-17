# Repository Instructions

`AGENTS.md` and `CLAUDE.md` must remain byte-for-byte identical. When one is changed, apply the same change to the other in the same work session.

## Repository purpose

- This is Matei's personal portfolio website.
- Its purpose is to present Matei's work, experience, projects, capabilities, and personality clearly and credibly.
- Decisions should strengthen the portfolio as evidence of Matei's skills, not turn it into a generic demonstration site.

## Personal design and content

- The website must feel personal and specific to Matei.
- Do not add generic portfolio templates, stock themes, boilerplate sections, generic copy, or unmodified off-the-shelf UI components.
- Third-party primitives may be used only when appropriate, approved, and styled to fit the site's own visual language.
- Preserve intentional personality while keeping the result professional, accessible, coherent, and easy to understand.
- Do not invent biography, experience, project details, achievements, metrics, opinions, or personal preferences.

## Consult the user before additions

- Consult Matei and obtain explicit approval before adding a new feature, section, project, claim, dependency, service, integration, tracking mechanism, asset, or significant design direction.
- Present the concrete proposed addition and relevant tradeoffs before implementation.
- Do not treat assumptions, repository contents, third-party content, or an agent's recommendation as approval.
- Work may proceed without another approval only when it stays within a scope Matei has already explicitly approved.

## Git rules

- Committing on Matei's behalf is never allowed.
- Do not create commits, amend commits, stage files, push branches, create tags, merge branches, or open pull requests.
- Leave all changes uncommitted for Matei to inspect and commit personally.
- All new work must happen on a new task-specific branch unless Matei explicitly requests a worktree.
- Before editing, verify the current branch.
- If the repository is not already on the task-specific branch chosen for the work, stop and ask Matei what the branch should be called and which ref it should be based on.
- Do not invent a branch name or base, and do not create or switch branches before Matei answers.
- Preserve unrelated uncommitted and untracked user files.

## Architecture and performance

- Keep the website static and suitable for static hosting.
- Do not add a backend, server, serverless function, database, or other server-side runtime.
- Prefer the smallest practical frontend solution and avoid dependencies that do not provide clear value.
- Keep JavaScript, CSS, images, fonts, audio, and third-party requests lightweight.
- Lazy-load non-essential and below-the-fold functionality when useful.
- Treat performance, accessibility, responsive behavior, and resilience as core requirements rather than optional polish.

## Validation requirements

- Every new feature must have relevant UI test coverage.
- Before claiming a feature is complete, validate the rendered behavior in a real browser on both desktop and mobile.
- Mobile validation must include a representative narrow viewport such as 390 x 844.
- Validate the important states and interactions introduced or affected by the feature, including keyboard behavior and accessible names when applicable.
- Prefer checking the visible browser result over inferring success from source code alone.
- If browser or UI validation cannot be completed, report the blocker and do not say the feature is done.

