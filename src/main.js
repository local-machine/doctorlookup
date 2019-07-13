import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Constructor-Name } from './backend-code';
var apiKey = require('./../.env').apiKey;



// Function to extract the doctors in Seattle, WA using query within the API call
let city = 'seattle, wa'
$.get(`https://api.betterdoctor.com/2016-03-01/doctors/?query=${city}&user_key=${apiKey}`).then(function(response) {
  console.log(response)
  // let city = $('#location').val();
  for (let i = 0; i < response.data.length; i++) {
    let doctor = response.data[i]
    let $results = $('#doctorResultsSeattle')
    $results.append(`<tr><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td></tr>`)
  }
  // $('#location').val("");
}).fail(function(){
  alert("Doctor information API call failure. Please try again.")
});

// Function to extract the doctors based on an ailment using query within the API call
let ailment = 'toothache'
$.get(`https://api.betterdoctor.com/2016-03-01/doctors/?query=${ailment}&user_key=${apiKey}`).then(function(response) {
  console.log(response)
  for (let i = 0; i < response.data.length; i++) {
    let doctor = response.data[i]
    let $results = $('#doctorResults')
    $results.append(`<tr><td>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</td></tr>`)
  }
}).fail(function(){
  alert("Doctor information API call failure. Please try again.")
});

//Function to extract the doctors practice information
