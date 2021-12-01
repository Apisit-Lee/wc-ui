export default class WcIcon extends HTMLElement {
    constructor() {
        super();
    }
}

if (!customElements.get('wc-icon')) {
    customElements.define('wc-icon', WcIcon);
}