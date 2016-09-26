import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponent from './footer.component';

let footerModule = angular.module('footer', [
  uiRouter
])

// .config(($stateProvider) => {
//   "ngInject";
//   $stateProvider
//     .state('footer', {
//       url: '/footer',
//       component: 'footer'
//     });
// })

.component('footer', footerComponent)

.name;

export default footerModule;
