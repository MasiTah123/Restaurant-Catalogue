/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

const name = 'Asep';
const review = 'best restaurant';

Feature('Add Review Customer');

Before(({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-item', 5);

  I.seeElement('.restaurant-item-title a');

  I.click(locate('.restaurant-item-title a').first());
  I.seeElement('.pop-up-form');
  I.click('.pop-up-form');
  I.seeElement('#add-form');
});

Scenario('adding review customer', async ({ I }) => {
  pause();
  I.seeElement('#username');
  I.seeElement('#review-text');
  I.seeElement('.btn-submit');

  I.fillField('#username-input', name);
  I.fillField('#review-text', review);

  I.click('.btn-submit');

  I.see('Success to add review', '.swal2-html-container');
  I.see('OK', '.swal2-confirm');
  I.click('.swal2-confirm');
  I.dontSee('.swal2-container');

  I.seeElement('.customer-review');

  const lastUsernameReview = await I.grabTextFrom(locate('.review h4')
    .last());

  const lastTextReview = await I.grabTextFrom(locate('.review .review-text')
    .last());

  assert.strictEqual(lastUsernameReview, name);
  assert.strictEqual(lastTextReview, review);
});