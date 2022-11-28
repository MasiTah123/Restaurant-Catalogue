/* eslint-disable no-undef */
Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-item', 5);

  I.seeElement('.restaurant-item-title a');

  I.click(locate('.restaurant-item-title a').first());

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.see('restaurant added to favorite', '.swal2-html-container');
  I.see('OK', '.swal2-confirm');
  I.click('.swal2-confirm');
  I.dontSee('.swal2-container');
});

Scenario('Showing one liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  I.seeElement('.restaurant-item-title a');
});

Scenario('Unliking one liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-item-title a');

  I.click(locate('.restaurant-item-title a').first());

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.see('restaurant removed from favorite', '.swal2-html-container');
  I.see('OK', '.swal2-confirm');
  I.click('.swal2-confirm');
  I.dontSee('.swal2-container');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant-catalog');
  I.see('No Favorites Restaurant Found', '.catalog');
});