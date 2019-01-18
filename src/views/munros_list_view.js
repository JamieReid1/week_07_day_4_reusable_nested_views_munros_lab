const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');


const MunrosListView = function(container) {
  this.container = container
};


let uniqueRegions;

MunrosListView.prototype.bindEvents = function () {
  let index;
  let munros
  PubSub.subscribe('Munros:munro-data-loaded', (event) => {
    munros = event.detail
    allRegions = munros.map(munro => munro.region)
    uniqueRegions = Array.from(new Set(allRegions))
  });
  PubSub.subscribe('SelectView:change', (event) => {
    index = event.detail;
    this.render(munros, index)
  })
};

MunrosListView.prototype.render = function (munros, index) {
  this.container.innerHTML = '';
  munros.forEach(munro => {
    if (munro.region === uniqueRegions[index]) {
    const selectedMunro = new MunroView(this.container, munro);
    selectedMunro.render();
    }
  });

};


module.exports = MunrosListView;
