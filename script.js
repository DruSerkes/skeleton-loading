const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const grid = document.querySelector('.grid');
const template = document.querySelector('template');

fetch(POSTS_URL)
  .then(res => res.json())
  .then(posts => {
    grid.innerHTML = '';
    posts.forEach(post => {
      const clone = template.content.cloneNode(true);
      clone.querySelector('.title').innerText = post.title;
      clone.querySelector('.body').innerText = post.body;
      grid.append(clone);
    });
  });
