import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';


import { APICaller } from './businesslogic.js'

$('#doctorForm').submit(function(e){
  e.preventDefault()
  $('.table').show()

  let query = $('#query').val()
  let location = '47.606,-122.332,100'
  let $results = $('#doctorResults').empty()
  let $noResults = $('#noResults').empty()
  let $callFail = $('#callFail').empty()

  APICaller(query, location).then(function(response) {
    if (!response.data.length) {
      $noResults.text("I'm sorry, no doctors meet that criteria. Please try searching again with less specific criteria.")
    } else {
      for (let i = 0; i < response.data.length; i++) {
        let doctor = response.data[i]
        let practice = doctor.practices[0]
        let $row = $('<tr></tr>').appendTo($results)

        let $name = $('<td></td>').appendTo($results)
        let $address = $('<td></td>').appendTo($results)
        let $phone = $('<td></td>').appendTo($results)
        let $acceptsNewPatients = $('<td></td>').appendTo($results)
        let $website = $('<td></td>').appendTo($results)

        $name.text(`${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}`)

        if(practice){
          $address.text(`${practice.visit_address.street} ${practice.visit_address.city} ${practice.visit_address.zip}`)
          $phone.text(practice.phones[0].number)
          $acceptsNewPatients.text(practice.accepts_new_patients)
          if (!practice.website) {
            $website.text("Unavaiable")
          } else {
            $website.html(`<a href="${practice.website}" target="_blank">${practice.name}</a>`)
          }
        }
      }
    }
  }).fail(function(){
    $callFail.text("Doctor information API call failure. Please try again.")
  });

});
