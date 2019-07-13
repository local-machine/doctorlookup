# Doctor Lookup

#### _A web site to find medical professionals in the area. - July 7th, 2019_

#### _By **Jessica Munoz**_

## Description

On this web site, the user can search for a doctor in the area.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **User submits medical ailment and the app returns doctors to treat that medical condition in the Seattle, WA area.** | toothache | List of doctors in Seattle that treat toothaches. |
| **User submits name and the app returns doctors that meet name search criteria in the Seattle, WA area.** | Goldstein | List of doctors in Seattle with name of Goldstein |
| **User submits query that returns doctor, the results include specific doctor details** | Goldstein | Barry Goldstein, 325 9th Ave, Seattle, WA 98104, (206) 744-3166, (website), accepting new patients (yes/no)  |
| **User submits API call resulting in an error will receive an error message** | Goldstein | There was an error processing your request. Please try again. |
| **User submits query that has no search results will receive notification stating no doctors match that criteria.** | djhfjsgf | I'm sorry, no doctors meet that criteria. Please try searching again with less specific criteria. |


## Setup/Installation Requirements

* Clone this repository
* In Terminal, enter the command: npm install
* In Terminal, enter the command: npm run build
* Generate a new API key here [Web page](https://developer.betterdoctor.com/)
* Create .env file in the root directory of the project. Input "exports.apiKey = " and enter your unique API_Key.

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap
* npm
* webpack
* node.js
* Jasmine with Karma
* Babel
* ESLint
* Better Doctor API

## Support and contact details

_Please contact Jessica Munoz with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Jessica Munoz_**
