function () {
  drawer.classList.remove('open');
}

menu.addEventListerner('click', function (e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
})