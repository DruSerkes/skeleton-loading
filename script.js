const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const grid = document.querySelector('.grid');
const template = document.querySelector('template');

// Show 12 skeleton loading cards while we wait 
for (let i = 0; i < 12; i++) {
  const clone = template.content.cloneNode(true);
  grid.append(clone);
};

const removeSkeletonClasses = (el) => el.classList.remove('skeleton', 'skeleton-text');

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

    // remove skeleton animation to optimize
    const skeletonElements = document.querySelectorAll('.skeleton');
    skeletonElements.forEach(el => el.addEventListener('load', () => removeSkeletonClasses(el)));
  });