window.onload = function() {
  let user = JSON.parse(localStorage.getItem('currentUser'));
  if(user) {
    let nameEl = document.getElementById('studentName');
    if(nameEl) nameEl.textContent = user.name;
  }

  // Language Dropdowns
  let langSelects = document.querySelectorAll('#langSelect, #profileLang');
  langSelects.forEach(select => {
    select.addEventListener('change', function() {
      alert('Language changed to ' + this.options[this.selectedIndex].text);
    });
  });
};
