const body = document.body;
const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const form = document.getElementById('contactForm');
const error = document.getElementById('formError');
const storedTheme = localStorage.getItem('theme');
const icons = {
    light: 'images/images.png',
    dark: 'images/p.png'
};
const setTheme = mode => {
    body.classList.toggle('dark', mode === 'dark');
    icon.src = icons[mode === 'dark' ? 'dark' : 'light'];
    toggle.setAttribute('aria-label', mode === 'dark' ? 'Switch to light' : 'Switch to dark');
};
const initialMode = storedTheme === 'dark' ? 'dark' : 'light';
setTheme(initialMode);
toggle.addEventListener('click', () => {
    const mode = body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(mode);
    localStorage.setItem('theme', mode);
});
form.addEventListener('submit', e => {
    e.preventDefault();
    error.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailOk = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(email);
    if (name.length < 2) {
        error.textContent = 'Please enter your name.';
        return;
    }
    if (!emailOk) {
        error.textContent = 'Please enter a valid email.';
        return;
    }
    if (message.length < 10) {
        error.textContent = 'Message should be at least 10 characters.';
        return;
    }
    error.textContent = 'Thanks, I will reach out soon.';
    form.reset();
});

