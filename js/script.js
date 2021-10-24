'use strict';

const x = 4;
const y = 9;
const r = 10;

const h = Math.sqrt(x ** 2 + y ** 2);

h <= r ? console.log('Точка находится в окружности') : console.log('Точка вне окружности!');