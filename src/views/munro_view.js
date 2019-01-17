const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const MunroView = function(container, munro) {
  this.munroContainer = container;
  this.munro = munro;
};


MunroView.prototype.render = function () {
  this.createH3(this.munro.name);
  const list = this.createUl()
  this.createLi(`Meaning: ${this.munro.meaning}.`, list);
  this.createLi(`Height: ${this.munro.height} m`, list);
};

MunroView.prototype.createH3 = function (text) {
  const headingH3 = document.createElement('h3');
  headingH3.textContent = text;
  this.munroContainer.appendChild(headingH3);
};

MunroView.prototype.createUl = function () {
  const list = document.createElement('ul');
  this.munroContainer.appendChild(list);
  return list;
};

MunroView.prototype.createLi = function (textContent, ul) {
  const listItem = document.createElement('li');
  listItem.textContent = textContent;
  ul.appendChild(listItem);
};


module.exports = MunroView;
