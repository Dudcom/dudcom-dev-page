---
title: "Thoughts on DEF CON Finals 2026"
description: "Thoughts on tooling, competition design, and the future of CTFs after DEF CON Finals 2026."
date: 2026-08-13
authors:
  - dudcom
tags:
  - ctf-dead
  - def-con
---

I felt an insatiable need to ramble about how DEF CON Finals went, so I finally forced myself to make a little blog for myself.

## A bit about me

I am one of the captains of Squid Proxy Lovers. We have been doing CTFs since 2023, although I mostly got involved with the team in 2024. Before that, I had done CTFs here and there in high school. Our general age range is around 18-21, with an estimated average of about 19, if I had to guess. I mention this mostly to point out that we are something adjacent to the "new kids on the block."

I played DEF CON Finals with SDCL (SuperDiceCodeLovers). I was one of the team admins and tooling leads, and I played both finals and quals for the entirety. Anything I say is entirely my own opinion, and not anyone else's on the team. I had played DEF CON Finals and Quals, as well as other difficult, top-tier CTFs (Google CTF, PlaidCTF, HITCON, and SECCON), before 2026. I am not totally clueless about the broader decline of CTFing and the scene around it. This blog is partly meant to give people some clarity about how DEF CON CTF looked from a player's standpoint, and whether top teams are simply throwing AI at problems and "giving up." I would rather present the details, let you draw your own conclusions, and share my own along the way.

Here is the breakdown for this blog:
- Tooling Before the CTF
- Tooling During the CTF
- Challenges During the CTF
- What could be better
- Why do we CTF?
- Are CTFs Pay to Win?

## Tooling Before the CTF

We started building tools more or less immediately after DEF CON CTF ended in 2025. We began working mostly on AI tooling, as everyone probably did after the live CTF went the way it did.

The very early draft of this system was [Squid Agent](https://spl.team/blog/squid-agent-csaw/). It took maybe 1,000 person-hours, a lot of planning, and a lot of design work to get to that point. Around 10 people on our team helped build it. Mind you, it is totally useless now unless you can only use old models!

We later evolved this into a system that actually worked. It is closer to what most industry bug scanners look like, with some key differences. The overall system performed quite well on normal A/D CTFs, though as you would imagine, it was not the easiest thing to get working perfectly for DEF CON Finals. Additionally, we created a custom thrower that integrated with the system and has been tested across several A/D competitions, so we knew it was very stable and capable of handling DEF CON.

Beyond that, we had perhaps 5-7 other codebases, with somewhere between 50 and 300 person-hours invested in each. These codebases were less tested, but they were also more standalone, so they did not require an entire A/D CTF network to be running in order to work properly. I hope some of these tools eventually become public, but I cannot make any real promises. There is a lot of non-AI tooling in there that is useful.

The point of this is not really to brag. It is more to showcase how much energy and effort went into this CTF on our end. Part of what AI allows, and perhaps forces, you to do is create systems and tools much earlier. The ability to engineer systems is now limited mostly by your creativity, your knowledge of the competition, and your energy to make something.

Challenges that require long-term engineering and problem-solving are a good way to adapt to this new era of CTFing. For my fellow Americans, I would point to ECTF. It is barely a CTF in the traditional sense, but it is a good example of how a long-term project can take the form of a CTF or something adjacent to one.

## Tooling During the Competition

The part of the actual CTF that I enjoyed most was building tooling on the fly. It is like a hackathon where things actually need to work, rather than just meeting a useless sales pitch.

If your tooling is sloped, you are probably going to spend hours testing it and thinking through edge cases before you can trust it. It is much easier to make new tools in this day and age than it was before, but that adds to the enjoyment. After you make a few standard tools, you need to start thinking about what will actually be useful.

I imagine some really interesting innovations were made across all teams this year, and hopefully many of them will eventually see the light of day. Our team came up with quite a few useful tools during the CTF, and the overall planning and technical process was very enjoyable. Working with 10-15 people at 4 a.m. to make something cool as hell is a lot of fun.

## Challenges During the CTF

The CTF itself was not horrible. The challenges were generally good quality, but if we are being brutally honest, BBB did not do much to prevent the competition from becoming a bit of a slop fest.

The A/D challenges were good quality on paper. Most of them were designed in a way that made it impossible to fully stop every exploit via patching, which is a good thing: it gives attackers room to keep experimenting and keeps the challenge alive. Most of the exploits were not especially difficult for AI to find, although finding them still took time, so there was a good bit of delay before all teams found all of them. Back to the Future was an exception, with what was effectively an infinite number of exploits.

The behavior of the defensive patches was a double-edged sword. Since there was rarely one clean way to fix every bug, defense became a game of whack-a-mole. That does not work particularly well when AI can move so quickly that the only practical way to keep up is to use more AI. Even then, most teams eventually gave up on defending certain challenges.

KoTH was even worse in this respect. Since being first mattered so much for scoring, teams were strongly incentivized to maximize the speed at which they could develop and deploy exploits. Once you reached first place, the game became an infinite hill-climb to stay there. In practice, that meant throwing as much AI at the problem as possible to find increasingly marginal improvements if all major exploits were already found. Once a team's slop farm gained a lead, it could keep improving slightly faster than everyone else, which only widened the gap. This behavior was sadly unavoidable because KoTH scoring was so heavily weighted toward first place. Consistently winning KoTH was ultimately the main thing that determined who won the finals.

Beyond removing the one thing that is relatively easy to make anti-AI, the live CTF, it felt like BBB made no real attempt to do anything particularly novel or interesting. The only major new aspect was the rebate system. It was interesting, but its practical effect was mostly to require teams to encrypt their exploits, maintain a test net, and build systems for analyzing network traffic and automating rebates against other teams.

There are some cool ideas in that system, but they were not enough on their own.

## What could be better

A huge part of the problem with CTFing and challenge design is that the primary scoring mechanism has always been speed. It does not matter how you get a flag: a flag is a flag. For the vast majority of challenges, that is still how the game works.

The problem BBB has continued to perpetuate is that every challenge eventually devolves into a speed challenge: how fast can you get your A/D exploits up, how fast can you get your KoTH exploits up, and how fast can you bring up defensive patches?

The solution is not to remove speed entirely, but it is untenable to pretend that humans can compete with AI on speed now. The fact that ticks happen every 3-5 minutes makes this even worse. Having such a short tick interval is not unique to DEF CON, but regardless, it is a problem in my opinion. By the time a human understands a problem, AI models have often already identified it and built a working PoC, perhaps with less depth than a human, and started hill-climbing from that initial draft. Even if those early jumps are sloppy or imperfect, they still score. A human who spends 30 minutes carefully thinking through a problem loses the initial ticks to an AI slop machine that has been running since the first five minutes.

If I only had, say, three ticks for an entire day on a challenge, I would be forced to put far more energy into every single tick. That would also prevent challenges from reaching a point where humans and agents cannot keep up with the rate of change. During MapleChat, no matter how quickly we worked, new exploits were introduced so rapidly that defensive patching became pointless. Most teams reached that point, and the entire scoreboard turned red and orange. In all fairness, this is just speculation, but I do think slowing down the overall pace of the competition would let human ingenuity matter more than token maxing.

I would also like to see more ways to score the quality of a solve script rather than only the speed at which it is written. That would not remove the pressure of AI, but it would make it far less overwhelming and give careful engineering more room to matter.

Finally, having parts of a CTF where AI is limited or not allowed is realistic. I do not see why we cannot have floor-only challenges with AI bans, or something adjacent to that. This is DEF CON Finals after all. If we are going to throw everything at players, this is the best place to do it.

## Why do we CTF?

Regardless of what people think about CTFing or the state of CTFs, I know almost everyone in SPL had a lot of fun. We worked ourselves to the bone during the CTF and before it. At least for me, I cannot think of a better way to have spent that time.

Even if the kind of CTFing we knew becomes limited to competitions where AI is not allowed, I have to ask everyone in the community: do you still have fun? If so, what is stopping you from putting in the energy to keep this alive?

For me, this DEF CON has made me more excited than ever to keep CTFing and, most of all, keep SPL alive. I hope others in the community have had the same experience, and that we can keep moving toward an elegant solution that lets people have fun, showcase their skills, and stay relevant to the current world of computer science, engineering, and security.

## Are CTFs Pay to Win?

One big question the community has been discussing is whether CTFs have become pay-to-win and whether it is now impossible to compete without AI. My opinion is mixed. For most smaller CTFs, we have sadly reached levels of pay-to-win that I have never seen before. For DEF CON Finals, however, not much has changed.

Teams have always had significant financial requirements just to function, including travel, infrastructure, and housing. Our total AI spending was around \$3,000-\$4,000 over the course of a year, including R&D. During DEF CON itself, we spent around \$1,000 on extra AI subscriptions. For context, our cloud bill was \$3,000, as was the cost of each of the two Airbnbs we needed for the competition.

Most people on our team also had a personal 20x account for either Claude or Codex, and some had both. From what I have heard, a good number of teams were simply assuming that their members already had access to an account. Admittedly, this is a privilege we have thanks to being a mostly American/Korean team with an average age in the mid-20s, where most people have jobs or internships and can afford these costs. Regarding DEF CON, this seems fairly standard and reasonable. Most teams are probably in a similar position, so the playing field does not seem too uneven in that regard.
