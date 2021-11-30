export default class WcPortal extends HTMLElement {
  static get observedAttributes() {
    return ['portal'];
  }
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = '<slot></slot>';
  }
  get portal() {
      const portal = this.getAttribute('portal');
      if (portal) {
          return document.querySelector(portal)
      }
      return null;
  }
  set portal(portal) {
    this.setAttribute('portal', portal);
  }
  connectedCallback() {
    if (this.portal && this.portal!==this.parentNode) {
        this.portal.appendChild(this);
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'portal') {
      if (oldValue) {
        const oldPortal = document.querySelector(oldValue);
        oldPortal.removeChild(this);
      }
      if (this.portal && this.portal!==this.parentNode) {
        this.portal.appendChild(this);
      }
    }
  }
}

if (!customElements.get('wc-portal')) {
    customElements.define('wc-portal', WcPortal);
}
