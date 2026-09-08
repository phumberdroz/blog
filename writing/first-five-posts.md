# First five posts

Working direction: practical engineering and lessons from building software. These are writing outlines, not finished essays. Start with one concrete example per post; aim for 600–900 words. Replace the two starter posts when the first real essays are ready.

## 1. Start with the smallest useful version

**Central idea:** A useful first version answers one question well.

- Open with a project where the initial scope was too broad.
- Explain the one workflow that mattered and how you identified it.
- Walk through what you kept, postponed, and learned from the first release.
- End with a short exercise: name the user, their problem, and the smallest complete solution.

**Material to bring:** A real before-and-after scope list. What did you initially get wrong?

## 2. What makes a system easy to change?

**Central idea:** Judge architecture by the effort required to make an ordinary change.

- Start with a small feature that unexpectedly touched many parts of a system.
- Trace the dependencies that made the change difficult.
- Explain one boundary you would draw differently, with a simple example.
- Discuss when that extra structure is unnecessary.
- Close with a question readers can ask of their own codebase.

**Material to bring:** An anonymised dependency diagram or small code example.

## 3. Where AI helps in my engineering workflow

**Central idea:** Describe specific tasks, the review they need, and where the tools fall short.

- Choose one recent task and show the initial input.
- Describe the useful output and what you had to correct.
- Explain how you verified the result.
- Compare the effort with doing the task manually.
- Finish with your current boundaries for using the tool.

**Material to bring:** A real, shareable example. Avoid unmeasured productivity claims; record the tool and date because behaviour changes.

## 4. Making deployments less eventful

**Central idea:** Small changes, visible health signals, and a usable rollback make delivery easier to trust.

- Describe the uncertainty around a release, without exposing private incident details.
- Explain the smallest improvement that reduced that uncertainty.
- Walk through a release: preflight, deployment, observation, rollback decision.
- Discuss costs and the cases where the process should stay simpler.
- End with one improvement a small team can make this week.

**Material to bring:** A sanitised release checklist. Include metrics only if you can substantiate them.

## 5. What I want to get better at as an engineer

**Central idea:** A personal reflection that gives readers a reason to follow the next posts.

- Open with something that recently challenged an assumption.
- Pick three skills or habits you want to improve.
- Give a concrete experiment for each, with a way to notice progress.
- Name one open question you have not resolved.
- Invite readers to share their own experience.

**Material to bring:** Personal notes and one honest example of changing your mind.

## Publishing workflow

1. Draft outside `src/content/blog` so unfinished work does not appear on the site or RSS feed.
2. When ready, add a Markdown file to `src/content/blog` using the frontmatter below.
3. Run `npm run lint` and `npm run build`, then preview the post.
4. Set the real site URL in `astro.config.mjs` before deployment; it currently contains a placeholder.

```md
---
title: 'Start with the smallest useful version'
description: 'How to find the first version worth putting in someone’s hands.'
pubDate: 'YYYY-MM-DD'
---

Your essay starts here.
```

The homepage automatically lists every post, newest first. The filename becomes its URL, so choose it deliberately.
