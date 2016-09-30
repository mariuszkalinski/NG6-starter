import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ContentsComponent from './contents.component';
import ContentsService from './contents.service';

let contentsModule = angular.module('contents', [])

.component('contents', ContentsComponent)
.service('ContentsService', ContentsService)
.name;

export default contentsModule;
