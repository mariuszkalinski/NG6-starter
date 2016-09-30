class HeroController {
  constructor(UsersService, Service) {
    "ngInject";
    this.UsersService = UsersService;
    this.Service = Service;
    // this.usersList = this.UsersService.getUsers();
    this.name = 'hero';
  }

  $onInit() {
    // this.usersList = this.UsersService.getUsers();
    this.filter = this.Service.filter;
  }

  $onChanges(change) {
    this.usersList = this.UsersService.getUsers();
  }

}

export default HeroController;
