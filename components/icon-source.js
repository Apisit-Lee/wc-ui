export default class WcIconSource extends HTMLElement {

    static get observedAttributes() {
        return ['src'];
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
    }

    get src() {
        return this.getAttribute('src');
    }
    get name() {
        return this.getAttribute('name') || 'default';
    }
    set src(value) {
        this.setAttribute('src', value);
    }

    async fetchSvg(src) {
        return await fetch(src).then(res => res.text());
    }

    removeSvg(name) {
        if (!name) return;
        (document.querySelectorAll(`.wc_icon_source_svg__${name}`) || []).forEach(el => {
            try {
                el.parentNode.removeChild(el);
            } catch (e) {
                console && console.log(e);
            }
        });
    }

    notifyIconSourceLoaded(name, isLoaded) {
        (document.querySelectorAll(`wc-icon[source=${name}]`)).forEach(icon => {
            if (isLoaded) {
                icon.setAttribute('issourceloaded', 'true');
            } else {
                icon.setAttribute('issourceloaded', 'false');
            }
        });
    }

    async load(name, oldName, src) {
        function prepend(a, h) {
            h.parentNode.insertBefore(a, h)
        }
        const svgStr = await this.fetchSvg(src);
        let h = document.createElement("div");
        h.innerHTML = svgStr;
        let a = h.getElementsByTagName("svg")[0];

        // when name change, remove old svg
        if (oldName) {
            this.removeSvg(oldName);
        }

        // when name duplicates,remove svg
        this.removeSvg(name);

        // insert svg source to body
        // and notify wc-icons who's using this source to update render
        if (a) {
            a.setAttribute('class', `wc_icon_source_svg__${name}`);
            a.setAttribute('aria-hidden', 'true');
            a.style.position = 'absolute';
            a.style.width = 0;
            a.style.height = 0;
            a.style.overflow = 'hidden';
            a.removeAttribute('xmlns');
            a.removeAttribute('xmlns:xlink');
            a.querySelectorAll('symbol').forEach(symbol => {
                let id = symbol.id;
                symbol.id = `icon_source__${name}__${id}`;
            });
            h = a;
            (a = document.body).firstChild ? prepend(h, a.firstChild) : a.appendChild(h);

            this.notifyIconSourceLoaded(this.name, true);
        }
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src') {
            await this.load(this.name, undefined, newValue);
        }
    }

    disconnectedCallback() {
        this.removeSvg(this.name);
        this.notifyIconSourceLoaded(this.name, false);
    }
}

if (!customElements.get('wc-icon-source')) {
    customElements.define('wc-icon-source', WcIconSource);
}