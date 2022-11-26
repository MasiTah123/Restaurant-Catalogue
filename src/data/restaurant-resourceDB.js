import API_ENDPOINT from '../scripts/globals/api-endpoint';

class RestaurantDataSource {
  static async restaurantKatalog() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_KATALOG);
    if (!response.ok) {
      throw new Error('Failed to get data');
    }
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    if (!response.ok) {
      throw new Error('Failed to get detail');
    }
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviewCustomer(data) {
    if (data.name === '' || data.name === undefined) {
      throw new Error('username is needed');
    }

    if (data.review === '' || data.review === undefined) {
      throw new Error('review is needed');
    }
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default RestaurantDataSource;