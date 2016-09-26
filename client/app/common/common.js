import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Footer from './footer/footer';
import Search from './search/search';
import CreateUser from './createUser/createUser';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Footer,
  Search,
  CreateUser
])

.name;

export default commonModule;
