class DataService {
  constructor() {
    axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
  }
  getData(endpoint, callback, errorMessage) {
    axios
      .get(endpoint)
      .then(function (response) {
        // handle success
        callback(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("error: ", error);
        // errorMessage(error)
      })
      .finally(function () {
        // always executed
      });
  }

  postData() {}
  putData() {}

  delData(endpoint, id, callback, errorMessage) {
    axios
      .delete(endpoint + `/` + id)
      .then(function (response) {
        // handle success
        callback(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(endpoint)
        // errorMessage(error)
      })
      .finally(function () {
        // always executed
      });
}

}

export default DataService;
