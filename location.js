async function loadColleges() {
  let res = await fetch('data/colleges.json');
  let colleges = await res.json();
  const list = document.getElementById('collegeList');

  function render(data) {
    list.innerHTML = '';
    data.forEach(c => {
      let div = document.createElement('div');
      div.className = 'college-card';
      div.innerHTML = `<h3>${c.name}</h3><p>${c.courses.join(', ')}</p><small>${c.location}</small>`;
      list.appendChild(div);
    });
  }

  render(colleges);

  document.getElementById('searchCollege').addEventListener('input', function() {
    let q = this.value.toLowerCase();
    render(colleges.filter(c => c.name.toLowerCase().includes(q) || c.courses.join(',').toLowerCase().includes(q)));
  });
}
window.onload = loadColleges;
