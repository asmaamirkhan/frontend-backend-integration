window.onload = function start() {
  var resultElement = document.getElementById("question_part");
  resultElement.innerHTML = "";

  axios
    .post("http://localhost:3000/pageInfo", { page_name: "home_page" })
    .then(function(response) {
      console.log(response);
      let head = document.getElementById("page_title");
      document.getElementById("page_title").innerHTML =
        response.data[0].page_title;
      document.getElementById("page_intro").innerHTML =
        response.data[0].page_intro;
      document.getElementById("intro_label").innerHTML =
        response.data[0].intro_label;
      document.getElementById("nav_but").innerHTML = response.data[0].page_nav;
      document.getElementById("page_footer").innerHTML =
        response.data[0].page_footer;
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
      //occSelect = document.getElementById("occupation");
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
    .get("http://localhost:3000/questions")
    .then(function(response) {
      response.data.map((item, key) => {
        let my_div = document.getElementById("question_part");
        let html_code =
          '<div class="col-12"><h2 class="tm-question-header">Question ' +
          (key + 1) +
          "</h2><p>" +
          item.question_content +
          '</p><div class="tm-q-choice-container"><label class="tm-q-choice"><div class="mb-3">' +
          '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="' +
          item.question_id +
          '_a" /><span>A. ' +
          item.a_option +
          '</span></div></label><label class="tm-q-choice"><div class="mb-3">' +
          '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="' +
          item.question_id +
          '_b" /><span>B. ' +
          item.b_option +
          '</span></div></label><label class="tm-q-choice"><div class="mb-3">' +
          '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="' +
          item.question_id +
          '_c" /><span>C. ' +
          item.c_option +
          '</span></div></label><label class="tm-q-choice"><div class="mb-3">' +
          '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="' +
          item.question_id +
          '_d" /><span>D. ' +
          item.d_option +
          '</span></div></label><label class="tm-q-choice"><div class="mb-3">' +
          '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="' +
          item.question_id +
          '_e" /><span>E. ' +
          item.e_option +
          '</span></div></label></div></div><div class="col-12"><hr></div>';

        my_div.innerHTML += html_code;
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};
