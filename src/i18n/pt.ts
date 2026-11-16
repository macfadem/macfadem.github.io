export const pt = {
  lang: 'pt-BR',
  path: '/',
  otherPath: '/en/',
  otherLabel: 'EN',
  otherAria: 'Read in English',
  meta: {
    title: 'Kevin Macfadem · Software, IA e Medicina',
    description:
      'Portfólio de Kevin Macfadem: software e inteligência artificial com formação médica. Pipelines de dados abertos, visão computacional e produtos web.',
  },
  nav: { blocks: 'Projetos', cases: 'Estudos de caso', experience: 'Experiência', about: 'Sobre', contact: 'Contato' },
  skip: 'Pular para o conteúdo',
  hero: {
    eyebrow: 'Software · Inteligência artificial · Medicina',
    title: ['Do batimento', 'ao modelo.'],
    lead: 'Sou Kevin Macfadem, estudante de Medicina (UFMG) e de Ciência da Computação. Uma linha só liga o que eu estudo ao que eu construo.',
    cta: 'Ver projetos',
    cta2: 'GitHub',
    stops: [
      { k: '01 — Sinal', t: 'Medicina na UFMG', href: '#sobre' },
      { k: '02 — Pipeline', t: 'Acompanhe Seu Candidato', href: '#caso-asc' },
      { k: '03 — Curva de treino', t: 'Raio-X de tórax com CNN', href: '#caso-raiox' },
    ],
  },
  blocks: {
    kicker: 'Peças vivas',
    title: 'Projetos em que dá para mexer',
    lead: 'Cada bloco é um pedaço de um projeto real. Os detalhes estão nos estudos de caso, logo abaixo.',
    xray: {
      tag: 'Raio-X de tórax · CNN',
      title: 'Um modelo que lê raio-X de tórax',
      body: 'Rede convolucional em TensorFlow que separa COVID-19, pneumonia viral e normal.',
      metricLabel: 'acurácia na validação (v1, 2023)',
      metric: '94,4%',
      soon: 'Em preparação: a v2, com teste independente e métricas por classe, vai rodar aqui, no seu navegador.',
      link: 'Ver o estudo de caso',
    },
    cofrinho: {
      tag: 'Cofrinho · simulador',
      title: 'Quando dá para comprar cada coisa?',
      label: 'Guardando por semana',
      week: 'semana',
      note: 'Produtos de exemplo. A fila enche na ordem, como no app.',
      items: [
        { name: 'Fone de ouvido', price: 600 },
        { name: 'Tênis de corrida', price: 450 },
        { name: 'Monitor', price: 1100 },
      ],
    },
    asc: {
      tag: 'Acompanhe Seu Candidato · pipeline',
      title: 'Do dado aberto à página do eleitor',
      steps: [
        { k: 'Coleta', t: 'Todo dia, um job no GitHub Actions busca as votações de plenário nas APIs abertas da Câmara e do Senado.' },
        { k: 'Conferência', t: 'Cada placar contado é comparado com o texto oficial da votação. Divergência vira aviso, não dado.' },
        { k: 'Banco', t: 'A gravação no Postgres é uma transação por arquivo: tudo ou nada, e pode repetir sem duplicar.' },
        { k: 'Site', t: 'O site em Next.js só lê dados públicos. Em quem a pessoa votou fica no aparelho dela.' },
      ],
    },
    moo: {
      tag: 'Mooluscos Filmes · site no ar',
      title: 'Site para uma produtora de vídeo',
      body: 'Página única com o reel em destaque, galeria de fotos e contato.',
      link: 'Abrir o site',
    },
    reactify: {
      tag: 'Reactify',
      title: 'Playlists com a API do Spotify',
      body: 'React e Tailwind, com login pelo Spotify.',
      link: 'Código',
    },
    educa: {
      tag: 'EducaTech',
      title: 'Hackathon Potência Tech + iFood',
      body: 'Front-end de uma plataforma de ensino, feito em equipe em poucos dias.',
      link: 'Código',
    },
  },
  cases: {
    kicker: 'Estudos de caso',
    title: 'O que eu decidi, e por quê',
    labels: { problem: 'Problema', decisions: 'Decisões', stack: 'Stack', status: 'Estado' },
    items: [
      {
        id: 'caso-asc',
        n: '01',
        title: 'Acompanhe Seu Candidato',
        sub: 'Web app público e gratuito para o eleitor acompanhar como votam os deputados e senadores que escolheu.',
        problem:
          'Depois da eleição, quase ninguém sabe o que seu candidato fez. Os dados são públicos, mas estão espalhados entre Câmara, Senado e TSE, em formatos diferentes.',
        decisions: [
          'Fonte oficial primeiro: tudo vem das APIs de dados abertos e leva o link de origem.',
          'Neutralidade como regra de código: mesmos campos, mesma ordem e mesmo tom para todo parlamentar, sem nota nem ranking.',
          'Privacidade por desenho: a colinha do eleitor fica só no aparelho; o servidor guarda apenas dados públicos.',
          'Desenvolvimento conduzido com agentes de IA (Claude Code): cada tarefa vira branch e pull request, e eu reviso e junto.',
        ],
        stack: 'TypeScript · Next.js · PostgreSQL (Supabase, com RLS) · GitHub Actions · 24 arquivos de teste',
        status: 'Em construção, com código aberto (MIT). Pipeline de coleta pronto e conferido com dados reais.',
        links: [{ label: 'Repositório', href: 'https://github.com/macfadem/acompanhe-seu-candidato' }],
      },
      {
        id: 'caso-raiox',
        n: '02',
        title: 'Raio-X de tórax com CNN',
        sub: 'Classificador de imagens que separa COVID-19, pneumonia viral e exames normais.',
        problem:
          'Quis entender, na prática, até onde uma rede simples chega num problema que eu conheço do outro lado: o de quem olha o exame.',
        decisions: [
          'Rede pequena, treinada do zero: três camadas convolucionais (32, 64, 64) sobre imagens de 299×299 em tons de cinza.',
          'Resultado da v1: 94,4% de acurácia na validação, num conjunto público do Kaggle.',
          'O que a v1 não responde: não há conjunto de teste separado, as classes são desbalanceadas e a rede decora parte do treino.',
          'Por isso a v2: divisão treino/validação/teste, precisão e recall por classe, Grad-CAM para ver onde o modelo olha.',
        ],
        stack: 'Python · TensorFlow · scikit-learn · NumPy · Matplotlib',
        status: 'v1 publicada (2023). v2 em preparação, com demo no navegador.',
        links: [{ label: 'Repositório', href: 'https://github.com/macfadem/xray-covid-ml-classification' }],
      },
      {
        id: 'caso-cofrinho',
        n: '03',
        title: 'Cofrinho',
        sub: 'Lista de desejos com um caixa próprio e um plano de quando dá para comprar cada coisa.',
        problem:
          'Planilha de desejos não responde à pergunta que importa: se eu comprar isto agora, quanto atrasa o resto?',
        decisions: [
          'Roda só no computador: sem login e sem nuvem. Os dados ficam num arquivo SQLite, com backup automático.',
          'Simulador "antes → depois": testa outro aporte ou outro preço sem salvar nada, e mostra a diferença em semanas.',
          'Instalação para quem não programa: um comando instala, cria o atalho e abre o app.',
        ],
        stack: 'Next.js 16 · TypeScript · Tailwind · shadcn/ui · SQLite com Drizzle ORM · Vitest',
        status: 'Em uso. Código em preparação para ser aberto.',
        links: [],
      },
    ],
  },
  experience: {
    kicker: 'Experiência',
    title: 'Por onde passei',
    items: [
      {
        when: '2026 — hoje',
        role: 'Treinamento de IA (freelance)',
        org: 'Outlier · DataAnnotation',
        body: 'Avalio e comparo respostas de modelos de IA generativa, em texto e voz, em português e inglês, com base em rubricas de qualidade.',
      },
      {
        when: 'jun — out 2023',
        role: 'Estagiário de desenvolvimento',
        org: 'Tarken',
        body: 'Sistemas automatizados de análise de crédito e algoritmos de pontuação com Python, JavaScript e Retool, sobre PostgreSQL.',
      },
      {
        when: 'abr — out 2023',
        role: 'Voluntário de graduação',
        org: 'CI-IA · Centro de Inovação em IA para a Saúde (UFMG)',
        body: '',
      },
    ],
  },
  about: {
    kicker: 'Sobre',
    title: 'Dois cursos, uma direção',
    body: [
      'Curso Medicina na UFMG, hoje no internato, e Ciência da Computação na Cruzeiro do Sul. Não é indecisão: quero construir tecnologia para a saúde sabendo como ela é usada na prática.',
      'Já juntei as duas áreas numa pesquisa sobre funcionalidade e qualidade de vida pós-COVID em Mariana (MG), em que estruturei o banco de dados do estudo. O projeto recebeu a distinção de Relevância Acadêmica da universidade.',
    ],
    facts: [
      { k: 'Idiomas', v: 'Português, inglês fluente, espanhol, alemão básico' },
      { k: 'Onde', v: 'Belo Horizonte, MG · remoto ou híbrido' },
      { k: 'Ferramentas', v: 'Python, TypeScript, SQL, TensorFlow, Next.js, PostgreSQL' },
    ],
  },
  contact: {
    kicker: 'Contato',
    title: 'Vamos conversar',
    body: 'Procuro estágio em IA, dados ou engenharia de software.',
    email: 'Escrever um e-mail',
  },
  footer: 'Feito com Astro. Código deste site no GitHub.',
};

export type Dict = typeof pt;
