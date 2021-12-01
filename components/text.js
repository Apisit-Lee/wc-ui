export default class WcText extends HTMLElement {

    static get observedAttributes() {
        return ['rows'];
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
            :host {
                font-size: 14px;
                color: var(--fontColor, #333);
                display: inline;
            }
            :host([rows]) {
                display: block;
            }
            :host([rows]) span{
                --rows: ${this.rows};
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: var(--rows,1);
                overflow: hidden;
            }
            </style>
            <span id="text"><slot></slot></span>
        `;
    }
    
    get rows() {
        return this.getAttribute('rows');
    }
    set rows(value) {
        if (Number.isNaN(+value)) {
            this.removeAttribute('rows');
        } else {
            this.setAttribute('rows', +value);
        }
    }

    connectedCallback() {
        this.textEl = this.shadowRoot.getElementById('text');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'rows' && this.textEl) {
            this.textEl.style.setProperty('--rows', newValue);
        }
    }
}

if (!customElements.get('wc-text')) {
    customElements.define('wc-text', WcText);
}