import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Posts from './posts/posts';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Posts
])

.name;

export default componentModule;
