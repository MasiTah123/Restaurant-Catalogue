/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

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
  const url = await I.grabCurrentUrl();
  const splitedUrl = url.split('/');
  const Id = splitedUrl[splitedUrl.length - 1];
  const Name = 'Asep';
  const Review = 'best restaurant';

  I.seeElement('#username');
  I.seeElement('#review-text');
  I.seeElement('.btn-submit');

  I.fillField('#username-input', Name);
  I.fillField('#review-text', Review);

  I.click('.btn-submit');

  // eslint-disable-next-line no-unused-vars
  const response = await I.sendPostRequest('review', {
    id: Id,
    name: Name,
    review: Review,
  });

  I.seeResponseCodeIsSuccessful();

  I.see('Success to add review', '#swal2-html-container');
  I.see('OK', '.swal2-confirm');
  I.click('.swal2-confirm');
  I.dontSee('.swal2-container');

  I.seeElement('.customer-review');

  const lastUsernameReview = await I.grabTextFrom(locate('.review h4')
    .last());

  const lastTextReview = await I.grabTextFrom(locate('.review .review-text')
    .last());

  assert.strictEqual(lastUsernameReview, Name);
  assert.strictEqual(lastTextReview, Review);
});

Scenario('adding customer review without value', async ({ I }) => {
  const url = await I.grabCurrentUrl();
  const splitedUrl = url.split('/');
  const Id = splitedUrl[splitedUrl.length - 1];
  const Name = '';
  const Review = '';

  I.seeElement('#username');
  I.seeElement('#review-text');
  I.seeElement('.btn-submit');

  I.fillField('#username-input', Name);
  I.fillField('#review-text', Review);

  I.click('.btn-submit');

  // eslint-disable-next-line no-unused-vars
  const response = await I.sendPostRequest('review', {
    id: Id,
    name: Name,
    review: Review,
  });

  I.seeResponseCodeIsClientError();

  I.see('Error: username is needed', '#swal2-html-container');
  I.see('OK', '.swal2-confirm');
  I.click('.swal2-confirm');
  I.dontSee('.swal2-container');

  I.seeElement('.customer-review');
});

Scenario('adding customer review without username but with review value', async ({ I }) => {
  const url = await I.grabCurrentUrl();
  const splitedUrl = url.split('/');
  const Id = splitedUrl[splitedUrl.length - 1];
  const Name = '';
  const Review = 'Good';

  I.seeElement('#username');
  I.seeElement('#review-text');
  I.seeElement('.btn-submit');

  I.fillField('#username-input', Name);
  I.fillField('#review-text', Review);

  I.click('.btn-submit');

  // eslint-disable-next-line no-unused-vars
  const response = await I.sendPostRequest('review', {
    id: Id,
    name: Name,
    review: Review,
  });

  I.seeResponseCodeIsClientError();

  I.see('Error: username is needed', '#swal2-html-container');
  I.see('OK', '.swal2-confirm');
  I.click('.swal2-confirm');
  I.dontSee('.swal2-container');

  I.seeElement('.customer-review');
});

Scenario('adding customer review without review', async ({ I }) => {
  const url = await I.grabCurrentUrl();
  const splitedUrl = url.split('/');
  const Id = splitedUrl[splitedUrl.length - 1];
  const Name = 'Adi';
  const Review = '';

  I.seeElement('#username');
  I.seeElement('#review-text');
  I.seeElement('.btn-submit');

  I.fillField('#username-input', Name);
  I.fillField('#review-text', Review);

  I.click('.btn-submit');

  // eslint-disable-next-line no-unused-vars
  const response = await I.sendPostRequest('review', {
    id: Id,
    name: Name,
    review: Review,
  });

  I.seeResponseCodeIsClientError();

  I.see('Error: review is needed', '#swal2-html-container');
  I.see('OK', '.swal2-confirm');
  I.click('.swal2-confirm');
  I.dontSee('.swal2-container');

  I.seeElement('.customer-review');
});