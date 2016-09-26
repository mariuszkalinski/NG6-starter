import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createUserComponent from './createUser.component';

let createUserModule = angular.module('createUser', [
  uiRouter
])

.component('createUser', createUserComponent)

.name;

export default createUserModule;
