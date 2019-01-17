const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-data-loaded', (evt) => {
    const allMunros = event.detail
    console.log(event);
    allRegions = allMunros.map(munro => munro.region)
    uniqueRegions = Array.from(new Set(allRegions))
    console.log(uniqueRegions);
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
