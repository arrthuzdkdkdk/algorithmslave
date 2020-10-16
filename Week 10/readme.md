# Week 10

This week I made a bit of progress on what was made last week. What ended up happening was that I kept trying to add more and more elements to the sketch and the code ended up getting so messy that I kinda scratched it. Now what I ended up doing was leaving that file as my experimentation, if I wanted to try anything I’d do it there first, and creating a new file that would be my actual code and copying over anything that would work. So what’s new from last week? Well there are random ellipses being drawn in the background, waveforms on the canvas, a square in the middle that was meant to move but I didn’t get that far before I got rid of the idea, and a spiral slowly being drawn in the middle. So these are all the experiments in this file, there is no menu or anything just purely getting sketches and music on mouse clicks.

Now the new file which is what is currently being used is up to this point.
* Main menu
	* Got a basic menu layout, still need to work on it and get it to show all necessary information but works as a temporary fix for now. Also means when you click on the canvas it takes you back to the main menu and restarts it
* More songs
	* Added up to seven songs now, but for some reason the random function I have in place likes to play the same song a couple times in a row so I gotta work on trying to make it more random.
*Drawing elements and colour
	* So currently I have two elements drawing on the canvas. I have random ellipses in the background being drawn, and a spiral of ellipses. The random in the background is purely random but the way it works is when you change songs it will also change the colour so the ellipses will all be different colours, but for now it can’t change songs so they simply exist to populate the background. In the working file I had a spiral being drawn by using sin, cos and tan elements, and I love the way it spirals from the center but I wanted it a bit different. So I came up with this circle rotating element and it fluctuates based on volume, I adapted this from the rectangle from last week, because I didn’t like the look of it but I liked an element fluctuating on volume so I adapted it to this instead. Also all the elements are coloured based on key, I found an article of a guy with sound-to-color synesthesia who described how each key sounds and what colour he associates them with so I used that as the reasoning for the colours used. 
* Save function
	* While the drawing is going pressing “s” will trigger it to stop and save the file as a png


# So what needs to be added
* A way to change songs
* Refurbishing the menu
* Adding another drawing element where the user can interact with the mouse
