class ContentsController {
  constructor(ContentsService) {
    this.name = "contents";
    this.ContentsService = ContentsService;
    this.contentsList;
  }
  $onInit() {
    // this.usersList = this.UsersService.getUsers();
    this.contentsList = this.ContentsService.getContents;
  }
}

ContentsController.$inject = ['$http'];

export default ContentsController;
