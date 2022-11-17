import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item"> 
  <div class="restaurant-item-upper">
    <img class="restaurant-item-thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
    alt="Gambar ${restaurant.name}">
    <p class="restaurant-item-rating"><i class="fa-solid fa-star"></i>${restaurant.rating}
    </p>
  </div>
  <div class="restaurant-item-content">
    <h3 class="restaurant-item-title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <p class="restaurant-item-city">City: <span class="city-restaurant">${restaurant.city}</span> </p>
    <p class="restaurant-item-description">${restaurant.description}</p>
  </div>
</article>
`;

const createDetailRestaurantTemplate = (restaurant) => `
  <h2 id="catalog-head" class="detail-head">${restaurant.name}</h2>
  <div class="detail">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar ${restaurant.name}" class="restaurant-poster">
    <div class="detail-content">
      <h3>Information</h3> 
      <div class="restaurant-info">
        <h4>Kota</h4>
        <p>${restaurant.city}</p>
        <h4>Alamat</h4>
        <p>${restaurant.address}</p>
        <h4>Deskripsi</h4>
        <p>${restaurant.description}</p>
      </div>
    </div>
  </div>
  <div class="restaurant-menu-section">
    <h3>Menu Restaurant</h3>
    <div class="restaurant-menu">
      <div class="restaurant-food">
        <h4>Makanan</h4>
        <ul class="food-list">
          
        </ul>
      </div>
      <div class="restaurant-drink">
        <h4>Minuman</h4>
        <ul class="drink-list">

        </ul>
      </div>
    </div>
  </div>
  <div class="restaurant-review-section">
    <h3>Review Pelanggan</h3>
    <div class="customer-review">
                                           
    </div>
    <div class="add-review">
      <button class="pop-up-form">Tambah Review</button>
      <form action="" id="add-form" class="add-form close">
        <label for="username" class="label-input">Username</label>
        <input type="text" class="form-input" id="username" placeholder="Masukkan nama user" autocomplete="off">
        <label for="review-text" class="label-input">Review</label>
        <textarea class="form-input" id="review-text" placeholder="Pendapat anda terkait restoran ini" row="20"></textarea>
        <button type="submit" class="btn-submit">TAMBAH</button>
      </form>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createDetailRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};