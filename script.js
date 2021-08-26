const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const grid = document.querySelector('.grid');
const template = document.querySelector('template');

// Show 12 skeleton loading cards while we wait 
for (let i = 0; i < 12; i++) {
  const clone = template.content.cloneNode(true);
  grid.append(clone);
};

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
