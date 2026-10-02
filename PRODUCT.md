# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people living in Cappadocia (Nevşehir, Göreme, Ürgüp, Uçhisar and around) who want to run, or start running, with others. Many are not athletes and some have never run. They reach the site mostly from Instagram on a phone, and the job is to decide "can I join this, and how?" and then fill in the join form.

## Product Purpose

Cappadocia Run Club is the first running club in Cappadocia, founded in 2026. It meets every Sunday for an open social run through Cappadocia's valleys. The website exists to turn curious locals into members: success is a completed application on `/bize-katilin`.

## Positioning

A social run club, not a training club. No finish line, no race, no pace pressure: "Tempon senin, yolculuk bizimle." The run ends with a warm drink together. The setting (Rose Valley and the region's routes) is something no other club can claim. The founders are friends who met on athletics tracks as children.

## Operating Context

- Weekly Sunday run, open to all levels. Walking is welcome.
- Meeting point: Rose Valley, Cappadocia (38.651405, 34.836097).
- After the run: sitting together over a hot drink.
- Community lives on Instagram: @cappadociarunclub. Contact: cappadociarunclub@gmail.com.
- Joining: a short form in 3 steps (`/bize-katilin`, ContactForm component), plus a KVKK disclosure page (`/aydinlatma-metni`).

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind v4. No own backend; the join form posts to Web3Forms (with honeypot and a 3-minute client-side cooldown). Keep that behavior when restyling.
- Meeting points vary by week (event posters show Rose Valley, Avanos riverside, the university track); the weekly route and time are announced on Instagram.
- Pages: Home, Hakkımızda, Program, Galeri, Bize Katılın, Aydınlatma Metni (KVKK).
- All copy is Turkish.
- Undecided: exact Sunday start time is not stated anywhere on the site. Do not invent it.

## Brand Commitments

- Name: Cappadocia Run Club.
- Slogan: "Biz yolları değil, Kapadokya’yı koşarız." with the English line "We don’t run roads. We run Cappadocia." beneath it (chosen by the user on 2026-10-01; replaces "İyi ki Cappadocia").
- Everything else (colors, logo treatment, type) may be redesigned. Logo files are in `public/images/` (logo.svg, logo.png, header-logo.png).
- Voice: warm, informal Turkish, second-person "sen".

## Evidence on Hand

- Real photos: `public/images/activities/act1-3.jpeg`, `public/images/gallery/1-8.JPG`, `public/images/hero-background.jpg`.
- Real copy: the story (StorySection), vision and mission (AboutSection), the three run principles and activity list (FeaturesSection).
- No testimonials, member counts, press, or partner brands exist. Do not fabricate them.

## Product Principles

1. Joining should feel effortless. Every page leads toward the Sunday run and the form.
2. Belonging before performance. Never imply speed, fitness levels or competition.
3. The place is the product. Cappadocia's landscape is the club's distinct advantage.
4. Honest and small. A new club; show what's real, not what's aspirational.
