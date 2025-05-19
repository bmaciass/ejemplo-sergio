// 1. Referencias al DOM
const toggleBtn = document.getElementById('theme-toggle');
const rootEl = document.documentElement;

// 2. Carga del tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

// 3. Función de alternar tema
function switchTheme() {
  const isDark = document.body.classList.toggle('dark');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 4. Escuchar el clic
toggleBtn.addEventListener('click', switchTheme);
