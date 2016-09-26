class HeroController {
  constructor(UsersService) {
    "ngInject";
    this.UsersService = UsersService;

    // this.usersList = this.UsersService.getUsers();



    this.name = 'hero';
  }
  // $onInit() {
  //   this.usersList = this.UsersService.getUsers();
  // }
  $onChanges() {
    this.usersList = this.UsersService.getUsers();
  }
}

export default HeroController;
