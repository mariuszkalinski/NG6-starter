import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchComponent from './search.component';
import Service from '../../services/service';

let searchModule = angular.module('search', [
  uiRouter
])

.component('search', searchComponent)
.service('Service', Service)

.name;

export default searchModule;
