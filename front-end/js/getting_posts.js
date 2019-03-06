window.onload = function start() {
  var resultElement = document.getElementById("post_part");
  resultElement.innerHTML = "";

  axios
    .post("http://localhost:3000/pageInfo", { page_name: "blog" })
    .then(function(response) {
      console.log(response);
      let head = document.getElementById("page_title");
      document.getElementById("page_title").innerHTML =
        response.data[0].page_title;
      document.getElementById("nav_but").innerHTML = response.data[0].page_nav;
      document.getElementById("page_footer").innerHTML =
        response.data[0].page_footer;
      document.getElementById("page_intro").innerHTML =
        response.data[0].page_intro;
      document.getElementById("intro_label").innerHTML =
        response.data[0].intro_label;
    })
    .catch(function(error) {
      console.log(error);
    });

  axios
    .post("http://localhost:3000/getform", { form_name: "contact_form" })
    .then(function(response) {
      console.log(response);
      document.getElementById("form_intro").innerHTML =
        response.data[0].form_intro;
      document.getElementById("name_label").innerHTML =
        response.data[0].name_label;
      document.getElementById("email_label").innerHTML =
        response.data[0].email_label;
      document.getElementById("male_label").innerHTML =
        response.data[0].male_label;
      document.getElementById("female_label").innerHTML =
        response.data[0].female_label;
      document.getElementById("opinion_label").innerHTML =
        response.data[0].opinion_label;
      document.getElementById("submit_but").innerHTML =
        response.data[0].submit_but;
    })
    .catch(function(error) {
      console.log(error);
    });

  axios
    .post("http://localhost:3000/getformoptions", { form_name: "contact_form" })
    .then(function(response) {
      console.log(response);
      let temp = document.getElementById("select_div");
      let html_code =
        '<select class="" name="occupation" id="occupation" style="display: block;">';
      response.data.map((item, key) => {
        html_code +=
          ' <option value="' + item.value + '">' + item.occ_name + "</option>";
      });
      html_code += "</select>";
      temp.innerHTML += html_code;
    })
    .catch(function(error) {
      console.log(error);
    });

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
