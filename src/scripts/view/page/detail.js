import UrlParser from '../../routes/url-parser';
import RestaurantDataSource from '../../../data/restaurant-resourceDB';
import {
  createDetailRestaurantSkeletonTemplate,
  createErrorTemplate,
  createReviewCustomerTemplate,
  createListFoodTemplate,
  createListDrinkTemplate,
} from '../template/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import AddReview from '../../utils/add-review';
import CONFIG from '../../globals/config';
import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb';

const Detail = {
  async render(element) {
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = `
    <section class="restaurant-detail" id="restaurant-detail">
    
    </section>
    <div id="likeButtonContainer"></div>
    `;
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = document.querySelector('.restaurant-detail');
    restaurantDetail.innerHTML = createDetailRestaurantSkeletonTemplate();
    const templateDetail = document.getElementById('detail-template');
    restaurantDetail.append(templateDetail.content.cloneNode(true));

    const foodList = document.querySelector('.food-list');
    const drinkList = document.querySelector('.drink-list');
    const customerReview = document.querySelector('.customer-review');

    foodList.innerHTML = createListFoodTemplate();
    drinkList.innerHTML = createListDrinkTemplate();
    customerReview.innerHTML = createReviewCustomerTemplate();

    const templateFoodList = document.getElementById('food-list-template');
    const templateDrinkList = document.getElementById('drink-list-template');
    const templateReview = document.getElementById('review-template');

    try {
      const restaurant = await RestaurantDataSource.detailRestaurant(url.id);
      const reviewsList = restaurant.customerReviews;
      const { foods, drinks } = restaurant.menus;

      for (let i = 0; i < reviewsList.length; i += 1) {
        customerReview.append(templateReview.content.cloneNode(true));
      }

      for (let i = 0; i < foods.length; i += 1) {
        foodList.append(templateFoodList.content.cloneNode(true));
      }

      for (let i = 0; i < drinks.length; i += 1) {
        drinkList.append(templateDrinkList.content.cloneNode(true));
      }
    } catch (err) {
      restaurantDetail.style.display = 'flex';
      restaurantDetail.innerHTML = createErrorTemplate(err);
    }
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = document.querySelector('#restaurant-detail');

    const templateDetail = document.getElementById('detail-template');
    const templateFoodList = document.getElementById('food-list-template');
    const templateDrinkList = document.getElementById('drink-list-template');
    const templateReviewList = document.getElementById('review-template');

    try {
      const restaurant = await RestaurantDataSource.detailRestaurant(url.id);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
          address: restaurant.address,
        },
        favoriteRestaurants: FavoriteRestaurantIdb,
      });

      restaurantDetail.innerHTML = '';
      const divDetail = templateDetail.content.cloneNode(true);

      // insert data to detail template
      divDetail.getElementById('catalog-head').innerHTML = restaurant.name;
      divDetail.getElementById('source-large').scrset = `${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}`;
      divDetail.getElementById('source-small').scrset = `${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}`;
      divDetail.getElementById('img-poster').src = `${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}`;
      divDetail.getElementById('img-poster').alt = `Gambar ${restaurant.name}`;
      divDetail.getElementById('img-poster').classList.remove('loading');
      divDetail.getElementById('information').innerHTML = 'Information';
      divDetail.getElementById('kota').innerHTML = 'Kota';
      divDetail.getElementById('kota-content').innerHTML = restaurant.city;
      divDetail.getElementById('alamat').innerHTML = 'Alamat';
      divDetail.getElementById('alamat-content').innerHTML = restaurant.address;
      divDetail.getElementById('deskripsi').innerHTML = 'Deskripsi';
      divDetail.getElementById('deskripsi-content').innerHTML = restaurant.description;
      divDetail.getElementById('menu-restaurant').innerHTML = 'Menu Restaurant';
      divDetail.getElementById('makanan').innerHTML = 'Makanan';
      divDetail.getElementById('minuman').innerHTML = 'Minuman';
      divDetail.getElementById('review-pelanggan-title').innerHTML = 'Review Pelanggan';
      divDetail.querySelector('.pop-up-form').classList.remove('loading');
      divDetail.querySelector('.food-list').append(templateFoodList);
      divDetail.querySelector('.drink-list').append(templateDrinkList);
      divDetail.querySelector('.customer-review').append(templateReviewList);

      restaurantDetail.append(divDetail);

      // preapare for insert data to food, drink, and review list
      const reviews = restaurant.customerReviews;
      const { foods, drinks } = restaurant.menus;

      // insert data to food list
      const foodList = document.querySelector('.food-list');
      const foodListTemplate = document.getElementById('food-list-template');

      foodList.innerHTML = '';

      foods.forEach((food) => {
        const foodDiv = foodListTemplate.content.cloneNode(true);

        foodDiv.querySelector('.list-food').innerHTML = food.name;

        foodList.append(foodDiv);
      });

      // insert data to drink list
      const drinkList = document.querySelector('.drink-list');
      const drinkListTemplate = document.getElementById('drink-list-template');

      drinkList.innerHTML = '';

      drinks.forEach((drink) => {
        const drinkDiv = drinkListTemplate.content.cloneNode(true);

        drinkDiv.querySelector('.list-drink').innerHTML = drink.name;

        drinkList.append(drinkDiv);
      });

      // insert data to review list
      const reviewList = document.querySelector('.customer-review');
      const reviewListTemplate = document.getElementById('review-template');

      reviewList.innerHTML = '';

      reviews.forEach((review) => {
        const reviewDiv = reviewListTemplate.content.cloneNode(true);

        reviewDiv.querySelector('.username').innerHTML = review.name;
        reviewDiv.getElementById('date').innerHTML = review.date;
        reviewDiv.getElementById('review-customer').innerHTML = review.review;

        reviewList.append(reviewDiv);
      });

      AddReview.init({
        id: url.id,
        popupBtn: document.querySelector('.pop-up-form'),
        addForm: document.querySelector('#add-form'),
        reviewElement: document.querySelector('.customer-review'),
      });
    } catch (err) {
      restaurantDetail.style.display = 'flex';
      restaurantDetail.innerHTML = createErrorTemplate(err);
    }
  },
};

export default Detail;