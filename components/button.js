import './icon-source.js';
import './icon.js';

export default class WcButton extends HTMLElement {

    static get observedAttributes() {
        return ['icon'];
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
          :host {
            --btn-primary-color: var(--primary-color, #1792ff);
            --btn-primary-color-10: var(--primary-color-10, #1792ff1a);
            --btn-primary-color-40: var(--primary-color-40, #1792ff66);
            --btn-primary-color-90: var(--primary-color-90, #105797);

            --btn-border-color: transparent;
            --btn-background-color: var(--btn-primary-color-10, #1792ff1a);
            --btn-on-background-color: var(--btn-primary-color, #1792ff);
            --btn-shadow: 0 2px 4px 1px rgba(0, 0, 0, .3);
            transition: all linear .3s;
            --btn-background-hover-color: var(--btn-primary-color, #1792ff66);
            --btn-background-hover-opacity: 0.08;
            --btn-focus-outline-color: var(--btn-primary-color-90, #105797);
            --btn-background-active-color: var(--btn-primary-color, #1792ff66);
            --btn-background-active-opacity: 0.2;
            --btn-line-height: 32px;
            --btn-padding: 0 18px;
            --btn-spacing: 6px;

            margin: 8px 12px;
            height: var(--btn-line-height, 32px);
            display: inline-block;
            vertical-align: middle;
            border-radius: 40px;
            padding: 3px;
            outline-color: transparent;
            overflow: hidden;
            font-size: 0;

            border: 1px solid var(--btn-border-color, var(--btn-background-color, #1792ff1a));
            background: var(--btn-background-color, #1792ff1a);
            box-shadow: var(--btn-shadow, 0 2px 5px rgba(0, 0, 0, .3));
            color: var(--btn-on-background-color, #1792ff);
            outline: 0;
            line-height: var(--btn-line-height, 32px);
            padding: var(--btn-padding, 0 24px);
            position: relative;
            overflow: hidden;
          }
          #btn {
            width: 100%;
            height: 100%;
            border: 0;
            outline: 0;
            background: transparent;
            color: inherit;
            pointer-events: none;
          }
          :host([type=filled]) {
            --btn-background-color: var(--btn-primary-color, #1792ff);
            --btn-border-color: var(--btn-primary-color, #1792ff);
            color: #ffffff;
            --btn-shadow: none;
            --btn-background-hover-color: #ffffff;
          }
          :host([type=tonal]) {
            --btn-background-color: var(--btn-primary-color-40, #1792ff66);
            --btn-border-color: var(--btn-primary-color-40, #1792ff66);
            --btn-on-background-color: var(--btn-primary-color-90, #105797);
            --btn-shadow: none;
          }
          :host([type=outlined]) {
            background: transparent;
            --btn-border-color: var(--btn-primary-color-90, #105797);
            --btn-shadow: none;
          }
          :host([type=text]) {
            background: transparent;
            --btn-shadow: none;
          }
          :host([theme=success]) {
            --primary-color: #44692b;
            --primary-color-10: #44692b1a;
            --primary-color-40: #44692b66;
            --primary-color-90: #294019;
          }
          :host([theme=warn]) {
            --primary-color: #f88b24;
            --primary-color-10: #f88b241a;
            --primary-color-40: #f88b2466;
            --primary-color-90: #a35813;
          }
          :host([theme=error]) {
            --primary-color: #f12929;
            --primary-color-10: #f129291a;
            --primary-color-40: #f1292966;
            --primary-color-90: #a31d1d;
          }
          :host([size=x-small]) {
            --btn-line-height: 24px;
            --btn-padding: 0 14px;
            --btn-spacing: 4px;
          }
          :host([size=small]) {
            --btn-line-height: 28px;
            --btn-padding: 0 16px;
            --btn-spacing: 5px;
          }
          :host([size=large]) {
            --btn-line-height: 40px;
            --btn-padding: 0 24px;
            --btn-spacing: 8px;
          }
          :host([size=x-large]) {
            --btn-line-height: 48px;
            --btn-padding: 0 26px;
            --btn-spacing: 9px;
          }
          :host([block]) {
            display: block;
          }
          :host([round]){
            width: var(--btn-line-height, 32px);
            height: var(--btn-line-height, 32px);
            padding: 0;
          }
          :host([round]) #icon {
            margin: 0;
          }
          :host(:not([type=text]):hover) {
            --btn-shadow: 0 2px 5px rgba(0, 0, 0, .3);
          }
          :host(:hover):after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: var(--btn-background-hover-color, #000000);
            opacity: var(--btn-background-hover-opacity, 0.08);
          }
          :host(:focus) {
            outline-color: var(--btn-focus-outline-color, #105797);
          }
          :host(:active):after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: var(--btn-background-active-color, #000000);
            opacity: var(--btn-background-active-opacity, 0.12);
          }
          :host([disabled]) {
            opacity: 0.38;
            outline-color: transparent;
            pointer-events: none;
            cursor: not-allowed;
          }
          #icon {
            margin-top: 0;
            margin-right: var(--btn-spacing, 6px);
            margin-bottom: 0;
            margin-left: calc(-1 * var(--btn-spacing, 6px));
            font-size: 1em;
          }
        </style>
        <button id="btn" tabindex="-1">${this.icon ? `<wc-icon id="icon" type="${this.icon}"></wc-icon>` : ''}<slot></slot></button>
      `;
    }

    get type() {
        return this.getAttribute('type') || 'default';
    }

    get icon() {
        return this.getAttribute('icon');
    }

    get theme() {
        return this.getAttribute('theme') || 'default';
    }

    get size() {
        return this.getAttribute('size') || 'normal';
    }

    get block() {
        return this.getAttribute('block');
    }

    get round() {
        return this.getAttribute('round');
    }

    get disabled() {
        return this.getAttribute('disabled');
    }

    set type(value) {
        this.setAttribute('type', value);
    }

    set icon(value) {
        this.setAttribute('icon', value);
    }

    set theme(value) {
        this.setAttribute('theme', value);
    }

    set size(value) {
        this.setAttribute('size', value);
    }

    set block(value) {
        if (value === null || value === false) {
            this.removeAttribute('block');
        } else {
            this.setAttribute('block', '');
        }
    }

    set round(value) {
        if (value === null || value === false) {
            this.removeAttribute('round');
        } else {
            this.setAttribute('round', '');
        }
    }

    set disabled(value) {
        if (value === null || value === false) {
            this.removeAttribute('disabeld');
        } else {
            this.setAttribute('disabled', '');
        }
    }

    connectedCallback() {
        this.btnEl = this.shadowRoot.getElementById('btn');
        this.iconEl = this.shadowRoot.getElementById('icon');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        function prepend(a, h) {
            h.parentNode.insertBefore(a, h)
        }
        if (name === 'icon') {
            if (!newValue && oldValue) {
                this.btnEl.removeChild(this.iconEl);
            }
            if (newValue && !oldValue) {
                this.iconEl = document.createElement('wc-icon');
                this.iconEl.setAttribute('type', newValue);
                this.iconEl.id = 'icon';
                if (this.iconEl && this.btnEl) {
                    prepend(this.iconEl, this.btnEl.firstChild);
                }
            }
            if (newValue && oldValue && this.iconEl) {
                this.iconEl.setAttribute('type', newValue);
            }
        }
    }
}
if (!customElements.get('wc-button')) {
    customElements.define('wc-button', WcButton);
}

export class WcButtonGroup extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-flex;
            gap: 0;
            font-size: 0!important;
          }

          ::slotted(wc-button) {
            margin: 0!important;
            box-shadow: none!important;
          }
          ::slotted(wc-button:not(:first-of-type):not(:last-of-type)) {
            border-radius: 0;
          }
          ::slotted(wc-button:first-of-type) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          ::slotted(wc-button:last-of-type) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          ::slotted(wc-button[type=outlined]:not(:last-of-type)) {
            border-right: 0;
          }
        </style>
        <div id="button-group"><slot></slot></div>
      `;
    }
}
if (!customElements.get('wc-button-group')) {
    customElements.define('wc-button-group', WcButtonGroup);
}