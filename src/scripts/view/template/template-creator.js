/* eslint-disable max-len */
// import CONFIG from '../../globals/config';

const createErrorTemplate = (message) => `
  <h3>${message}</h3>
`;

const createRestaurantItemSkeletonTemplate = () => `
  <article class="restaurant-item">
    <div class="restaurant-item-upper">
      <picture class="restaurant-item-thumbnail lazyload">
        <source class="source-large" media="(min-width: 2000px)" >
        <source class="source-small" media="(max-width: 600px)" >
        <img class="img-thumb lazyload loading">
      </picture>

      <p class="restaurant-item-rating">
        <div></div>
      </p>
    </div>
    <div class="restaurant-item-content">
      <h3 class="restaurant-item-title">
        <div class="loading loading-title"></div>
      </h3>
      <div class="restaurant-item-city">
        <div class="loading loading-city"></div>
      </div>
      <div class="restaurant-item-description">
        <div class="loading loading-description"></div>
      </div>
    </div>
  </article>
`;

const createDetailRestaurantSkeletonTemplate = () => `
  <h2 id="catalog-head" class="detail-head">
    <div class="loading loading-title-detail"></div>
  </h2>

  <div class="detail">
    <picture class="restaurant-poster lazyload loading">
      <source class="source-large" media="(min-width: 2000px)">
      <source class="source-small" media="(max-width: 600px)">
      <img id="img-poster" class="lazyload loading" >
    </picture>
    <div class="detail-content">
      <h3 id="information">
        <div class="loading loading-title"></div>
      </h3> 
      <div class="restaurant-info">
        <h4 id="Kota">
          <div class="loading loading-title-h4"></div>
        </h4>
        <div id="Kota-content" class="text-detail">
          <div class="loading loading-city"></div>
        </div>
        <h4 id="Alamat">
          <div class="loading loading-title-h4"></div>
        </h4>
        <div id="Alamat-content" class="text-detail">
          <div class="loading loading-city"></div>
        </div>
        <h4 id="Deskripsi">
          <div class="loading loading-title-h4"></div>
        </h4>
        <div id="Deskripsi-content" class="text-detail">
          <div class="loading loading-description-detail"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="restaurant-menu-section">
    <h3 id="menu-restaurant">
      <div class="loading loading-title-h4"></div>
    </h3> 
    <div class="restaurant-menu">
      <div class="restaurant-food">
        <h4 id="makanan">
          <div class="loading loading-title-h4"></div>
        </h4>
        <ul class="food-list">
          
        </ul>
      </div>
      <div class="restaurant-drink">
        <h4 id="minuman">
          <div class="loading loading-title-h4"></div>
        </h4>
        <ul class="drink-list">

        </ul>
      </div>
    </div>
  </div>
  <div class="restaurant-review-section">
    <h3 id="review-pelanggan">
      <div class="loading loading-title-h4"></div>
    </h3>
    <div class="customer-review">
                                           
    </div>
    <div class="add-review">
      <button class="pop-up-form loading">Tambah Review</button>
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
/*
const createDetailRestaurantTemplate = (restaurant) => `
  <h2 id="catalog-head" class="detail-head">${restaurant.name}</h2>
  <div class="detail">
    <picture class="restaurant-poster lazyload loading">
      <source media="(min-width: 2000px)" srcset="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}">
      <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
      <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}"
        alt="Gambar ${restaurant.name}">
    </picture>
    <div class="detail-content">
      <h3 class="loading">Information</h3>
      <div class="restaurant-info loading">
        <h4 class="loading">Kota</h4>
        <p class="loading">${restaurant.city}</p>
        <h4 class="loading">Alamat</h4>
        <p class="loading">${restaurant.address}</p>
        <h4 class="loading">Deskripsi</h4>
        <p class="loading">${restaurant.description}</p>
      </div>
    </div>
  </div>
  <div class="restaurant-menu-section">
    <h3 class="loading">Menu Restaurant</h3>
    <div class="restaurant-menu">
      <div class="restaurant-food">
        <h4 class="loading">Makanan</h4>
        <ul class="food-list">

        </ul>
      </div>
      <div class="restaurant-drink">
        <h4 class="loading">Minuman</h4>
        <ul class="drink-list">

        </ul>
      </div>
    </div>
  </div>
  <div class="restaurant-review-section">
    <h3 class="loading">Review Pelanggan</h3>
    <div class="customer-review">

    </div>
    <div class="add-review">
      <button class="pop-up-form loading">Tambah Review</button>
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
*/
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
  createRestaurantItemSkeletonTemplate,
  createDetailRestaurantSkeletonTemplate,
  // createDetailRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createErrorTemplate,
};