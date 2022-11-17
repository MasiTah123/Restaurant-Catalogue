import RestaurantDataSource from '../../data/restaurant-resourceDB';

const AddReview = {
  init({
    id,
    popupBtn,
    addForm,
    reviewElement,
  }) {
    popupBtn.addEventListener('click', (event) => {
      this._formPopUp(event, addForm);
    });

    addForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log(reviewElement);
      const Name = document.querySelector('#username').value;
      const Review = document.querySelector('#review-text').value;
      const data = this._combineData(id, Name, Review);
      const addedReview = await RestaurantDataSource.addReviewCustomer(data);
      console.log(addedReview);
      this._renderReviewAfterAdding(addedReview, reviewElement);
    });
  },

  _renderReviewAfterAdding(reviews, element) {
    const reviewList = element;
    reviewList.innerHTML = '';
    reviews.forEach((review) => {
      reviewList.innerHTML += `
      <div class="review">
        <h4>${review.name}</h4>
        <p class="review-date">${review.date}</p>
        <p class="review-text">${review.review}</p>
      </div>
      `;
    });
  },

  _formPopUp(event, addForm) {
    event.stopPropagation();
    addForm.classList.toggle('close');
  },

  _combineData(Id, Name, Review) {
    return {
      id: Id,
      name: Name,
      review: Review,
    };
  },
};

export default AddReview;