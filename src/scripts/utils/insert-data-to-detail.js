const setFoodAndDrinkAndReview = {
  setFood(food) {
    return `
    <li>${food.name}</li>
    `;
  },

  setDrink(drink) {
    return `
    <li>${drink.name}</li>
    `;
  },

  setReview(review) {
    return `<div class="review">
    <h4>${review.name}</h4>
    <p class="review-date">${review.date}</p>
    <p class="review-text">${review.review}</p>
  </div>`;
  },
};

const insertDataToDetail = {
  init({
    foods,
    drinks,
    reviews,
    elements,
  }) {
    this._elements = elements;

    this._insertFood(foods);
    this._insertDrink(drinks);
    this._insertReview(reviews);
  },

  _insertFood(foods) {
    const foodList = this._elements.food;
    foodList.innerHTML = '';
    foods.forEach((food) => {
      foodList.innerHTML += setFoodAndDrinkAndReview.setFood(food);
    });
  },

  _insertDrink(drinks) {
    const drinkList = this._elements.drink;
    drinkList.innerHTML = '';
    drinks.forEach((drink) => {
      drinkList.innerHTML += setFoodAndDrinkAndReview.setDrink(drink);
    });
  },

  _insertReview(reviews) {
    const reviewList = this._elements.review;
    reviewList.innerHTML = '';
    reviews.forEach((review) => {
      reviewList.innerHTML += setFoodAndDrinkAndReview.setReview(review);
    });
  },
};

export default insertDataToDetail;