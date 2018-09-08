const querystring = require('querystring');
const testURL = 'https://www.ted.com/playlists/440/how_the_brain_takes_care_of_it?utm_source=Science+worth+knowing&utm_campaign=6097d0ab7e-Science+worth+knowing_12-21-17_COPY_01&utm_medium=email&utm_term=0_83c20124eb-6097d0ab7e-297668897';
const queryParamName = 'utm_campaign';

const getQueryParam = (URL, queryParamName) => {
    const parsedURL = querystring.parse(testURL);
    const queryParamValue = parsedURL[queryParamName];
    console.log(`For Query Param ${queryParamName} the Value is ${queryParamValue}`);
    return queryParamValue;
};

//Example
getQueryParam(testURL, queryParamName);

module.exports = {
    getQueryParam,
};