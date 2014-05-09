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

then go to  /soundmaster folder
``` js
npm install
```
when install is finished
``` js
node js/server.js
```
And you are up to go!

Feel free to contribute!

TODO
----------------
- Try a POC with a random full HD youtube video rendered in a webkit browser.
- Replace VLC with nodewebkit
- Frontend angularjs
- Backend NodeJS


