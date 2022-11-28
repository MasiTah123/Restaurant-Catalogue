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
      const Name = document.querySelector('#username-input').value;
      const Review = document.querySelector('#review-text').value;

      const data = this._combineData(id, Name, Review);

      try {
        const addedReview = await RestaurantDataSource.addReviewCustomer(data);
        import('sweetalert2')
          .then((module) => module.default)
          .then((Swal) => Swal.fire({
            title: 'Success!',
            text: 'Success to add review',
            icon: 'success',
          }));

        addForm.reset();
        this._renderReviewAfterAdding(addedReview, reviewElement);
      } catch (err) {
        import('sweetalert2')
          .then((module) => module.default)
          .then((Swal) => Swal.fire({
            title: 'Error!',
            text: `${err}`,
            icon: 'error',
          }));

        addForm.reset();
      }
    });
  },

  _renderReviewAfterAdding(reviews, element) {
    const reviewList = element;
    reviewList.innerHTML = '';
    reviews.forEach((review) => {
      reviewList.innerHTML += `
      <div class="review">
        <h4 class="label" id="username">${review.name}</h4>
        <div class="review-date" id="date">${review.date}</div>
        <div class="review-text" id="review-customer">${review.review}</div>
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