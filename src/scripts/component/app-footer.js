class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>      
    .footer-app{
      display: flex;
      background: #62557c;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      min-height: 70px;
      width: 100%;
    }
    
    .copyright-content {
      font-size: 24px;
      text-align: center;
      color: white;
    }
    
    </style>
    <div class="footer-app">
      <h1 class="copyright-content">Copyright © 2022 - Restaurant Finder.</h1>
    </div>
    `;
  }
}
customElements.define('app-footer', AppFooter);