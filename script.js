let currentTheme = localStorage.getItem('crypto_theme') || 'dark';

document.addEventListener('DOMContentLoaded', function () {
    startApp();
});

function startApp() {
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    console.log('CryptoSpectra initialized');
}
