const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Munros = function() {
    this.data = [];
};


Munros.prototype.bindEvents = function () {
  this.getData();
};

Munros.prototype.getData = function () {
  const url = 'https:munroapi.herokuapp.com/munros';
  const request = new RequestHelper(url);
  const myPromise = request.get();
  myPromise.then((data) => {
    console.dir(data);
    this.data = data;
    PubSub.publish('Munros:munro-data-loaded', this.data);
  })
  .catch((error) => {
    console.error(error);
  })
};

module.exports = Munros;
