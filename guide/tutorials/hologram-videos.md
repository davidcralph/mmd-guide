# Creating Hologram-Ready Videos
Have you ever wanted to make your own Hatsune Miku concert like [Magical Mirai](https://www.youtube.com/watch?v=BH-IJnpL8o8) or Miku Expo? This is very possible using MikuMikuDance!

The way this works is using a projector behind a special type of screen, playing a video of 3D animation with a black background. Since projectors don't project black, and the screen is transparent,
from afar it looks as if the character is actually there. It's also possible to create a "mini" hologram using a phone and some glass, but for the purposes of this guide we won't go into specifics
of how this is done (there are tutorials online, including one I plan to create after my VOCALOID project is finished).

To start, you'll want to open MMD, a model of your choice, and a motion.

Next, for non-Raycast usage you want to go to background and select "black background". You'll also want to disable ground shadow in the view dropdown.

If you're using Raycast, you can try using [crazydave55811's black skydome](https://www.deviantart.com/crazydave55811/art/DL-Black-Skydome-268932727) which can be loaded as an accessory.

As for camera positioning, you want to make it so the feet are at the very bottom of the display, unless you have a box or similar to be used as a stage.

And that's it! All you need to do now is render the video and play it on your projector. You now have your very own VOCALOID concert.

It's recommended to use VLC with a separate window to be displayed on the projector.

## Extra ideas
* Add transitions for the start and end of each song
* Use effects to improve your performance
* If you're running an actual concert, try out [vlc-bgm](https://github.com/vocauk/vlc-bgm) to use as a background music controller before it starts
* Try using [vlc-switch-config](https://github.com/vocauk/vlc-switch-config) to make testing with VLC easier.
