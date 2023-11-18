class DataService {
  constructor() {
    axios.defaults.baseURL="http://127.0.0.1:8000/"
  }
  getData(endpoint, callback) {
    console.log("endpoint", endpoint)
    axios
      .get(endpoint)
      .then(function (response) {
        // handle success
        callback(response.data.writers)
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
