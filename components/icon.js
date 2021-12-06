export default class WcIcon extends HTMLElement {

    static get observedAttributes() {
        return ['source', 'type', 'path', 'issourceloaded'];
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
            :host{
                font-size: inherit;
                display: inline-block;
                transition: .3s;
            }
            .icon {
                display: inline-block;
                width: 1em;
                height: 1em;
                margin: auto;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
            }
            </style>
            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 ${this.view} ${this.view}">
                ${this.path ? '<path id="path"></path>' : '<use id="use"></use>'}
            </svg>
        `;
    }

    get source() {
        return this.getAttribute('source') || 'default';
    }
    get type() {
        return this.getAttribute('type');
    }
    get path() {
        return this.getAttribute('path') || '';
    }
    get view() {
        return this.getAttribute('view') || 1024;
    }
    get issourceloaded() {
        return this.getAttribute('issourceloaded');
    }
    set source(value) {
        this.setAttribute('source', value);
    }
    set type(value) {
        this.setAttribute('type', value);
    }
    set path(value) {
        this.setAttribute('path', value);
    }
    set issourceloaded(value) {
        this.setAttribute('issourceloaded', value);
    }

    connectedCallback() {
        this.iconEl = this.shadowRoot.getElementById('icon');
        this.useEl = this.iconEl.querySelector('use');
        this.pathEl = this.iconEl.querySelector('path');
        this.source && (this.source = this.source);
        this.type && (this.name = this.type);
        this.path && (this.path = this.path);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.iconEl) {
            if (name === 'path' && this.path && !this.pathEl) {
                this.iconEl.innerHTML = '<path id="path"></path>';
                this.pathEl = this.iconEl.querySelector('path');
                this.useEl = undefined;
            }
            if ((!this.path || (name === 'path' && !newValue)) && !this.useEl) {
                this.iconEl.innerHTML = '<use id="use"></use>';
                this.useEl = this.iconEl.querySelector('use');
                this.pathEl = undefined;
            }
        }

        if (name === 'path' && this.pathEl && newValue) {
            this.pathEl.setAttribute("d", newValue);
        }
        
        let iconNode;
        if (this.useEl) {
            const setNS = (source, type) => {
                this.useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon_source__${source || 'default'}__icon-${type}`);
            }
            const getNode = (source, type) => {
                return document.querySelector(`#icon_source__${source || 'default'}__icon-${type}`);
            }
            if (name === 'source') {
                setNS(newValue, this.type);
                iconNode = getNode(newValue, this.type);
            }
            if (name === 'type') {
                setNS(this.source, newValue);
                iconNode = getNode(this.source, newValue);
            }
            if (name === 'issourceloaded') {
                if (newValue === 'false') {
                    iconNode = undefined;
                    this.useEl.innerHTML = '';
                } else {
                    setNS(this.source, this.type);
                    iconNode = getNode(this.source, this.type);
                }
            }
            if (iconNode) {
                this.useEl.innerHTML = '';
                this.useEl.appendChild(iconNode.cloneNode(true));
            }
        }
    }
}

if (!customElements.get('wc-icon')) {
    customElements.define('wc-icon', WcIcon);
}