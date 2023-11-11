class DataService {
  constructor() {
  }
  getData(endpoint, callback) {
    axios
      .get(endpoint)
      .then(function (response) {
        // handle success
        callback(response.data.emberek)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  postData() {}
  putData() {}
  delData() {}
}

export default DataService;
