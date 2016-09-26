class createUserController {
  constructor($state, UsersService) {
    "ngInject";
    this.$state       = $state;
    this.UsersService = UsersService;
    this.user = {};
  }
  addUser() {
    if(!this.user.name) return console.log('user Name is Required');
    if(!this.user.photo) return console.log('user Profile photo URL is required');
    this.UsersService.createUser(this.user);

    // reset the form
    this.user = {};

    // go to home page, to see our entry
    // this.$state.go('app.home');
  }

}

export default createUserController;
