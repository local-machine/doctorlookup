import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Constructor-Name } from './backend-code';

$(function() {
  $('#doctorList').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors/?query=${city}&user_key= [API-KEY-GOES-HERE]`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showName').text(`Doctor Name: ${response.data.profile.first_name}%` + " " + `${response.data.profile.last_name}%`);
        $('.showAddress').text(`Address: ${response.data.practices[0].visit_address_street}%` + " " + `${response.data.practices[0].visit_address_street2}%` + " " + `${response.data.practices[0].visit_address.zip}%`);
        // $('.showWebsite').text(`Website: ${response.data.practice.website}.`);
        $('.showAcceptingNewPatients').text(`Accepting New Patients: ${response.data.practice[0].accepts_new_patients}%`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
