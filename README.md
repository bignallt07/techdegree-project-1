# techdegree-project-1
 Random Quote Generator

Description of program:

This programs uses an array of objects that store a famous quote from someone in the soccer world. This program does 2 things:

1. Holds 10 quotes that are displayed at random every time you press the "Show another quote" button
2. The program refreshes every 10 seconds, showing a new quote and background color

Notes for reviewer:

1. Line 120 returns the quoteString, but with styles to the quoteBox variable attached. Is this bad programming? - I was struggling to find a way to do this without changing the very last line of the code we were asked not to change.
2. I think there is an issue of DRY programming. Specifically in the changeBackground function (line 142). I used a similar approach to the Treehouse Functions video with Guil, but I wanted to use only one function.
