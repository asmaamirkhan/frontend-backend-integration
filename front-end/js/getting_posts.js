window.onload = function start() {
  var resultElement = document.getElementById("post_part");
  resultElement.innerHTML = "";

  axios
    .get("http://localhost:3000/posts")
    .then(function(response) {
      console.log(response);
      response.data.map((item, key) => {
        let my_div = document.getElementById("post_part");
        let date = new Date(item.post_date);
        date =
          date.getDay() +
          1 +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear();
        let html_code =
          '<div class="col-12"><h2 class="tm-question-header">' +
          (key + 1) +
          ". " +
          item.post_title +
          "</h2><p>" +
          item.post_content +
          '<h6 style="float: left;">Post Date: ' +
          date +
          '</h6><h6 style="float: right;">Post writer: ' +
          item.post_writer +
          "</h6><br><hr>";
        my_div.innerHTML += html_code;
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};
