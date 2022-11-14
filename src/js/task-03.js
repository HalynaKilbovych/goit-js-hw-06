const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector(".gallery")

// const makeGalleryListMarkup = image => { 
//   const {url, alt} = image; 
 
//   return `<li><img src="${url}" alt="${alt}"></li>`
//  }
 
//  const makeGalleryList = images
//  .map(makeGalleryListMarkup)
//  .join('');
 
 
//  galleryEl.insertAdjacentHTML("beforeend", makeGalleryList)
 

const galleryMarkup = images
  .map((image) => `<li class="list-item"><img src="${image.url}" alt="${image.alt}"></li>`)
  .join('');

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);


console.log(galleryMarkup);