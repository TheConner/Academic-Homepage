import viewerStyles from './LicenceViewer.scss?inline'

export class LicenceViewerComponent extends HTMLElement {
  private modal: Element | null;
  private content: HTMLDivElement | null;

  constructor() {
    super()

    const styles = document.createElement('style');
    styles.setAttribute('type', 'text/css');
    styles.appendChild(document.createTextNode(viewerStyles));
    this.appendChild(styles);

    const button = document.createElement('button')
    button.classList.add('fake-href-button')
    button.innerText = 'View OSS Licences'
    button.onclick = this.toggleModal
    this.appendChild(button)

    this.content = this.querySelector('[slot="content"]')
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
      console.error('LicenceViewer: no content container')
      return
    }

    this.content.replaceChildren()
    fetch(`${import.meta.env.BASE_URL}json/Licence.json`)
    .then((res) => res.json())
    .then((data) => {
      if (this.content)  {
        this.content.innerHTML = '';
        this.renderSummary(data, this.content);
        this.renderLicences(data, this.content);
      }
    })
  }

  renderSummary = (licences: any[], container: HTMLDivElement) => {
    // Get unique licences
    let summary = {}
    for (const { licenseType } of licences) {
      summary[licenseType] = {
        licenseType,
        count: summary[licenseType] ? summary[licenseType].count + 1 : 1
      }
    }
    summary = Object.values(summary)

    const header = document.createElement('h4')
    header.classList.add('subtitle', 'is-4')
    header.innerText = 'Summary of Licences'
    container.appendChild(header)

    const stats = document.createElement('ul')
    stats.append(
      ...summary.map((licence) => {
        const li = document.createElement('li')
        const b = document.createElement('b')
        b.innerText = licence.licenseType
        li.append(
          b,
          document.createTextNode(` ${licence.count} packages`)
        )
        return li
      })
    )

    container.append(
      header,
      stats
    )
  }

  renderLicences = (licences: any[], container: HTMLDivElement) => {
    // Create header 
    const header = document.createElement('h4')
    header.innerText = 'Package Listing'
    header.classList.add('subtitle', 'is-4')
    container.appendChild(header)

    // Render individual packages
    for (const licence of licences) {
      const licenceURLHttp = licence.link.replace('git+https://', 'https://')

      const licenceDiv = document.createElement('div')
      licenceDiv.style.paddingBottom = '25px'
      const packageNameVersion = document.createElement('tt')
      packageNameVersion.innerText = `${licence.name} ${licence.installedVersion}`

      const packageDesc = document.createElement('p')
      const packageHref = document.createElement('a')
      packageHref.href = licenceURLHttp
      packageHref.target = '_blank'
      packageHref.rel = 'noreferrer'
      packageHref.text = licenceURLHttp

      packageDesc.append(
        this.renderKvRow('Author', licence.author),
        this.renderKvRow('Licence', licence.licenseType),
        this.renderKvRow('Package Link', packageHref)
      )

      licenceDiv.append(
        packageNameVersion,
        packageDesc
      )

      container.appendChild(licenceDiv)
    }
  }

  isElement(element: any) {
    return element instanceof Element || element instanceof HTMLDocument;  
}

  renderKvRow = (key: string, val: string | HTMLElement) => {
    const container = document.createElement('span')
    container.style.display = 'block'
    const keyContainer = document.createElement('b')
    keyContainer.innerText = `${key}: `
    let valContainer;
    if (this.isElement(val)) {
      valContainer = val
    } else if (typeof val === 'string') {
      valContainer = document.createTextNode(val)
    } else {
      valContainer = document.createTextNode('')
    }
    container.append(keyContainer, valContainer)
    return container
  }
}