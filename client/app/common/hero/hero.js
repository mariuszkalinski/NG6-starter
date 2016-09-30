import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';
import Service from '../../services/service';

let heroModule = angular.module('hero', [
  uiRouter
])

.component('hero', heroComponent)
.service('Service', Service)

.name;

export default heroModule;
