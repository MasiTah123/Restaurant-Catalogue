const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurant-catalog');
  I.see('No Favorites Restaurant Found', '.catalog');
});

Scenario('liking restaurant', async ({ I }) => {
  I.see('No Favorites Restaurant Found', '.catalog');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item', 5);

  I.seeElement('.restaurant-item-title a');

  const firstRestaurant = locate('.restaurant-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.see('restaurant added to favorite', '.swal2-html-container');
  I.see('OK', '.swal2-confirm');
  I.click('.swal2-confirm');
  I.dontSee('.swal2-container');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 10);
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item-title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
