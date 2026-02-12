<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>README — Perfil</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#0f1724; /* deep navy */
      --card:#0b1220;
      --muted:#94a3b8;
      --accent:#06b6d4; /* teal */
      --glass: rgba(255,255,255,0.04);
      color-scheme: dark;
      font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    *{box-sizing:border-box}
    body{margin:0;background:linear-gradient(180deg,#071026 0%, #071629 45%, #071026 100%);color:#e6eef8;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:40px}
    .container{width:100%;max-width:920px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:18px;padding:28px;box-shadow:0 10px 30px rgba(2,6,23,0.6);border:1px solid rgba(255,255,255,0.03)}
    header{display:flex;gap:18px;align-items:center}
    .avatar{width:84px;height:84px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#4f46e5);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:28px;color:#012;} 
    h1{margin:0;font-size:20px}
    p.lead{margin:6px 0 0;color:var(--muted);font-size:14px}

    .row{display:grid;grid-template-columns:1fr 340px;gap:24px;margin-top:20px}
    .card{background:var(--card);padding:18px;border-radius:12px;border:1px solid rgba(255,255,255,0.02)}

    .about{line-height:1.5;color:#dbeafe}

    .skills-grid{display:flex;gap:12px;flex-wrap:wrap;margin-top:12px}
    .skill{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:var(--glass);backdrop-filter: blur(6px);border:1px solid rgba(255,255,255,0.02);transition:transform .18s ease,box-shadow .18s}
    .skill:hover{transform:translateY(-6px);box-shadow:0 8px 30px rgba(3,7,18,0.6)}
    .skill img{width:36px;height:36px;object-fit:contain}
    .skill span{font-weight:600;font-size:14px;color:#e6eef8}

    .linkedin{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#7c3aed);color:#021; font-weight:700;text-decoration:none;border:1px solid rgba(255,255,255,0.06)}
    .linkedin svg{width:18px;height:18px;filter:brightness(0.98)}

    .stats{display:flex;gap:12px;margin-top:12px}
    .stat{flex:1;background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);padding:10px;border-radius:10px;text-align:center}
    .stat b{display:block;font-size:18px}
    .stat span{color:var(--muted);font-size:13px}

    footer{margin-top:18px;color:var(--muted);font-size:13px;text-align:center}

    /* responsive */
    @media (max-width:880px){
      .row{grid-template-columns:1fr;}
      .container{padding:18px}
    }
  </style>
</head>
<body>
  <div class="container" role="main">
    <header>
      <div class="avatar">YOU</div>
      <div>
        <h1>Olá — Eu sou um Assistente Administrativo focado em tecnologia</h1>
        <p class="lead">Estudante de Engenharia de Software — soluções práticas, automação e desenvolvimento web.</p>
      </div>
    </header>

    <div class="row">
      <section class="card">
        <h3>Sobre mim</h3>
        <p class="about">Tenho experiência em tarefas administrativas e estou direcionando minha carreira para a área de tecnologia, com foco em automação e desenvolvimento. Atualmente estudo Engenharia de Software e trabalho com soluções práticas para otimizar processos.</p>

        <div style="margin-top:14px">
          <h4>Conhecimentos</h4>
          <div class="skills-grid" aria-live="polite">

            <div class="skill" title="Python">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python logo" loading="lazy">
              <span>Python</span>
            </div>

            <div class="skill" title="JavaScript">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" loading="lazy">
              <span>JavaScript</span>
            </div>

            <div class="skill" title="HTML5">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo" loading="lazy">
              <span>HTML5</span>
            </div>

            <div class="skill" title="CSS3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo" loading="lazy">
              <span>CSS3</span>
            </div>

          </div>
        </div>

        <div class="stats">
          <div class="stat">
            <b>+2 anos</b>
            <span>Experiência relevante</span>
          </div>
          <div class="stat">
            <b>Projetos</b>
            <span>Automação & Web</span>
          </div>
          <div class="stat">
            <b>Aprendizado</b>
            <span>Contínuo</span>
          </div>
        </div>
      </section>

      <aside class="card">
        <h4>Conecte-se</h4>
        <p style="margin:6px 0 14px;color:var(--muted)">Clique abaixo para visitar meu LinkedIn:</p>
        <!-- Substitua o href pelo seu link real do LinkedIn -->
        <a class="linkedin" href="https://www.linkedin.com/in/SEU_LINKEDIN_AQUI" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H8.351V9h3.413v1.561h.049c.476-.9 1.637-1.852 3.371-1.852 3.606 0 4.272 2.374 4.272 5.458v6.285zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM7.114 20.452H3.558V9h3.556v11.452z" fill="#021"/></svg>
          Ir para LinkedIn
        </a>

        <div style="margin-top:12px;color:var(--muted);font-size:13px">
          Dica: substitua <code>SEU_LINKEDIN_AQUI</code> pelo seu identificador do LinkedIn.
        </div>

        <div style="margin-top:18px;text-align:center;">
          <small style="color:var(--muted)">Este arquivo é HTML — para usar no GitHub como README.md converta para Markdown ou hospede como página GitHub Pages.</small>
        </div>
      </aside>
    </div>

    <footer>
      Feito com ❤️ — personalize este template e adicione links para projetos e contato.
    </footer>
  </div>
</body>
</html>
