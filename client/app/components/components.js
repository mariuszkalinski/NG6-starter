import angular from 'angular';
import Home from './home/home';
import About from './about/about';
// import Footer from './footer/footer';

let componentModule = angular.module('app.components', [
  Home,
  About,
  // Footer
])

.name;

export default componentModule;
