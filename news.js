async function loadNews() {
  let res = await fetch('data/news.json');
  let news = await res.json();
  const list = document.getElementById('newsList');

  function render(data) {
    list.innerHTML = '';
    data.forEach(n => {
      let div = document.createElement('div');
      div.className = 'news-card';
      div.innerHTML = `<h3>${n.title}</h3><p>${n.description}</p><small>${n.date}</small>`;
      list.appendChild(div);
    });
  }

  render(news);

  document.getElementById('searchNews').addEventListener('input', function() {
    let q = this.value.toLowerCase();
    render(news.filter(n => n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q)));
  });
}
window.onload = loadNews;
