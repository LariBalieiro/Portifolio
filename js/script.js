// Monitora o scroll da página e ativa o indicador visual correto no Dock inferior
const dockItems = document.querySelectorAll('.dock-item');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 200;
  
  dockItems.forEach(item => {
    let section = document.querySelector(item.hash);
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      dockItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("marqueeTrack");
  
  const logos = [
    "html5-original", "css3-original", "javascript-original", 
    "typescript-original", "react-original", "sass-original",
    "tailwindcss-original", "bootstrap-original", "jquery-original",
    "nodejs-original", "php-original", "laravel-original",
    "csharp-original", "sqlite-original", "mysql-original",
    "postgresql-original", "docker-original"
  ];

  // Gera os elementos HTML dos logos
  track.innerHTML = logos.map(logo => `
    <div class="tech-logo-item" title="${logo.split('-')[0].toUpperCase()}">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/${logo.split('-')[0]}/${logo}.svg" alt="${logo}">
    </div>
  `).join('');

  // Duplica para criar o loop infinito
  track.innerHTML += track.innerHTML;
});
