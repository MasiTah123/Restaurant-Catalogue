class AppNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .nav {
        background: #C3AED6;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
      
      .nav-list{
        margin: 0 auto;
      }
      
      .nav-item {
        box-sizing: border-box;
        display: inline-block;
        width: 15%;
        margin-right: 5px;
      }
      
      .nav-item .fa-house, .fa-heart, .fa-user{
        margin-right: 5px;
      }
      
      .nav-item a{ 
        display: inline-block;
        width: 100%;
        padding: 15px;
        font-weight: 700;
        text-decoration: none;
        color: #54496b;
      }
      
      .nav-item a:hover {
        color: white;
        background: #62557c;
      }
    </style>
    <nav id="drawer" class="nav">
      <ul class="nav-list">
        <li class="nav-item"><a href="/"><i class="fa-solid fa-house"></i>Home</a></li>
        <li class="nav-item"><a href="#/favorite"><i class="fa-solid fa-heart"></i>Favorite</a></li>
        <li class="nav-item about_us"><a href="https://www.linkedin.com/in/adi-priana-23082a244/">
          <i class="fa-solid fa-user"></i>About Us</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('app-nav', AppNav);