class SearchController {
  constructor($state, UsersService) {
    "ngInject";
    this.$state       = $state;
    this.UsersService = UsersService;
    this.usersList = [];
    this.search = {};
  }

  getUsersList(text){
    console.log(text);
    console.log(this.UsersService.getUsers(text));
    this.UsersService.getUsers(text);

  }

}

export default SearchController;
