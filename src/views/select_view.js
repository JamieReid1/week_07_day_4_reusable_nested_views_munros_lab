const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-data-loaded', (evt) => {
    const allMunros = event.detail
    allRegions = allMunros.map(munro => munro.region)
    uniqueRegions = Array.from(new Set(allRegions))
    this.populate(uniqueRegions)
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex)
  });
};

SelectView.prototype.populate = function (uniqueRegions) {
  uniqueRegions.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
