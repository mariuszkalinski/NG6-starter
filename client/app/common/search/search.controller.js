class SearchController {
  constructor($state, UsersService, Service) {
    "ngInject";
    this.$state       = $state;
    this.UsersService = UsersService;
    this.Service = Service;
  }

  getUsersList(text){
    this.UsersService.getUsers(text);
  }

  $onInit() {
    this.filter = this.Service.filter;
    this.usersList = [];
  // this.search = {};
  }
}

export default SearchController;
