import extraStyles from './BibViewer.scss?inline'

export class BibViewer extends HTMLElement {
  private static BIB_BASE_PATH = `${import.meta.env.BASE_URL}/bibtex`;
  private modal: Element | null;
  private content: HTMLDivElement | null;
  private footer: HTMLDivElement | null;
  private bibHref: string | null;
  private bibData?: string;
  private messageBox?: HTMLElement;
  private initFooter = false;

  constructor() {
    super()

    const styles = document.createElement('style');
    styles.setAttribute('type', 'text/css');
    styles.appendChild(document.createTextNode(extraStyles));
    this.appendChild(styles);


    this.bibHref = this.getAttribute('data-bib');

    const button = document.createElement('button')
    button.classList.add('button')
    button.innerText = 'View'
    button.onclick = this.toggleModal
    this.appendChild(button)

    this.content = this.querySelector('[slot="content"]')
    this.footer = this.querySelector('[slot="footer"]')
    this.modal = this.querySelector('generic-modal')
  }

  toggleModal = () => {
    if (this.modal) {
      this.modal.setAttribute('data-visible', 'true')
    }

    this.renderContent()
  }

  renderContent = () => {
    if (!this.content) {
      console.error('BibViewer: no content container')
      return
    }
    if (!this.bibHref) {
      console.error('BibViewer: no href for bibtex')
      return
    }

    this.content.replaceChildren()
    fetch(`${BibViewer.BIB_BASE_PATH}/${this.bibHref}`)
    .then((res) => res.text())
    .then((data) => {
      this.bibData = data;

      const pre = document.createElement('pre')
      const code = document.createElement('code')
      pre.appendChild(code)
      code.appendChild(document.createTextNode(data))
      this.content?.appendChild(pre)

      this.renderFooter()
    })
  }

  renderFooter = () => {
    if (this.initFooter) return;
    // Make footer
    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
    
    const copyButton = document.createElement('button')
    copyButton.classList.add('button', 'is-primary')
    copyButton.textContent = 'Copy BibTex to Clipboard'
    copyButton.onclick = this.copyToClipboard
    buttons.appendChild(copyButton)

    const messageBox = document.createElement('div')
    this.messageBox = messageBox
    this.footer?.append(buttons, messageBox)
    this.initFooter = true;
  }

  copyToClipboard = (event: Event) => {
    if (!this.bibData) return;
    navigator.clipboard
      .writeText(this.bibData)
      .then(() => {
        if (this.messageBox)
          this.messageBox.innerText = '✅ Copied to clipboard'
      })
      .catch((err) => {
        console.error(err)
        if (this.messageBox)
          this.messageBox.innerText = '❌ Could not copy to clipboard'
      })
  }
}