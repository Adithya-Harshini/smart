async function loadUpdates() {
  let res = await fetch('data/updates.json');
  let updates = await res.json();
  const list = document.getElementById('updatesList');
  
  function render(data) {
    list.innerHTML = '';
    data.forEach(u => {
      let div = document.createElement('div');
      div.className = 'update-card';
      div.innerHTML = `<h3>${u.title}</h3><p>${u.description}</p><small>${u.date}</small>`;
      list.appendChild(div);
    });
  }

  render(updates);

  document.getElementById('searchUpdate').addEventListener('input', function() {
    let q = this.value.toLowerCase();
    render(updates.filter(u => u.title.toLowerCase().includes(q) || u.description.toLowerCase().includes(q)));
  });
}
window.onload = loadUpdates;
