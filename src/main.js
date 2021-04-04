import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Catalog } from './course-catalog.js';

function displayClasses(coursesPicked) {
  for (let i = 0; i <= 11; i++) {
    if (coursesPicked === Catalog["courses"][i]["course-title"]) {
      return Catalog["courses"][i];
    }
  }
}

$(document).ready(function() {
  $("#submitcourse").click(function(event) {
    event.preventDefault();
    $("#formOne").hide();
    $("#submit").hide();

    const name = $("input#name").val();
    const age = $("input#age").val();
    const careerPicked = $("input:radio[name=career]:checked").val();
    const electivePicked = $("input:radio[name=elective]:checked").val()$("input:checkbox[")
    const langsPicked = [];
    $("input:checkbox[name=language]:checked").each(function() {
      const pickLang = $(this).val();
      langsPicked.push(pickLang);
    });

    $("#results").show();
    $(".coursesPicked").text(JSON.stringify(displayClasses(coursePicked)));
  });
});