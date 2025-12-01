// Kleines Script: Install-Prompt für unterstützte Browser
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'inline-block';
  installBtn.setAttribute('aria-hidden', 'false');
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.style.display = 'none';
  } else {
    alert('Installation nicht verfügbar. Du kannst die Seite manuell zum Homescreen hinzufügen.');
  }
});
