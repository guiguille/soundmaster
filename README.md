SoundMaster
===========

play youtube/soundcloud sounds, remote on your phone!

Installation
----------------

[vlc](http://www.videolan.org) - We will use the VLC Http API

[nodejs](http://nodejs.org) - Nodejs Backend

Setup
----------------
Go to VLC > preferences > Lua HTTP, set up a password
Then modify "password" in "index.js", line 22

then go to /js folder
``` js
node server.js
```
And you are up to go!

