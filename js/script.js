/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Please don't call me arrogant, but I'm European champion and I think I'm a special one",
    source: "Jose Mourinho",
    // Optional
    citation: "<a href='https://www.soccernews.com/top-10-greatest-football-manager-quotes/230746/'>Soccernews.com</a>",
    year: 0000,
    team: "Chelsea FC, England"
  },
  {
    quote: "Some people believe football is a matter of life and death. I’m very disappointed with that attitude. I can assure you it is much, much more important than that.",
    source: "Bill Shankley",
    // Optional
    citation: "<a href='https://www.soccernews.com/top-10-greatest-football-manager-quotes/230746/'>Soccernews.com</a>",
    year: 0000,
    team: "Liverpool FC, England"
  },
  {
    quote: "I wouldn't say I was the best manager in the business. But I was in the top one",
    source: "Brian Clough",
    // Optional
    citation: "<a href='https://bleacherreport.com/articles/1935542-mick-mccarthy-and-the-10-funniest-manager-quotes'>Bleacher Report</a>",
    year: 0000,
    team: "Nottingham Forest FC, England"
  },
  {
    quote: "I was just saying to your collegue, the referee has got me the sack, thank him ever so much for that, wont you? ",
    source: "Graham Taylor",
    // Optional
    citation: "<a href='https://www.dailymail.co.uk/sport/football/article-1279994/THE-LIST-Top-50-managerial-quotes-time-Nos-10-1.html'>Daily Mail</a>",
    year: 0000,
    team: "England Mens National Team"
  },
  {
    quote: "You can tell him now, we're still fighting for this title... and I'll tell you, honestly, I will love it if we beat them, love it",
    source: "Kevin Keegan",
    // Optional
    citation: "<a href='https://www.dailymail.co.uk/sport/football/article-1279692/THE-LIST-Top-50-managerial-quotes-time-Nos-20-11.html'>Daily Mail</a>",
    year: 1996,
    team: "Newcastle United FC, England"
  },
  {
    quote: "I'm out at the moment, but should you be the chairman of Barcelona, AC Milan or Real Madrid, I'll get straight back to you. The rest can wait",
    source: "Joe Kinnear",
    // Optional
    citation: "<a href='https://www.dailymail.co.uk/sport/football/article-1279692/THE-LIST-Top-50-managerial-quotes-time-Nos-20-11.html'>Daily Mail</a>",
    year: 0000,
    team: "Wimbledon FC, England"
  },
  {
    quote: "I was waiting for my teammates to embrace me and no one came. I told them. 'Come hug me or the referee isn't going to allow it.",
    source: "Diego Maradona",
    // Optional
    citation: "<a href='https://www.soccercoachingpro.com/soccer-quotes/'>soccercoachingpro.com</a>",
    year: 0000
  },
  {
    quote: "We had a virus that infected everyone at United. It was called winning",
    source: "Sir Alex Ferguson",
    // Optional
    citation: "<a href='https://www.soccercoachingpro.com/soccer-quotes/'>soccercoachingpro.com</a>",
    year: 0000,
    team: "Manchester United, England"
  },
  {
    quote: "My job is to give people who work hard all week something to enjoy on Saturdays and Wednesdays",
    source: "Arsene Wenger",
    // Optional
    citation: "<a href='https://www.soccercoachingpro.com/soccer-quotes/'>soccercoachingpro.com</a>",
    year: 0000,
    team: "Arsenal FC, England"
  },
  {
    quote: "Football is a simple game. Twenty-two men chase a ball for 90 minutes and at the end, the Germans always win",
    source: "Gary Lineker",
    // Optional
    citation: "<a href='https://inews.co.uk/sport/football/world-cup/gary-lineker-germans-football-quote-168757'>inews.co.uk</a>",
    year: 0000
  },
  {
    quote: "Excuses are like losses. Everyone has them except champions",
    source: "Alex Morgan",
    // Optional
    citation: "<a href='https://www.theinternationallawyer.org/2019/07/top-5-quotes-from-the-u-s-womens-soccer-team/'>theinternationallawyer.org</a>",
    year: 0000,
    team: "US Womens National Team"
  }
];

/***
 * `getRandomQuote` function
 *  // ADD FUNCTION COMMENTS - Description: Uses the object length as the high variable to return a # between 0-10. That number returns the quote in the array
***/
 function getRandomQuote() {
   let randomNumber = Math.floor(Math.random() * Object.keys(quotes).length);
   return quotes[randomNumber];
 }

//console.log(getRandomQuote());

/***
 * `printQuote` function
 * Description: Calls for a random number, then creates a the quote using template literals, tests a couple of sections, prints the quote
***/

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
  document.querySelector('body').style.backgroundColor = changeBackground();
  return document.getElementById('quote-box').innerHTML = quoteString;
}

/**
 * 'changeBackground' function
 * Explain that we wanted to keep it to one function
 */

function changeBackground() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


// This doesn't seem right
document.getElementById('quote-box').innerHTML = printQuote();

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);