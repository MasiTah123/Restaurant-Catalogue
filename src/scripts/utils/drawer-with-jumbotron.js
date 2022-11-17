const drawerWithJumbotron = {
  init({ jumbotron, drawer }) {
    jumbotron.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default drawerWithJumbotron;