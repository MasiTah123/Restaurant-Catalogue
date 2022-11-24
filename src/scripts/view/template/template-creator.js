/* eslint-disable max-len */
const createErrorTemplate = (message) => `
  <h3 id="error-text">${message}</h3>
`;

const createRestaurantItemSkeletonTemplate = () => `
  <template id="restaurant-template">  
    <article class="restaurant-item">
      <div class="restaurant-item-upper">
        <picture class="restaurant-item-thumbnail lazyload">
          <source id="source-large" class="lazyload" media="(min-width: 2000px)">
          <source id="source-small" class="lazyload" media="(max-width: 480px)">
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
  </template>
`;

const createDetailRestaurantSkeletonTemplate = () => `
  <template id="detail-template">
    <h2 id="catalog-head" class="detail-head">
      <div class="loading loading-title-detail"></div>
    </h2>

    <div class="detail">
      <picture class="restaurant-poster lazyload">
        <source id="source-large" media="(min-width: 2000px)">
        <source id="source-small" media="(max-width: 600px)">
        <img id="img-poster" class="lazyload loading" >
      </picture>
      <div class="detail-content">
        <h3 id="information">
          <div class="loading loading-title-info"></div>
        </h3> 
        <div class="restaurant-info">
          <h4 id="kota">
            <div class="loading loading-title-h4"></div>
          </h4>
          <div id="kota-content" class="text-detail">
            <div class="loading loading-location"></div>
          </div>
          <h4 id="alamat">
            <div class="loading loading-title-h4"></div>
          </h4>
          <div id="alamat-content" class="text-detail">
            <div class="loading loading-location"></div>
          </div>
          <h4 id="deskripsi">
            <div class="loading loading-title-h4"></div>
          </h4>
          <div id="deskripsi-content" class="text-detail">
            <div class="loading loading-description-detail"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="restaurant-menu-section">
      <h3 id="menu-restaurant">
        <div class="loading loading-title-menu"></div>
      </h3> 
      <div class="restaurant-menu">
        <div class="restaurant-food">
          <h4 id="makanan">
            <div class="loading loading-title-food"></div>
          </h4>
          <ul class="food-list">
            
          </ul>
        </div>
        <div class="restaurant-drink">
          <h4 id="minuman">
            <div class="loading loading-title-drink"></div>
          </h4>
          <ul class="drink-list">

          </ul>
        </div>
      </div>
    </div>
    <div class="restaurant-review-section">
      <h3 id="review-pelanggan-title">
        <div class="loading loading-title-review"></div>
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
  </template>

`;

const createReviewCustomerTemplate = () => `
  <template id="review-template">  
    <div class="review">
      <h4 class="label" id="username">
        <div class="loading loading-username"></div>
      </h4>
      <div class="review-date" id="date">
        <div class="loading loading-date"></div>
      </div>
      <div class="review-text" id="review-customer">
        <div class="loading loading-review"></div>
      </div>
    </div>
  </template>
`;

const createListFoodTemplate = () => `
  <template id="food-list-template">  
    <li class="list-food">
      <div class="loading loading-list"></div>
    </li>
  </template>
`;

const createListDrinkTemplate = () => `
  <template id="drink-list-template">  
    <li class="list-drink">
      <div class="loading loading-list"></div>
    </li>
  </template>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemSkeletonTemplate,
  createDetailRestaurantSkeletonTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createErrorTemplate,
  createReviewCustomerTemplate,
  createListFoodTemplate,
  createListDrinkTemplate,
};