class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>      
      .header-name{
        font-family: 'Times New Roman', Times, serif;
        font-size: 24px;
        color: white;
        margin-left: 10px;
      }

      .head {
        display: flex;
        width: 100%;
      }

      .skip-to-content{
        text-decoration: none;
        position: relative;
        top: -100px;
        margin-left: 20px;
        margin: auto 20px;
        color: #cfb7ff;
      }

      .skip-to-content:focus {
        top: 0px;
      }

      .fa-utensils {
        margin: auto 0;
        color: white;
      }

      .navbar-button {
        margin-left: auto;
        padding: auto;
        color: white;
        justify-content: center;
        align-items: center;
      }

      .fa-bars{
        padding: 12px;
      }

      .head button {
        background: none;
        border: none
      }
    </style>
    <div class="head">
      <i class="fa-solid fa-utensils"></i>
      <h1 class="header-name">ReFind</h1>
      <a class="skip-to-content" href="">Skip to Main Content</a>
      <button id="hamburgerBtn" aria-label="navigation-menu" class="navbar-button"><i class="fa-solid fa-bars"></i></button>
    </div>
    
    
    `;
  }
}

customElements.define('app-header', AppHeader);