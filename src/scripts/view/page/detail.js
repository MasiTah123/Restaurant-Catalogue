import UrlParser from '../../routes/url-parser';
// import RestaurantDataSource from '../../../data/restaurant-resourceDB';
import { createDetailRestaurantSkeletonTemplate, createErrorTemplate } from '../template/template-creator';
// import insertDataToDetail from '../../utils/insert-data-to-detail';
// import LikeButtonInitiator from '../../utils/like-button-initiator';
// import AddReview from '../../utils/add-review';

const Detail = {
  async render() {
    return `
    <section class="restaurant-detail" id="restaurant-detail">
    
    </section>
    <div id="likeButtonContainer"></div>
    `;
  },

  async addSkeleton() {
    const template = document.createElement('template');
    template.id = 'detail-template';
    template.innerHTML = createDetailRestaurantSkeletonTemplate();
    const restaurantDetail = document.querySelector('#restaurant-detail');
    restaurantDetail.append(template);
    restaurantDetail.append(template.content.cloneNode(true));
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = document.querySelector('#restaurant-detail');
    /*
    try {
      const restaurant = await RestaurantDataSource.detailRestaurant(url.id);

      restaurantDetail.innerHTML = createDetailRestaurantTemplate(restaurant);
      document.querySelectorAll('.loading').forEach((el) => el.classList.remove('loading'));

      LikeButtonInitiator.init({
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
      });

      insertDataToDetail.init({
        foods: restaurant.menus.foods,
        drinks: restaurant.menus.drinks,
        reviews: restaurant.customerReviews,
        elements: {
          food: document.querySelector('.food-list'),
          drink: document.querySelector('.drink-list'),
          review: document.querySelector('.customer-review'),
        },
      });

      AddReview.init({
        id: url.id,
        popupBtn: document.querySelector('.pop-up-form'),
        addForm: document.querySelector('#add-form'),
        reviewElement: document.querySelector('.customer-review'),
      });
    } catch (err) {
      document.querySelector('.preloader-item').style.display = 'none';
      restaurantDetail.innerHTML = createErrorTemplate(err);
    }
    */
  },
};

export default Detail;