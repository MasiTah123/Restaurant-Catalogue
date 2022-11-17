class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .jumbotron{
        display: flex;
        width: 100%;
        min-height: 550px;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 30px;
      } 
      
      .jumbotron img{
        position: absolute;
        width: 100%;
        height: 550px;
        object-fit: cover;
        filter: brightness(0.5);
      }
      
      .jumbotron-inner{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: absolute;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 80%;
        color: white;
      }
      .restaurant-name{
        color: #EFBBCF;
      }
      .jumbotron-head{
        font-size: 28px;
        margin-bottom: 10px;
      }
      
      .jumbotron-tagline{
        font-size: 14px;
        line-height: 24px;
      }
    </style>
    <div class="jumbotron">
      <img src="./images/heros/hero-image_2.jpg" alt="">
      <div class="jumbotron-inner">
        <h2 class="jumbotron-head">Welcome to <span class="restaurant-name">ReFind</span> (Restaurant Finder)</h2>
        <p class="jumbotron-tagline">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, delectus quae
          officiis iste sunt, cupiditate eveniet animi facilis perferendis, omnis ea quas eum adipisci voluptatibus!
          Eveniet harum atque nihil cupiditate."</p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-jumbotron', AppJumbotron);