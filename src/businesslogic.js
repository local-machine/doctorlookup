import $ from 'jquery';

export function APICaller (query, location){
  return $.get(`https://api.betterdoctor.com/2016-03-01/doctors/?location=${location}&query=${query}&user_key=${process.env.exports.apiKey}`);
}
