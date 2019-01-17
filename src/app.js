const Munros = require('./models/munros.js');
const MunroView = require('./views/munro_view.js');
const MunrosListView = require('./views/munros_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munros = new Munros();
  munros.bindEvents();

});
