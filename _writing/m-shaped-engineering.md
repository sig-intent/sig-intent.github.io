---
title: "M-shaped engineering and the second depth"
headline: "M-shaped engineering: cheap breadth is why you need more than one depth"
standfirst: >-
  AI collapsed the cost of access to a domain, not the cost of judgment inside
  it. Which makes multiple depths the only thing that lets you audit breadth you
  got for free.
description: >-
  Why pure specialization fails when AI makes breadth cheap — and why the naive
  generalist argument fails too. The second depth is what changes anything.
date: 2026-08-17
reading_time: "9 min read"
tags: [engineering-org, careers, hiring, ai-strategy]
pull_quote: >-
  An organization staffed entirely with T-shaped people has a complete map with
  unowned borders. Every territory is covered. Every boundary is not.
seo:
  type: BlogPosting
---

For twenty years the industry told engineers to specialize. Choose your niche and go deep, or so the story went. The advice was right. The conditions that made it right are gone.

T-shaped — broad awareness across many areas, real depth in one — matched the economics of technical work in an era when context was expensive. Getting to genuine competence in a new domain took years of reading, building, and being wrong in public: a considerable investment, and an emotional one, since a specialty that took a decade ends up commingled with self-identity. When acquisition costs that much, specializing is rational. It is also a bet, and a concentrated one. You go deep once, and the market pays you for having run the long distance.

Those economics broke somewhere in the last three years. But they did not break the way the "AI makes everyone a generalist" argument claims, and getting the distinction right is the difference between a useful career strategy and an expensive mistake.

What got cheap is **access** to a domain — or more precisely, good-enough-for-most-cases initial access. Judgment inside it did not get cheap at all.

## The objection, which is correct

The strongest argument against everything I am about to say goes like this:

> *A generalist with a language model is a menace. The tool produces fluent, confident, structurally wrong answers in every domain simultaneously, and it produces them in exactly the register that passes for expertise. The person least equipped to catch this is the one with broad, shallow exposure — because shallow exposure gives you the vocabulary to follow the answer, threadbare knowledge to sanity-check it, and none of the scar tissue to doubt it. Depth is the only reliable antidote. Therefore depth is now* more *valuable, not less, and organizations should be hiring harder specialists rather than softer generalists.*

Every step of that is right except the last one.

It is right about the mechanism. Fluent-and-wrong is a characteristic failure mode of the current tooling, and shallow breadth is genuinely the worst possible defence against it. I have watched competent people ship bad decisions in the last eighteen months specifically because an answer arrived in a domain adjacent to theirs, sounded correct, and they had no basis on which to distrust it.

Where it goes wrong is the prescription — because the antidote it proposes is unbuildable. You cannot have depth in the domain where you are being fooled. That is what "being fooled" means. Nobody has depth in eight domains, and the failures do not politely occur inside the one you own.

## What actually transfers

The useful asset is not depth in the domain under discussion. It is **having been deep at all, more than once.**

Here is the mechanism, and it is the reason the shape is M and not T.

Your first depth teaches you a domain. Your second depth teaches you something different and more portable: what the *transition* feels like — the specific sensation of moving from confident-and-wrong to actually-correct, of discovering that the clean mental model you held for two years was load-bearing in the wrong place. You only learn that by having held a wrong model long enough to be embarrassed by it, and then doing it again somewhere else, so that you recognise the pattern as a pattern rather than as one bad week.

That sensation is domain-independent. It is what fires when a fluent answer arrives in a field you do not own and something about its smoothness is wrong. The person with one depth has a single calibrated instrument and trusts the machine everywhere outside it. The person with two or three has learned what the inside of real competence feels like, which is precisely what lets them detect its absence in territory they have never worked.

So the case for M-shaped is not that breadth beats depth. Breadth is now free, and free things do not win arguments. The case is that the second and third depths are what make free breadth **safe to use**.

### A note on the letters

There is a taxonomy in circulation, mostly in the HR literature, that counts the verticals: T for one specialization, M for two or more, and Comb for many, each resting on a broad base of general skills. It is a useful vocabulary and I will use M throughout, because M is where the argument lives, but consider the fundamentally equivalent.

But the counting is the least interesting part of it, and I think it is actively misleading. The transformation is not linear in the number of depths. It happens **once, at the second one** — because the second depth is the first evidence you have that your first depth was a way of thinking rather than the way things are. A third and fourth add reach and range, and they compound in ways worth having, but they do not repeat that event. Nobody becomes twice as hard to fool by acquiring a fifth specialty.

Which means the comb profile is not the aspirational end of a ladder that starts at T. The ladder has exactly one rung that matters, and most people never step onto it.

### What the horizontal bar actually is

The taxonomy is right that the verticals rest on something, and wrong about what. The usual answer is soft skills: communication, empathy, teamwork. Those are good things to have and they are not the load-bearing element.

The base is **translation** — the ability to carry a constraint out of one domain's vocabulary and into another's without dropping it on the way. "This index will not survive the write volume" and "the month-end close will miss its window" are the same fact stated to two audiences, and someone has to be able to hold both forms of it at once and know they are the same. That capacity is what makes several depths compose into judgment instead of sitting alongside each other as unrelated party tricks.

Gregor Hohpe's architect elevator makes the adjacent point about organizations: the value is in riding between the penthouse and the engine room, because the people on each floor cannot hear each other. What the elevator model understates is the entry condition. You cannot ride credibly to a floor whose language you have never actually spoken. Two or more depths are what buy you the ticket.

One thread I am deliberately leaving alone: depths that are *not* adjacent — that share little or no Venn overlap — produce the most interesting cross-pollination, and also the hardest translation problem. That deserves its own essay rather than a paragraph in this one.

## What this looks like at scale

Running a global architecture function — 800+ projects, reporting into the Group CIO — gives you an unusual sample: not one organization's decisions, but hundreds of them, taken by different teams under different pressures, with the outcomes visible two and three years later.

The decisions that went badly were almost never wrong *inside* a domain. Domain experts are good at their domains; the database people did not choose bad indexes and the network people did not misconfigure the peering. The failures clustered at the seams: where the data model met the integration pattern, where the cloud cost model met the internal chargeback rules, where the security posture met the delivery cadence the business had already promised to a customer.

Not that in-domain errors never compound together — they do. But they compound legibly, inside a single vocabulary, in front of someone whose job it is to notice.

Seams have no owner, almost by organizational design. Every owner was a specialist, and the seam belonged to none of them — so it was nobody's job to notice that two locally correct decisions composed into one globally wrong system.

The structural conclusion is uncomfortable for anyone who has built an org chart: **an organization staffed entirely with T-shaped people has a complete map with unowned borders.** Every territory is covered. Every boundary is not.

## Three changes, and what each one costs

**Stop treating depth as the default criterion for senior hires.** Not "stop hiring specialists" — that would be a bad reading and an expensive mistake. You still need the person who can read a query planner at three in the morning, and if you staff entirely for breadth you will find out what that person was worth during your first genuine performance crisis, when nobody in the room has ever profiled anything. The change is narrower: for roles whose actual job is judgment under uncertainty, ask for two depths — or more — rather than for the deepest available one.

*The cost:* your interview loop gets worse before it gets better. Depth is easy to test — you probe until the candidate runs out of answers. Second-depth is hard to test and easy to fake, and you will make more hiring mistakes for a year while you learn to tell transfer from tourism.

**Stop penalizing cross-domain transfer.** Note the verb. The HR literature on these profiles reaches for development programmes — job rotation, cross-mentoring, personalised learning tracks — as though a second depth were something an organization can install in someone. It is not. The mechanism is holding a wrong model long enough to be embarrassed by it, and no rotation scheme manufactures that; six months on an adjacent team produces vocabulary, which is the failure mode, not the cure.

What an organization can actually do is stop punishing the people who do it anyway. Most review systems code cross-domain movement as "lack of focus" and quietly penalize the exact behaviour they claim to want.

*The cost:* you will also stop penalizing some genuine dilettantes. The mitigation is a hard requirement — the transfer only counts if it produced a shipped outcome in the new domain. Exposure does not count. Curiosity does not count. Shipped counts.

**Stop making the single-specialty ladder the only senior ladder.** The senior → staff → principal progression that rewards twenty years in one specialty still makes sense for a small number of real specialists. It stopped making sense as the default shape of a technical career.

*The cost:* legibility. Single-domain ladders are easy to calibrate across a large organization; M-shaped ones are not, and levelling conversations get longer and more contested. Pay that cost knowingly rather than discovering it in the first calibration cycle.

## If I am wrong

The bet has a real downside and I would rather name it than pretend otherwise.

If I am wrong, we spend a decade promoting confident generalists who have read about everything and been deep in nothing, the actual specialists conclude the ladder no longer rewards them and leave, and we find out what that cost the first time something breaks in a way no tool has seen before. That is not a small risk. Organizations are much better at destroying specialist career paths than at rebuilding them.

The hedge is not to pick one shape. It is to be deliberate about which roles want which — M-shaped where the work is judgment at the seams, deeply T-shaped where an operational failure has no acceptable blast radius. Organizations are notoriously bad at that kind of self-examination, which is exactly why it has to be decided rather than left to drift.

The observable that would change my mind is narrow and specific: if fluency and correctness converge — if the tools stop being confidently wrong — then the detection ability I have described has less work to do, and pure depth reasserts itself immediately. I do not expect that any time soon. But it is the thing I am watching, and if you want to argue with this essay, that is the productive place to do it.

## One more thing

The best technologists I have worked with in the last five years were all, without exception, M-shaped. None of them would have used the term, or comb-shaped either. They would have said they were curious, or interested in too many things. What they meant was that they could not sit still inside one domain, kept following problems across seams, and ended up with several depths because no single depth held their attention long enough.

Ten or twenty years ago that was an eccentricity, and it showed up on performance reviews as one.

Breadth is cheap now. Knowing which cheap answer is wrong is not — and nothing teaches that except having been deep, more than once.
