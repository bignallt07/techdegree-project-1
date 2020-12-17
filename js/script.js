/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/******************************
 * `quotes` array 
 * x10 quotes in array
*******************************/
const quotes = [
  {
    quote: "Please don't call me arrogant, but I'm European champion and I think I'm a special one",
    source: "Jose Mourinho",
    citation: "<a href='https://www.soccernews.com/top-10-greatest-football-manager-quotes/230746/'>Soccernews.com</a>",
    year: 2004,
    team: "Chelsea FC, England"
  },
  {
    quote: "Some people believe football is a matter of life and death. I’m very disappointed with that attitude. I can assure you it is much, much more important than that.",
    source: "Bill Shankley",
    citation: "<a href='https://www.soccernews.com/top-10-greatest-football-manager-quotes/230746/'>Soccernews.com</a>",
    team: "Liverpool FC, England"
  },
  {
    quote: "I wouldn't say I was the best manager in the business. But I was in the top one",
    source: "Brian Clough",
    citation: "<a href='https://bleacherreport.com/articles/1935542-mick-mccarthy-and-the-10-funniest-manager-quotes'>Bleacher Report</a>",
    team: "Nottingham Forest FC, England"
  },
  {
    quote: "I was just saying to your collegue, the referee has got me the sack, thank him ever so much for that, wont you? ",
    source: "Graham Taylor",
    citation: "<a href='https://www.dailymail.co.uk/sport/football/article-1279994/THE-LIST-Top-50-managerial-quotes-time-Nos-10-1.html'>Daily Mail</a>",
    team: "England Mens National Team"
  },
  {
    quote: "You can tell him now, we're still fighting for this title... and I'll tell you, honestly, I will love it if we beat them, love it",
    source: "Kevin Keegan",
    citation: "<a href='https://www.dailymail.co.uk/sport/football/article-1279692/THE-LIST-Top-50-managerial-quotes-time-Nos-20-11.html'>Daily Mail</a>",
    year: 1996,
    team: "Newcastle United FC, England"
  },
  {
    quote: "I was waiting for my teammates to embrace me and no one came. I told them. 'Come hug me or the referee isn't going to allow it.",
    source: "Diego Maradona",
    citation: "<a href='https://www.soccercoachingpro.com/soccer-quotes/'>soccercoachingpro.com</a>",
  },
  {
    quote: "We had a virus that infected everyone at United. It was called winning",
    source: "Sir Alex Ferguson",
    citation: "<a href='https://www.soccercoachingpro.com/soccer-quotes/'>soccercoachingpro.com</a>",
    team: "Manchester United, England"
  },
  {
    quote: "My job is to give people who work hard all week something to enjoy on Saturdays and Wednesdays",
    source: "Arsene Wenger",
    citation: "<a href='https://www.soccercoachingpro.com/soccer-quotes/'>soccercoachingpro.com</a>",
    team: "Arsenal FC, England"
  },
  {
    quote: "Football is a simple game. Twenty-two men chase a ball for 90 minutes and at the end, the Germans always win",
    source: "Gary Lineker",
    citation: "<a href='https://inews.co.uk/sport/football/world-cup/gary-lineker-germans-football-quote-168757'>inews.co.uk</a>",
    year: 2018
  },
  {
    quote: "Excuses are like losses. Everyone has them except champions",
    source: "Alex Morgan",
    citation: "<a href='https://www.theinternationallawyer.org/2019/07/top-5-quotes-from-the-u-s-womens-soccer-team/'>theinternationallawyer.org</a>",
    team: "US Womens National Team"
  }
];

/******************************
 * Retreval of Elements to use throughout program
 ******************************/

let quoteBox = document.getElementById('quote-box');

/******************************
 * Functions
 ******************************/

/**
 * `getRandomQuote` function
 * 
 * Description: Creates a random number using Math properties and methods. Using the length of the array of objects as a high number
 * 
 * @returns {Array Item} - Holding 1 object from the array of objects
***/

 function getRandomQuote() {
   let randomNumber = Math.floor(Math.random() * quotes.length);
   return quotes[randomNumber];
 }

/**
 * `printQuote` function
 * 
 * Description: Calls the getRandomQuote function which returns one quote objects 
 *              Then creates a the quote using template literals. 
 *              Then it tests whether the object has a citation, year and team. 
 * 
 * @returns { variable } - returns the FULL STRING, but along with a style
*/

function printQuote() {
  let quote = getRandomQuote();
  let quoteString = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;
  if ( Object.keys(quote).includes("citation") ) {
    quoteString += `<span class="citation">${quote.citation}</span>`
  }
  if (Object.keys(quote).includes("year")) {
    quoteString += `<span class="year">${quote.year}</span>`
  }
  if (Object.keys(quote).includes("team")) {
    quoteString += `<br><span>${quote.team}</span>`
  }
  quoteString += `</p>`
  // Selects the element, then calls the function to change the background color
  document.querySelector('body').style.backgroundColor = changeBackground();
  return quoteBox.innerHTML = quoteString;
}

/******************************
 * Extra Credit Functions
 *****************************/

/**
 * 'changeBackground' function
 * 
 *  Description: Uses a 'for loop' to 3 random numbers between 0 and 256 that are stored in an array
 *  The array is then accessed using template literals in the return statement. Providing a RGB value
 * 
 *  @returns {STRING} - a random RGB value
 */

function changeBackground() {
  let list = [];
  for (let i = 0; i < 3; i++) {
    let value = Math.floor(Math.random() * 256);
    list.push(value);
  }
  return `rgb(${list[0]}, ${list[1]}, ${list[2]})`;
}

/******************************
 * Program Execution
 ******************************/

quoteBox.innerHTML = printQuote();

// Set interval runs the print quote function every 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);