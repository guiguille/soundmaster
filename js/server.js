var http = require('http');
var vlc = require('vlc-api')();
//var vlc = require('../node_modules/vlc-api/')();

httpServer = http.createServer(function(req, res){
	res.end('hello world');
});

httpServer.listen(1337);

/*Pinger_ping("192.168.1.10:8080", function(cb){
  console.log(cb);
});*/

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', function(socket) {
	/*
	* Je me connecte
	*/
	socket.on('PlayStream', function(sound){
		console.log(sound);
    if(sound.type == "youtube"){
      track = encodeURI('http://www.youtube.com/watch?v=' + sound.stream);
    }else{
      track = encodeURI('http://api.soundcloud.com/tracks/' + sound.stream + '/stream?client_id=8faac9013bbbabd00ff8fab119deff01');
    }
		//track = "http://firewall.pulsradio.com";
		//track = encodeURIComponent('http://api.soundcloud.com/tracks/'+sound.stream+'/stream?client_id=8faac9013bbbabd00ff8fab119deff01');
		try
      {
        vlc.status.play(track, vlc);
      }
    catch(err)
      {
        console.log("Lancer l'interface web de VLC")
      }
		/*io.socket.emit('played');
		users[me.id] = me;
		io.sockets.emit('newuser', me);*/
	})
});

/*doSomethingCrazy();

function doSomethingCrazy () {
	vlc.status.play('http://firewall.pulsradio.com', vlc, cb);
	//vlc.status.enqueue("trucmouche", cb);

  var actions = {
    next: function (cb) {
      vlc.status.next(cb);
    },
    prev: function (cb) {
      vlc.status.previous(cb);
    },
    pause: function (cb) {
      vlc.status.pause(cb);
    }
  };

  var action = Object.keys(actions)[d(Object.keys(actions).length)];

  console.error('Executing %s', action);
  actions[action](finish);

  function finish(err) {
    if (err) {
      throw err;
    }
    setTimeout(doSomethingCrazy, 2000 * Math.random());
  }
}

function d(n) {
  return Math.floor(n * Math.random());
}*/




/*function Pinger_ping(ip, callback) {

  if(!this.inUse) {

    this.inUse = true;
    this.callback = callback
    this.ip = ip;

    var _that = this;

    this.img = new Image();

    this.img.onload = function() {_that.good();};
    this.img.onerror = function() {_that.good();};

    this.start = new Date().getTime();
    this.img.src = "http://" + ip;
    this.timer = setTimeout(function() { _that.bad();}, 1500);

  }
}*/