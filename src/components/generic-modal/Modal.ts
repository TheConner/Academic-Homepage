import modalStyles from './GenericModal.scss?inline'

class ModalElement extends HTMLElement {
  private static DATA_VISIBLE_ATTR = 'data-visible';
  private visibility = false;
  private shadow: ShadowRoot;
  private modal?: HTMLDivElement;
  
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});

    const styles = document.createElement('style');
    styles.setAttribute('type', 'text/css');
    styles.appendChild(document.createTextNode(modalStyles));
    this.shadow.appendChild(styles);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log(mutation);
        if (mutation.type === "attributes" 
          && mutation.attributeName === ModalElement.DATA_VISIBLE_ATTR) {
          this.setVisibility(this.getAttribute('data-visible') == 'true');
          this.onUpdate();
        }
      })
    });
    observer.observe(this, {
      attributes: true
    });    
  }

  onButtonClick = (event: Event) => {
    this.setAttribute(ModalElement.DATA_VISIBLE_ATTR, this.visibility ? 'false' : 'true');
  }

  setVisibility = (value: boolean) => {
    this.visibility = value;
  }

  onUpdate = () => {
    if (this.visibility) this.showModal()
    else this.hideModal()
  }

  showModal = () => {
    const modalRoot = document.createElement('div')
    modalRoot.classList.add('modal')

    const layoutWrapper = document.createElement('layout-wrapper');
    layoutWrapper.classList.add('modal-layout-outer')
    modalRoot.appendChild(layoutWrapper);

    const content = document.createElement('div')
    content.classList.add('modal-content')
    layoutWrapper.appendChild(content);

    const footer = document.createElement('footer')
    footer.classList.add('modal-footer')
    const footerSlot = document.createElement('slot')
    footerSlot.name = 'footer'
    footer.appendChild(footerSlot)

    const header = this.buildHeader();

    const body = document.createElement('section')
    body.classList.add('modal-body')

    const contentSlot = document.createElement('slot')
    contentSlot.name = 'content'
    body.appendChild(contentSlot)
    
    content.append(
      header,
      body,
      footer
    )

    this.modal = modalRoot;

    this.shadow.appendChild(modalRoot)
  }

  hideModal = () => {
    if (this.modal) this.modal.remove()
  }

  buildHeader = (): HTMLElement => {
    const header = document.createElement('header')
    header.classList.add('modal-header')
    
    const title = document.createElement('h3')
    title.classList.add('modal-title')
    
    const titleSlot = document.createElement('slot')
    titleSlot.name = 'title'
    title.appendChild(titleSlot)

    const close = document.createElement('button')
    close.classList.add('close-button')
    close.innerHTML = `<svg aria-hidden="true" class="close-graphic" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`
    close.onclick = this.onButtonClick

    header.append(title, close)
    
    return header;
  }
}

export default ModalElement;