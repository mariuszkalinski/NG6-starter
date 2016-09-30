class ContentsService {
  constructor($http) {
    this.$http = $http;
  }
  getContents() {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts').then(response => response.data)
  }
}

ContentsService.$inject = ['$http'];

export default ContentsService;
