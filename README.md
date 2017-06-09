# Coding-Challenges

This repo is meant for short and creative coding projects.

It is quite often that I come accross interesting topics on the internet (whether it is a video on YouTube, a post on Facebook, or just something that pops up in my mind). Sometimes I keep thinking about these things, trying to figure something out about it or how it would be interesting to implement it and look at it. Doing so results in short (anywhere between one afternoon to a few days) and often creative (especially with visualising or creating stuff) coding projects.

The idea of these short projects is based on a [series of videos](https://www.youtube.com/user/shiffman) by [Daniel Shiffman](http://shiffman.net/).

All challenges:
 * [CC_01: Sandpiles](#cc_01-sandpiles)
 * [CC_02: Marble track](#cc_01-marble-track)

## [CC_01: Sandpiles](https://hgnep.github.io/Coding-Challenges/CC_01%20Sandpile/JS/)
This first coding challenge is based on a [video](https://www.youtube.com/watch?v=1MtEUErz7Gg) by Numberphile about sandpiles. A mathematical sandpile is a grid (or a matrix) with in each cell a value between 0 and 3, representing the height of the pile at that position. You can add two piles by adding the values pairswise, and with this operation it can, under certain restrictions, even form a [group](https://en.wikipedia.org/wiki/Group_(mathematics)). if, at a cell, the value is greater than 3, the pile topples. This means that the value of every one of the four adjacent cells increases by one.

In this project I started with implementing sandpiles using Python. After that I moved on to Javascript. I made a sandpile that started with a big pile of sand in the middle of the screen and then toppled into a valid sandpile. There are two sliders, one to manage the size of the pile, and one to set the amount of sand grains.

Possible changes / improvements:
 * Changeable maxValue with other colour visualisation,
 * Other shapes in stead of squares,
 * better placement of the sliders.

## [CC_02: Marble track](https://hgnep.github.io/Coding-Challenges/CC_02%20Marble%20track)
After seeing some of Coding Train Daniel Shiffman's videos about the physics engine Matter.js I wanted to try this myself. I decided to make a marble track. The idea was to make several screens through which the marble could move. I ended up making only one, so there is still some things left to do. By clicking on the screen the marble is created and it will move through the screen. At the same time the screen moves up, so that the marble will always stay at the same height of the canvas.

Possible changes / improvements:
 * Making more screens
 * Make sure that the marble ends at the same horizontal position as it started, so that the marble can move through the screens.
