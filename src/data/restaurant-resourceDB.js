import API_ENDPOINT from '../scripts/globals/api-endpoint';

class RestaurantDataSource {
  static async restaurantKatalog() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_KATALOG);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviewCustomer(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantDataSource;