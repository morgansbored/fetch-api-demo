const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchForm.addEventListener('submit', retrieve);

function retrieve(e) {
  if (input.value =='') {
    alert('You did not enter anything');
    return;
  }
  e.preventDefault();
  newsList.innerHTML = ''; 
  const apiKey = '992f2243f47b4aba8fb0f9e59557e325';
  let topic = input.value;
  let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

  fetch(url).then((res) => {
    return res.json();
  }).then((data) => {
    data.articles.forEach(article => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', article.url);
      a.setAttribute('target', '_blank');
      a.textContent = article.title;
      li.appendChild(a);
      newsList.appendChild(li);
    })
  }).catch((error) => {
    console.log(error);
  })
}
