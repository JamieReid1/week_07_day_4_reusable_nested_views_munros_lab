const Munros = require('./models/munros.js');
const MunroView = require('./views/munro_view.js');
const MunrosListView = require('./views/munros_list_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#munros')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const munrosListContainer = document.querySelector('#munros-list');
  const munrosListView = new MunrosListView(munrosListContainer);
  munrosListView.bindEvents();



  const munros = new Munros();
  munros.bindEvents();

});
