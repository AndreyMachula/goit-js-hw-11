export default function getRefs() {
  return {
    searchForm: document.getElementById('search-form'),
    searchQuery: document.querySelector('[name="searchQuery"]'),
    submitBtn: document.querySelector('[type="submit"]'),
    imagesCardsGallery: document.querySelector('.gallery'),
  };   
};