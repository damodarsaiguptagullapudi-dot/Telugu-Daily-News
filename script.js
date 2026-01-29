// Highlight all author names red + bold
const authors = document.querySelectorAll('.meta span.author');
authors.forEach(a => {
  a.style.color = 'red';
  a.style.fontWeight = 'bold';
});

// Optional: click on article to alert title (demo test)
const articles = document.querySelectorAll('.news-card h2');
articles.forEach(article => {
  article.addEventListener('click', () => {
    alert("You clicked on: " + article.textContent);
  });
});
