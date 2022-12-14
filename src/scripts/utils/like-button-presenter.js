import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/template/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant, favoriteRestaurants }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await this._favoriteRestaurants.getRestaurant(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      import('sweetalert2')
        .then((module) => module.default)
        .then((Swal) => Swal.fire({
          title: 'Success!',
          text: 'restaurant added to favorite',
          icon: 'success',
        }));
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      import('sweetalert2')
        .then((module) => module.default)
        .then((Swal) => Swal.fire({
          title: 'Success!',
          text: 'restaurant removed from favorite',
          icon: 'success',
        }));

      this._renderButton();
    });
  },

};

export default LikeButtonPresenter;