import type { Dict } from './pt';

export const en: Dict = {
  lang: 'en',
  path: '/en/',
  otherPath: '/',
  otherLabel: 'PT',
  otherAria: 'Ler em português',
  meta: {
    title: 'Kevin Macfadem · Software, AI and Medicine',
    description:
      'Portfolio of Kevin Macfadem: software and artificial intelligence with a medical background. Open-data pipelines, computer vision and web products.',
  },
  nav: { blocks: 'Projects', cases: 'Case studies', experience: 'Experience', about: 'About', contact: 'Contact' },
  skip: 'Skip to content',
  hero: {
    eyebrow: 'Software · Artificial intelligence · Medicine',
    title: ['From heartbeat', 'to model.'],
    lead: "I'm Kevin Macfadem, a Medicine (UFMG) and Computer Science student in Brazil. A single line connects what I study to what I build.",
    cta: 'See projects',
    cta2: 'GitHub',
    stops: [
      { k: '01 — Signal', t: 'Medicine at UFMG', href: '#sobre' },
      { k: '02 — Pipeline', t: 'Acompanhe Seu Candidato', href: '#caso-asc' },
      { k: '03 — Training curve', t: 'Chest X-ray CNN', href: '#caso-raiox' },
    ],
  },
  blocks: {
    kicker: 'Live pieces',
    title: 'Projects you can play with',
    lead: 'Each block is a piece of a real project. The details are in the case studies below.',
    xray: {
      tag: 'Chest X-ray · CNN',
      title: 'A model that reads chest X-rays',
      body: 'A convolutional network in TensorFlow that separates COVID-19, viral pneumonia and normal scans.',
      metricLabel: 'validation accuracy (v1, 2023)',
      metric: '94.4%',
      soon: 'In progress: v2, with an independent test set and per-class metrics, will run right here in your browser.',
      link: 'Read the case study',
    },
    cofrinho: {
      tag: 'Cofrinho · simulator',
      title: 'When can I afford each thing?',
      label: 'Saving per week',
      week: 'week',
      note: 'Sample products. The queue fills in order, as in the app.',
      items: [
        { name: 'Headphones', price: 600 },
        { name: 'Running shoes', price: 450 },
        { name: 'Monitor', price: 1100 },
      ],
    },
    asc: {
      tag: 'Acompanhe Seu Candidato · pipeline',
      title: 'From open data to the voter’s page',
      steps: [
        { k: 'Collect', t: 'Every day, a GitHub Actions job pulls floor votes from the open APIs of Brazil’s Chamber of Deputies and Senate.' },
        { k: 'Check', t: 'Each counted tally is compared with the official text of the vote. A mismatch becomes a warning, not data.' },
        { k: 'Store', t: 'Writes to Postgres are one transaction per file: all or nothing, and safe to repeat without duplicates.' },
        { k: 'Site', t: 'The Next.js site only reads public data. Who a person voted for stays on their own device.' },
      ],
    },
    moo: {
      tag: 'Mooluscos Filmes · live site',
      title: 'Website for a film production company',
      body: 'A single page with the reel up front, a photo gallery and contact.',
      link: 'Open the site',
    },
    reactify: {
      tag: 'Reactify',
      title: 'Playlists with the Spotify API',
      body: 'React and Tailwind, with Spotify login.',
      link: 'Code',
    },
    educa: {
      tag: 'EducaTech',
      title: 'Potência Tech + iFood hackathon',
      body: 'Front end of a learning platform, built by a team in a few days.',
      link: 'Code',
    },
  },
  cases: {
    kicker: 'Case studies',
    title: 'What I decided, and why',
    labels: { problem: 'Problem', decisions: 'Decisions', stack: 'Stack', status: 'Status' },
    items: [
      {
        id: 'caso-asc',
        n: '01',
        title: 'Acompanhe Seu Candidato',
        sub: 'A free public web app for Brazilian voters to follow how the deputies and senators they chose actually vote.',
        problem:
          'After an election, almost nobody knows what their candidate did. The data is public but scattered across the Chamber, the Senate and the electoral court, in different formats.',
        decisions: [
          'Official source first: everything comes from open-data APIs and carries a link to its origin.',
          'Neutrality as a code rule: same fields, same order and same tone for every politician, with no scores or rankings.',
          'Privacy by design: the voter’s list stays on their device; the server stores public data only.',
          'Development driven with AI agents (Claude Code): each task becomes a branch and a pull request that I review and merge.',
        ],
        stack: 'TypeScript · Next.js · PostgreSQL (Supabase, with RLS) · GitHub Actions · 24 test files',
        status: 'In progress, open source (MIT). The collection pipeline is done and checked against real data.',
        links: [{ label: 'Repository', href: 'https://github.com/macfadem/acompanhe-seu-candidato' }],
      },
      {
        id: 'caso-raiox',
        n: '02',
        title: 'Chest X-ray CNN',
        sub: 'An image classifier that separates COVID-19, viral pneumonia and normal scans.',
        problem:
          'I wanted to see, hands on, how far a simple network gets on a problem I know from the other side: the person reading the scan.',
        decisions: [
          'A small network trained from scratch: three convolutional layers (32, 64, 64) on 299×299 grayscale images.',
          'v1 result: 94.4% validation accuracy on a public Kaggle dataset.',
          'What v1 does not answer: there is no separate test set, the classes are imbalanced and the network memorizes part of the training data.',
          'Hence v2: train/validation/test split, per-class precision and recall, and Grad-CAM to see where the model looks.',
        ],
        stack: 'Python · TensorFlow · scikit-learn · NumPy · Matplotlib',
        status: 'v1 published (2023). v2 in progress, with an in-browser demo.',
        links: [{ label: 'Repository', href: 'https://github.com/macfadem/xray-covid-ml-classification' }],
      },
      {
        id: 'caso-cofrinho',
        n: '03',
        title: 'Cofrinho',
        sub: 'A wishlist with its own savings pot and a plan for when each item becomes affordable.',
        problem:
          'A wishlist spreadsheet does not answer the question that matters: if I buy this now, how much does everything else slip?',
        decisions: [
          'Runs only on your computer: no login, no cloud. Data lives in a SQLite file with automatic backups.',
          'A "before → after" simulator: try another weekly amount or price without saving, and see the difference in weeks.',
          'Setup for non-programmers: one command installs, creates the shortcut and opens the app.',
        ],
        stack: 'Next.js 16 · TypeScript · Tailwind · shadcn/ui · SQLite with Drizzle ORM · Vitest',
        status: 'In use. Code being prepared for open source.',
        links: [],
      },
    ],
  },
  experience: {
    kicker: 'Experience',
    title: 'Where I have worked',
    items: [
      {
        when: '2026 — now',
        role: 'AI training (freelance)',
        org: 'Outlier · DataAnnotation',
        body: 'I evaluate and compare generative AI model outputs, text and voice, in Portuguese and English, against quality rubrics.',
      },
      {
        when: 'Jun — Oct 2023',
        role: 'Software development intern',
        org: 'Tarken',
        body: 'Automated credit-analysis systems and scoring algorithms with Python, JavaScript and Retool, on PostgreSQL.',
      },
      {
        when: 'Apr — Oct 2023',
        role: 'Undergraduate volunteer',
        org: 'CI-IA · Center for Innovation in AI for Health (UFMG)',
        body: '',
      },
    ],
  },
  about: {
    kicker: 'About',
    title: 'Two degrees, one direction',
    body: [
      'I study Medicine at UFMG, now in clinical rotations, and Computer Science at Cruzeiro do Sul. It is not indecision: I want to build technology for healthcare knowing how it is used in practice.',
      'I have already combined both in a research project on post-COVID functional status and quality of life in Mariana, Brazil, where I structured the study database. The project received the university’s Academic Relevance distinction.',
    ],
    facts: [
      { k: 'Languages', v: 'Portuguese, fluent English, Spanish, basic German' },
      { k: 'Where', v: 'Belo Horizonte, Brazil · remote or hybrid' },
      { k: 'Tools', v: 'Python, TypeScript, SQL, TensorFlow, Next.js, PostgreSQL' },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s talk',
    body: 'I am looking for an internship in AI, data or software engineering.',
    email: 'Send an email',
  },
  footer: 'Built with Astro. This site’s code is on GitHub.',
};
