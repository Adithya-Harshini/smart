async function loadJobs() {
  let res = await fetch('data/jobs.json');
  let jobs = await res.json();
  const list = document.getElementById('jobList');

  function render(data) {
    list.innerHTML = '';
    data.forEach(j => {
      let div = document.createElement('div');
      div.className = 'job-card';
      div.innerHTML = `<h3>${j.title}</h3><p>${j.description}</p><small>${j.location} | ${j.qualification}</small>`;
      list.appendChild(div);
    });
  }

  render(jobs);

  document.getElementById('searchJob').addEventListener('input', function() {
    let q = this.value.toLowerCase();
    render(jobs.filter(j => j.title.toLowerCase().includes(q) || j.description.toLowerCase().includes(q)));
  });
}
window.onload = loadJobs;
