export default class WcDialog extends HTMLElement {
    portalSet = false;
  
    static get observedAttributes() {
      return ['portal', 'visible', 'canceltext', 'oktext', 'escapable', 'fullscreen', 'title', 'content', 'footer'];
    }
  
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot._innerHTML = `
        <style>
          :host {
            visibility: hidden;
            opacity: 0;
            transition: all linear .3s;
            position: fixed;
            z-index: 10000;
          }
          :host(:not(:defined)) {
            display: none;
          }
          :host(:defined) {
            display: block;
          }
          :host([visible]) {
            visibility: visible;
            opacity: 1;
          }
          .dialog {
            position: fixed;
            max-height: 100vh;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, .3);
          }
          .dialog-wrap {
            width: fit-content;
            min-width: 340px;
            margin: 50vh auto 0;
            overflow: hidden;
            transform: translate3d(0, -50%, 0);
            position: relative;
            border-radius: 25px;
            max-height: 80vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            background: #ffffff;
          }
          :host([fullscreen]) .dialog-wrap {
            width: 100vw;
            height: 100vh;
            max-height: 100vh;
            border-radius: 0;
            margin: 0 auto;
            transform: translate3d(0, 0, 0);
          }
          .dialog-header {
            position: sticky;
            top: 0;
            z-index: 10;
            background: #ffffff;
            padding: 25px 25px 10px 25px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-shrink: 0;
          }
          :host([fullscreen]) .dialog-header {
            border-bottom: 1px solid #dddddd;
            padding: 15px 25px 15px 25px;
          }
          .dialog-header ::slotted(*) {
            margin-block-start: 0;
            margin-block-end: 0;
            padding: 0;
            margin: 0;
          }
          .dialog-body {
            min-height: 80px;
            background: #ffffff;
            padding: 10px 25px;
            box-sizing: border-box;
            position: relative;
            flex: 1;
            overflow: auto;
          }
          .dialog-footer {
            position: sticky;
            bottom: 0;
            background: #ffffff;
            z-index: 10;
            padding: 10px 25px 25px 25px;
            box-sizing: border-box;
            text-align: right;
            flex-shrink: 0;
            display: none;
          }
          :host([fullscreen]) .dialog-footer {
            border-top: 1px solid #dddddd;
            padding: 15px 25px 15px 25px;
          }
          :host([footer]) .dialog-footer {
            display: block;
          }
          .dialog-footer wc-button {
            margin: 0;
          }
          .dialog-footer wc-button + wc-button {
            margin-left: 8px;
          }
          #fullscreen-trigger {
            margin-left: 8px;
            color: #999999;
            display: none;
          }
          #fullscreen-trigger:hover {
            color: #333333;
          }
          :host([fullscreentrigger]) #fullscreen-trigger {
            display: inline-block;
          }
          #close-btn {
            margin-left: 8px;
            color: #999999;
            display: none;
          }
          #close-btn:hover {
            color: red;
          }
          :host([closable]) #close-btn {
            display: inline-block;
          }
          #cancel-btn {
            display: none;
          }
          :host([canceltext]) #cancel-btn {
            display: inline-block;
          }
          #ok-btn {
            display: none;
          }
          :host([oktext]) #ok-btn {
            display: inline-block;
          }
        </style>
        <div class="dialog" title="">
          <div class="dialog-wrap">
            <header class="dialog-header">
              <slot name="header">
                <b id="title"></b>
              </slot>
              <section>
                <wc-icon id="fullscreen-trigger" type="full"></wc-icon>
                <wc-icon id="close-btn" type="close_light"></wc-icon>
              </section>
            </header>
            <section class="dialog-body"><slot><div id="content"></div></slot></section>
            <footer class="dialog-footer">
              <slot name="footer">
                <wc-button type="text" id="cancel-btn">${this.canceltext}</wc-button>
                <wc-button type="filled" id="ok-btn">${this.oktext}</wc-button>
              </slot>
            </footer>
          </div>
        </div>
      `;
    }
  
    get portal() {
      const portal = this.getAttribute('portal');
      if (portal) {
          return document.querySelector(portal)
      }
      return null;
    }
  
    get visible() {
      return this.getAttribute('visible');
    }
  
    get canceltext() {
      return this.getAttribute('canceltext');
    }
  
    get oktext() {
      return this.getAttribute('oktext');
    }
  
    get escapable() {
      return this.getAttribute('escapable');
    }
  
    get closable() {
      return this.getAttribute('closable');
    }
  
    get fullscreen() {
      return this.getAttribute('fullscreen');
    }
  
    get fullscreentrigger() {
      return this.getAttribute('fullscreentrigger');
    }
  
    get title() {
      return this.getAttribute('title');
    }
  
    get content() {
      return this.getAttribute('content');
    }
  
    get footer() {
      return this.getAttribute('footer');
    }
  
    set portal(value) {
      if (value) {
        this.setAttribute('portal', value);
      } else {
        this.setAttribute('portal', 'body');
      }
    }
  
    set visible(value) {
      if (value === null || value === false) {
        this.removeAttribute('visible');
      } else {
        this.setAttribute('visible', '');
      }
    }
  
    set canceltext(value) {
      if (value === null || value === false) {
        this.removeAttribute('canceltext');
      } else {
        this.setAttribute('canceltext', String(value));
      }
    }
    set oktext(value) {
      if (value === null || value === false) {
        this.removeAttribute('oktext');
      } else {
        this.setAttribute('oktext', String(value));
      }
    }
  
    set escapable(value) {
      if (value === null || value === false || value === 'null' || value === 'false') {
        this.removeAttribute('escapable');
      } else {
        this.setAttribute('escapable', '');
      }
    }
  
    set closable(value) {
      if (value === null || value === false || value === 'null' || value === 'false') {
        this.removeAttribute('closable');
      } else {
        this.setAttribute('closable', '');
      }
    }
  
    set fullscreen(value) {
      if (value === null || value === false || value === 'null' || value === 'false') {
        this.removeAttribute('fullscreen');
      } else {
        this.setAttribute('fullscreen', '');
      }
    }
  
    set fullscreentrigger(value) {
      if (value === null || value === false || value === 'null' || value === 'false') {
        this.removeAttribute('fullscreentrigger');
      } else {
        this.setAttribute('fullscreentrigger', '');
      }
    }
  
    set title(value) {
      this.setAttribute('title', value);
    }
  
    set content(value) {
      this.setAttribute('content', value);
    }
  
    set footer(value) {
      if (value === null || value === false || value === 'null' || value === 'false') {
        this.removeAttribute('footer');
      } else {
        this.setAttribute('footer', '');
      }
    }
  
    setPortal(value) {
      this.portal = value;
    }
  
    show() {
      this.visible = true;
    }
  
    hide() {
      this.visible = false;
    }
  
    closeHandler() {
      this.hide();
    }
  
    cancelHandler() {
      this.dispatchEvent(new CustomEvent('cancel'));
      this.hide();
    }
  
    okHandler() {
      this.dispatchEvent(new CustomEvent('ok'));
      this.hide();
    }
  
    toggleFullscreen() {
      let value = this.fullscreen;
      this.fullscreen = (value === null || value === false || value === 'null' || value === 'false');
    }
  
    setEscapable(escapable) {
      const handler = (ev) => {
        if (ev.keyCode === 27) {
          if (this.closable !== null && this.closable !== false && this.closable !== 'null' && this.closable !== 'false') {
            this.hide();
          }
        } 
      };
      if (escapable === null || escapable === false || escapable === 'null' || escapable === 'false') {
        document.removeEventListener('keyup', handler, false);
      } else {
        document.addEventListener('keyup', handler, false);
      }
    }
  
    connectedCallback() {
      if (this.portal && !portalSet) {
        portalSet = true;
        this.parentNode.removeChild(this);
        if (this.portal && this.portal!==this.parentNode) {
          this.portal.appendChild(this);
        }
      }
      if (!this.hasAttribute('canceltext')) {
        this.canceltext = '取 消';
      } else {
        this.canceltext = this.getAttribute('canceltext');
      }
      if (!this.hasAttribute('oktext')) {
        this.oktext = '确 定';
      } else {
        this.oktext = this.getAttribute('oktext');
      }
      if (!this.hasAttribute('fullscreentrigger')) {
        this.fullscreentrigger = true;
      } else {
        this.fullscreentrigger = this.getAttribute('fullscreentrigger');
      }
      if (!this.hasAttribute('closable')) {
        this.closable = true;
      } else {
        this.closable = this.getAttribute('closable');
      }
      if (!this.hasAttribute('footer')) {
        this.footer = true;
      } else {
        this.footer = this.getAttribute('footer');
      }
      if (!this.hasAttribute('escapable')) {
        this.setEscapable(true);
      }
    }
  
    disconnectedCallback() {
      if (this.closeBtnEl) {
        this.closeBtnEl.removeEventListener('click', this.closeHandler.bind(this), false);
      }
      if (this.cancelBtnEl) {
        this.cancelBtnEl.removeEventListener('click', this.cancelHandler.bind(this), false);
      }
      if (this.okBtnEl) {
        this.okBtnEl.removeEventListener('click', this.okHandler.bind(this), false);
      }
      if (this.fullscreenEl) {
        this.fullscreenEl.removeEventListener('click', this.toggleFullscreen.bind(this), false);
      }
      this.setEscapable(false);
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'portal') {
        if (oldValue && newValue && this.portal!==this.parentNode) {
          const oldPortal = document.querySelector(oldValue);
          oldPortal.removeChild(this);
        }
        if (this.portal && this.portal!==this.parentNode) {
          this.portal.appendChild(this);
        }
      }
      if (name === 'visible') {
        this.shadowRoot.innerHTML = this.shadowRoot._innerHTML;
        this.dispatchEvent(new CustomEvent('visiblechange', {
          detail: {
            visilbe: newValue
          }
        }));
        window.requestAnimationFrame(() => {
          this.closeBtnEl = this.shadowRoot.getElementById('close-btn');
          this.cancelBtnEl = this.shadowRoot.getElementById('cancel-btn');
          this.okBtnEl = this.shadowRoot.getElementById('ok-btn');
          this.fullscreenEl = this.shadowRoot.getElementById('fullscreen-trigger');
          this.titleEl = this.shadowRoot.getElementById('title');
          this.contentEl = this.shadowRoot.getElementById('content');
          if (newValue !== null && newValue !== 'null' && newValue !== false && newValue !== 'false') {
            if (this.closeBtnEl) {
              this.closeBtnEl.addEventListener('click', this.closeHandler.bind(this), false);
            }
            if (this.cancelBtnEl) {
              if (this.canceltext) {
                this.cancelBtnEl.innerText = this.canceltext;
              }
              this.cancelBtnEl.addEventListener('click', this.cancelHandler.bind(this), false);
            }
            if (this.okBtnEl) {
              if (this.oktext) {
                this.okBtnEl.innerText = this.oktext;
              }
              this.okBtnEl.addEventListener('click', this.okHandler.bind(this), false);
            }
            if (this.fullscreenEl) {
              this.fullscreenEl.addEventListener('click', this.toggleFullscreen.bind(this), false);
            }
            if (this.titleEl && this.title) {
              this.titleEl.innerHTML = this.title;
            }
            if (this.contentEl && this.content) {
              this.contentEl.innerHTML = this.content;
            }
          } else {
            if (this.closeBtnEl) {
              this.closeBtnEl.removeEventListener('click', this.closeHandler.bind(this), false);
            }
            if (this.cancelBtnEl) {
              this.cancelBtnEl.removeEventListener('click', this.cancelHandler.bind(this), false);
              this.canceltext = null;
            }
            if (this.okBtnEl) {
              this.okBtnEl.removeEventListener('click', this.okHandler.bind(this), false);
              this.oktext = null;
            }
            if (this.fullscreenEl) {
              this.fullscreenEl.removeEventListener('click', this.toggleFullscreen.bind(this), false);
            }
          }
        });
      }
      if (name === 'canceltext') {
        this.cancelBtnEl = this.shadowRoot.getElementById('cancel-btn');
        if (this.cancelBtnEl) {
          this.cancelBtnEl.innerText = newValue;
        }
      }
      if (name === 'oktext') {
        this.okBtnEl = this.shadowRoot.getElementById('ok-btn');
        if (this.okBtnEl) {
          this.okBtnEl.innerText = newValue;
        }
      }
      if (name === 'escapable') {
        this.setEscapable(newValue);
      }
      if (name === 'title') {
        this.titleEl = this.shadowRoot.getElementById('title');
        if (this.titleEl) {
          this.titleEl.innerHTML = newValue;
        }
      }
      if (name === 'content') {
        this.contentEl = this.shadowRoot.getElementById('content');
        if (this.contentEl) {
          this.contentEl.innerHTML = newValue;
        }
      }
    }
  }
  if (!customElements.get('wc-dialog')) {
    customElements.define('wc-dialog', WcDialog);
  }
  
  WcDialog.dialog = (...args) => {
    const dialog = new WcDialog();
    document.body.appendChild(dialog);
    if (typeof args[0] === 'object') {
      const { title, oktext, canceltext, content, fullscreentrigger} = args[0];
      dialog.title = title || 'Dialog';
      dialog.oktext = oktext || '确 定';
      dialog.canceltext = canceltext || '取 消';
      dialog.fullscreentrigger = fullscreentrigger || false;
      dialog.content = content || '';
      dialog.closable = false;
    } else {
      dialog.title = 'Dialog';
      dialog.oktext = '确 定';
      dialog.canceltext = '取 消';
      dialog.fullscreentrigger = false;
      dialog.content = args[0] || '';
      dialog.closable = false;
    }
    dialog.visible = true;
    return dialog;
  }
  
  WcDialog.alert = (...args) => {
    const dialog = new WcDialog();
    document.body.appendChild(dialog);
    if (typeof args[0] === 'object') {
      const { title, oktext, canceltext, content, fullscreentrigger} = args[0];
      dialog.title = title || 'Alert';
      dialog.oktext = oktext || '确 定';
      dialog.canceltext = canceltext || '取 消';
      dialog.fullscreentrigger = fullscreentrigger || false;
      dialog.content = content || '';
      dialog.closable = false;
    } else {
      dialog.title = 'Alert';
      dialog.oktext = '确 定';
      dialog.canceltext = '取 消';
      dialog.fullscreentrigger = false;
      dialog.content = args[0] || '';
      dialog.closable = false;
    }
    dialog.visible = true;
    return dialog;
  };
  
  WcDialog.info = (...args) => {
    const dialog = new WcDialog();
    document.body.appendChild(dialog);
    if (typeof args[0] === 'object') {
      const { title, oktext, content, fullscreentrigger} = args[0];
      dialog.title = title || '<wc-icon type="infofill" style="color: #1792ff;"></wc-icon> Info';
      dialog.oktext = oktext || '知道了';
      dialog.canceltext = null;
      dialog.fullscreentrigger = fullscreentrigger || false;
      dialog.content = content || '';
      dialog.closable = false;
    } else {
      dialog.title = '<wc-icon type="infofill" style="color: #1792ff;"></wc-icon> Info';
      dialog.oktext = '知道了';
      dialog.canceltext = null;
      dialog.fullscreentrigger = false;
      dialog.content = args[0] || '';
      dialog.closable = false;
    }
    dialog.visible = true;
    return dialog;
  };
  
  WcDialog.success = (...args) => {
    const dialog = new WcDialog();
    document.body.appendChild(dialog);
    if (typeof args[0] === 'object') {
      const { title, oktext, content, fullscreentrigger} = args[0];
      dialog.title = title || '<wc-icon type="emojifill" style="color: #44692b;"></wc-icon> Success';
      dialog.oktext = oktext || '知道了';
      dialog.canceltext = null;
      dialog.fullscreentrigger = fullscreentrigger || false;
      dialog.content = content || '';
      dialog.closable = false;
    } else {
      dialog.title = '<wc-icon type="emojifill" style="color: #44692b;"></wc-icon> Success';
      dialog.oktext = '知道了';
      dialog.canceltext = null;
      dialog.fullscreentrigger = false;
      dialog.content = args[0] || '';
      dialog.closable = false;
    }
    dialog.visible = true;
    return dialog;
  };
  
  WcDialog.warn = (...args) => {
    const dialog = new WcDialog();
    document.body.appendChild(dialog);
    if (typeof args[0] === 'object') {
      const { title, oktext, content, fullscreentrigger} = args[0];
      dialog.title = title || '<wc-icon type="warnfill" style="color: #f88b24;"></wc-icon> Warn';
      dialog.oktext = oktext || '知道了';
      dialog.canceltext = null;
      dialog.fullscreentrigger = fullscreentrigger || false;
      dialog.content = content || '';
      dialog.closable = false;
    } else {
      dialog.title = '<wc-icon type="warnfill" style="color: #f88b24;"></wc-icon> Warn';
      dialog.oktext = '知道了';
      dialog.canceltext = null;
      dialog.fullscreentrigger = false;
      dialog.content = args[0] || '';
      dialog.closable = false;
    }
    dialog.visible = true;
    return dialog;
  };
  
  WcDialog.error = (...args) => {
    const dialog = new WcDialog();
    document.body.appendChild(dialog);
    if (typeof args[0] === 'object') {
      const { title, oktext, content, fullscreentrigger} = args[0];
      dialog.title = title || '<wc-icon type="round_close_fill_light" style="color: #f12929;"></wc-icon> Error';
      dialog.oktext = oktext || '知道了';
      dialog.canceltext = null;
      dialog.fullscreentrigger = fullscreentrigger || false;
      dialog.content = content || '';
      dialog.closable = false;
    } else {
      dialog.title = '<wc-icon type="round_close_fill_light" style="color: #f12929;"></wc-icon> Error';
      dialog.oktext = '知道了';
      dialog.canceltext = null;
      dialog.fullscreentrigger = false;
      dialog.content = args[0] || '';
      dialog.closable = false;
    }
    dialog.visible = true;
    return dialog;
  };