# macfadem.github.io

Portfólio de Kevin Macfadem. Site estático em [Astro](https://astro.build), em português (`/`) e inglês (`/en/`).

## Rodar

```
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde fica cada coisa

- `src/i18n/pt.ts` e `src/i18n/en.ts`: todos os textos do site.
- `src/components/`: abertura (a linha), blocos interativos, estudos de caso.
- `src/styles/global.css`: cores, tipografia e layout.
- `public/media/`: vídeo e imagens.

## Publicação

O workflow `.github/workflows/deploy.yml` publica o `main` no GitHub Pages.
Em Settings → Pages, a fonte precisa estar em **GitHub Actions**.

A versão de 2023 (template Massively, HTML5 UP) está na tag `v2023`.
