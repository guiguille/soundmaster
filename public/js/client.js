$(function(){
    
    new Heyoffline();

    var socket = io.connect(document.location.origin);

    
    
    
    window.addEventListener('push', function(data){
      if(data["detail"]["state"]["title"] == "Detail") LireStream();
    });

    SC.initialize({
      client_id: '8faac9013bbbabd00ff8fab119deff01'
    });


    function extractUrlParams(){
      var t = location.search.substring(1).split('&');
      var f = [];
      for (var i=0; i<t.length; i++){
        var x = t[ i ].split('=');
        f[x[0]]=x[1];
      }
      return f;
    }

    function LireStream(){
      stream = extractUrlParams();
      socket.emit('PlayStream',
          {
            type : stream["type"],
            stream : stream["track"]
          }
        )
      /*SC.stream("/tracks/" + extractUrlParams(), function(sound){
        soundManager.stopAll();
        sound.play();
        //$('.imageCover').append('<img src="'+tracks[i]["artwork_url"]+'">');
      });*/
    }

    $('input[type=search]').focusin(function(){
        $(".bar-title").fadeOut();
        $('.bar-standard').removeClass("bar-standard bar-header-secondary").addClass("bar-standard");
        $('nav.bar-tab').hide();
    });
    $('input[type=search]').focusout(function(){
        $(".bar-title").fadeIn();
        $('.bar-standard').removeClass("bar-standard").addClass("bar-standard bar-header-secondary");
        $('nav.bar-tab').show();
    });

    $('input[type=search]').keyup(function(e){
      //event.preventDefault();
      if (e.which == 13 ) {
        $('input[type=search]').focusout();
      }
      recherche = $('input[type=search]').val();
      if(recherche.length>3) {
        var data = "";
        //Recherche Youtube
        /*var request = gapi.client.youtube.search.list({
          q: recherche,
          part: 'snippet'
        });*/
        $.ajax({
          url: 'http://gdata.youtube.com/feeds/mobile/videos?alt=json-in-script&max-results=5&q=' + recherche,
          dataType: 'jsonp',
            success: function (videos) {
              console.log(videos);
                var row = "";
                for (i = 0; i < videos.feed.entry.length; i++) {
                      data = data + '<a href="soundetail.html?type=youtube&track='+videos.feed.entry[i].id.$t.substring(45)+'" data-transition="slide-in"><li><div><img style="float:left; width:40px; height:40px; margin-right:10px;"class="movieimg" src="'+videos.feed.entry[i].media$group.media$thumbnail[0].url+'" /><p style="font-size:12px;">By '+videos.feed.entry[i].author[0].name.$t+'</p><strong style="font-size:12px;">'+videos.feed.entry[i].media$group.media$title.$t+'</strong><span class="chevron"></span></div><div style="clear:both;"></div></li><a>';
                }
            },
            error: function () {
                alert("Error loading youtube video results");
            }
        });
        //Recherche SoundCloud
        SC.get('/tracks', { q: recherche}, function(tracks) {
          //console.log(tracks);
          for (var i=0,len=tracks.length; i<len; i++)
          {
            data = data + '<a href="soundetail.html?type=soundcloud&track='+tracks[i]["id"]+'" data-transition="slide-in"><li><div><img style="float:left; width:40px; height:40px; margin-right:10px;"class="movieimg" src="'+tracks[i]["artwork_url"]+'" /><p style="font-size:12px;">'+tracks[i]["user"]["username"]+'</p><strong style="font-size:12px;">'+tracks[i]["title"]+'</strong><span class="chevron"></span></div><div style="clear:both;"></div></li><a>';
          }
          $('ul.list li').remove();
          $('ul.list').append(data);
        });
      }
    });
    // find all sounds of buskers licensed under 'creative commons share alike'
    
});
