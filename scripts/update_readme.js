const fs = require('fs');

const username = process.env.GITHUB_USERNAME || 'alekus2'; // seu user
const topN = parseInt(process.env.TOP_N || '6', 10);       // quantos mostrar
const sortBy = process.env.SORT_BY || 'stargazers_count'; // 'stargazers_count' ou 'pushed_at'

async function main() {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  if (!res.ok) {
    console.error('Erro ao buscar repositórios', res.status, await res.text());
    process.exit(1);
  }
  const repos = await res.json();

  // ordenar por critério (stars ou data de push)
  repos.sort((a, b) => {
    if (sortBy === 'pushed_at') return new Date(b.pushed_at) - new Date(a.pushed_at);
    return b.stargazers_count - a.stargazers_count;
  });

  const top = repos.slice(0, topN);
  const mdList = top.map(r => `- [**${r.name}**](${r.html_url}) — ${r.description || ''} ⭐ ${r.stargazers_count}`).join('\n');

  const readmePath = 'README.md';
  const readme = fs.readFileSync(readmePath, 'utf8');
  const newReadme = readme.replace(/<!-- TOP_REPOS_START -->([\s\S]*?)<!-- TOP_REPOS_END -->/m,
    `<!-- TOP_REPOS_START -->\n${mdList}\n<!-- TOP_REPOS_END -->`);
  fs.writeFileSync(readmePath, newReadme, 'utf8');
  console.log('README atualizado com sucesso.');
}

main().catch(err => { console.error(err); process.exit(1); });