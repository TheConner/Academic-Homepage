export class InterestCard extends HTMLElement {
  isFlipped = false;
  card;
  container;
  constructor() {
    super();
    this.isFlipped = false;
    const card = this.querySelector('.card');
    if (card) card.addEventListener('click', this.flipHandler);
    this.card = card;
    
    this.container = this.querySelector('.card-description-content-container');

    this.update()
  }

  flipHandler = (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      event.preventDefault();
      // Get the a href
      const href = event.target.href;

      // Open in new tab
      if (href != null) window.open(href, '_blank')?.focus();
      else console.error('a has no href :( i no like');
    } else if (event.target.tagName.toLowerCase() !== 'p') {
      // ignore the paragraphs, to allow text selection / copy paste
      this.isFlipped = !this.isFlipped;
    }
    this.update();
  }

  update = () => {
    if (this.card && this.container) {
      if (this.isFlipped) {
        this.card.classList.add('card-container-visible');
        this.container.classList.add('card-content-visible');
        this.container.classList.remove('card-content-invisible');
      } else {
        this.card.classList.remove('card-container-visible');
        this.container.classList.add('card-content-invisible');
        this.container.classList.remove('card-content-visible');
      }
    }
  }
}