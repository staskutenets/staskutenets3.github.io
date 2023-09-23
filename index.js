function toggleMenu() {
    var menu = document.getElementById('menu');
    var icon =document.getElementById('btn')
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
      menu.classList.add('open');
      icon.style.backgroundColor = '#ecfa9b33'
    } else {
      menu.style.display = 'none';
      menu.classList.remove('open');
      icon.style.backgroundColor = '#00000000'
    }
  }
  
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var topOffset = section.offsetTop - 45; // Враховуємо висоту меню
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  }