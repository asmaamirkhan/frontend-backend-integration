window.onload = function start() {
  var resultElement = document.getElementById("question_part");
  resultElement.innerHTML = "";

  axios
    .get("http://localhost:3000/questions")
    .then(function(response) {
      response.data.map((item,key) => {
        let my_div = document.getElementById("question_part");
      let html_code =
        '<div class="col-12"><h2 class="tm-question-header">Question ' +
        (key+1) +
        "</h2><p>" +
        item.question_content +
        '</p><div class="tm-q-choice-container"><label class="tm-q-choice"><div class="mb-3">' +
        '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="'+item.question_id+'_a" /><span>A. ' +
        item.a_option +
        '</span></div></label><label class="tm-q-choice"><div class="mb-3">' +
        '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="'+item.question_id+'_b" /><span>B. ' +
        item.b_option +
        '</span></div></label><label class="tm-q-choice"><div class="mb-3">' +
        '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="'+item.question_id+'_c" /><span>C. ' +
        item.c_option +
        '</span></div></label><label class="tm-q-choice"><div class="mb-3">' +
        '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="'+item.question_id+'_d" /><span>D. ' +
        item.d_option +
        '</span></div></label><label class="tm-q-choice"><div class="mb-3">' +
        '<input class="tm-radio-group-1 with-gap" name="q1" type="radio" value="'+item.question_id+'_e" /><span>E. ' +
        item.e_option+'</span></div></label></div></div><div class="col-12"><hr></div>' ;

     
      my_div.innerHTML += html_code;
    });
      
    })
    .catch(function(error) {
      console.log(error);
    });
};

