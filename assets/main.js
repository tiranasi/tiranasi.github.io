
(() => {
  const root = document.getElementById('tiranasi-homepage');
  const languageButton = root.querySelector('#hp-language-toggle');
  const languageStatus = root.querySelector('#hp-language-status');
  let language = 'en';
  languageButton.addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    root.lang = language === 'en' ? 'en' : 'zh-CN';
    document.documentElement.lang = root.lang;
    root.querySelectorAll('[data-en][data-zh]').forEach(element => {
      element.textContent = element.dataset[language];
    });
    languageButton.textContent = language === 'en' ? '中文' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换至英文');
    languageStatus.textContent = language === 'en' ? 'Homepage displayed in English.' : '已切换为中文。';
  });
  root.querySelectorAll('a[href^="#hp-"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = root.querySelector(link.getAttribute('href'));
      if (target) { event.preventDefault(); target.scrollIntoView({ block: 'start', behavior: 'auto' }); }
    });
  });
})();
