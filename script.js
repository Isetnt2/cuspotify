
// Get the hash of the url
const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'f49138eb3c684fd4af3dfc8f2b0474bb';
const redirectUri = 'https://cuspotify.glitch.me/';
const scopes = [
  'streaming',
  'user-read-birthdate',
  'user-read-private',
  'user-modify-playback-state',
  'user-read-playback-state'
];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
}

// Set up the Web Playback SDK
window.onSpotifyPlayerAPIReady = () => {
  const player = new Spotify.Player({
    name: 'Cuspotify test client',
    getOAuthToken: cb => { cb(_token); }
    });
    $('.volume-high').hide();
    $('.volume-medium').hide();
    $('.volume-low').hide();
    $('.mute').hide();
    $('.repeat-2').hide();
    $('.repeat-1').hide();
  // Error handling
  player.on('initialization_error', e => console.error(e));
  player.on('authentication_error', e => console.error(e));
  player.on('account_error', e => console.error(e));
  player.on('playback_error', e => console.error(e));
  	
player.addListener('ready', ({ device_id }) => {
  devid = device_id;
    console.log('Device ID', devid)
})
player.addListener('player_state_changed', ({
  position,
  duration,
  paused,
  track_window: { current_track, next_tracks }
}) => {
  console.log('Currently Playing', current_track);
  console.log('Position in Song', position);
  console.log('Duration of Song', duration);
  console.log('Paused', paused);
  console.log('Next track', next_tracks[0] );
  serverduration = duration;

});
  // Playback status updates
  player.on('player_state_changed', state => {
    console.log(state)
    $('#info-pic').attr('src', state.track_window.current_track.album.images[0].url);
    $('#info').text(state.track_window.current_track.name);
   
    $('#nexttrack').attr('src', state.track_window.next_tracks[0].album.images[0].url);
      if ( (state.paused == false)){
  $('.play').hide();
  $('.pause').show();
  } else{
    $('.pause').hide();
  $('.play').show();
  }
  if (state.repeat_mode == 0){
  $('.repeat-track').show()
;
  $('.repeat-1').hide();
   $('.repeat-2').hide();
 }
  else if (state.repeat_mode == 1){
  $('.repeat-1').show();
  $('.repeat-track').hide();
   $('.repeat-2').hide();
  }
else if (state.repeat_mode == 2){
  $('.repeat-2').show();
  $('.repeat-1').hide();
  $('.repeat-track').hide();
      $('#nexttrack').attr('src', state.track_window.current_track.album.images[0].url);

  }
  else{
      $('.repeat-track').show;
  }
  if (state.repeat_mode == 2)
  $('.next').click(function(){
    player.seek(0 * 1000).then(() => {
  console.log('Changed position!');
});
});
$('.prev').click(function(){
  player.seek(0 * 1000).then(() => {
  console.log('Changed position!');
});
});
      $('#info-pic').on('click', function(){
      window.open(('https://open.spotify.com/track/' + state.track_window.current_track.id), '_blank');
      });
});

	

  // Ready
  player.on('ready', data => {
    console.log('Ready with Device ID', data.device_id);
    const deviceid = data.device_id;
    // Play a track using our new device ID
    player(data.device_id);
    deviceid
    
  });
$('.connect').click(function(){
  // Connect to the player!
  player.connect().then(success => {
  if (success) {
    console.log('The Web Playback SDK successfully connected to Spotify!');
  }
})
  $('.play').show();
  $('.crl').show();
  $('#info-pic').show();
  $('#info').show();
  $('#nexttrack').show();
  $('.repeat-track').show();
  $("#slider").slider();
  $('.volume-high').show();
});
$('.disconnect').click(function(){
  player.disconnect();
  $('.crl').hide();
  $('#info').hide();
  $('#info-pic').hide();
  $('#nexttrack').hide();
  $('.repeat-track').hide;
  $('.repeat-2').ide;
  $('.repeat-1').hide;
  $('.play').hide();
  $('.pause').hide();
  $('.volume').hide();
  $('.mute').hide();
});
$('.play').click(function(){
	player.resume().then(() => { console.log('Resumed playback!'); 
  });
});
$('.pause').click(function(){
player.pause().then(() => { console.log('Paused playback!');
  });
});
$('.next').click(function(){
	player.nextTrack().then(() => { console.log('Skipped to next track!'); });
});
$('.prev').click(function(){
player.previousTrack().then(() => { console.log('Set to previous track!'); });
});
$( "#slider" ).slider({
  max: 100,
  min: 0,
  value: 50,
  step: 1,
  animate: "fast"
});
setInterval(function() {
player.getVolume().then(volume => {
  let volume_percentage = volume * 100;
      clientval = $( "#slider" ).slider( "value" )
      serverval = volume * 100
      $('#slidervalue').text(Math.round(serverval) + "/" +clientval);
}); 

}, 1);

  setInterval(function(){
  if (clientval != serverval ) {
$("#slider").slider({
value: serverval
});
}
else {

}
  }, 600);
  $( "#slider" ).slider({
  change: function( event, ui ) {},
  slide: function( event, ui ) {}
});
  $( "#slider" ).on( "slidechange", function( event, ui ) {
    updateValue();
    var val = $( "#slider" ).slider( "value" ) / 100;
player.setVolume(val).then(() => {
  console.log(val);
});
  });
function updateValue() {
  var rangeInput = clientval
  if (rangeInput >= 50) {
$('.volume-high').show();
 $('.volume-medium').hide();
 $('.volume-low').hide();
 $('.mute').hide(); 
  } else if (rangeInput <= 30 && rangeInput > 0){
$('.volume-low').show();
   $('.volume-high').hide();
 $('.volume-medium').hide();
 $('.mute').hide(); 
  }
 else if (rangeInput < 50 && rangeInput > 30){
 $('.volume-medium').show();
   $('.volume-high').hide();
 $('.volume-low').hide();
 $('.mute').hide(); 
 } 
 else if (rangeInput < 1){
 $('.mute').show();
   $('.volume-high').hide();
 $('.volume-medium').hide();
 $('.volume-low').hide();
 } 
 else{
 $('.volume-high').hide();
 $('.volume-medium').hide();
 $('.volume-low').hide();
 $('.mute').hide(); 
 }
}
  
  
$('.repeat-track').click(function(){
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.spotify.com/v1/me/player/repeat?state=context&device_id=" + devid,
  "method": "PUT",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Bearer "+_token,
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
$(".repeat-track").hide();  
$(".repeat-1").show();
});
$(".repeat-1").click(function(){
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.spotify.com/v1/me/player/repeat?state=track&device_id=" + devid,
  "method": "PUT",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Bearer "+_token,
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
  $(".repeat-1").hide();
$(".repeat-2").show();
});
$(".repeat-2").click(function(){
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.spotify.com/v1/me/player/repeat?state=off&device_id=" + devid,
  "method": "PUT",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Bearer "+_token,
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
  $(".repeat-2").hide();
$(".repeat-track").show();
});

$( "#position-slider" ).slider({
  max: serverduration,
  min: 0,
  value: 0,
  step: 1,
  animate: "fast"
});
setInterval(function() {
  player.getCurrentState().then(state => {
      clientposition = $( "#position-slider" ).slider( "value" )
      serverposition = state.position
      serverduration = state.duration
      });
  }, 1);
 
  setInterval(function(){
  if (clientposition != serverposition ) {
$("#position-slider").slider({
value: serverposition
});
}
else {

}
  }, 600);
  $( "#position-slider" ).slider({
  change: function( event, ui ) {},
  slide: function( event, ui ) {}
});
  $( "#position-slider" ).on( "slide", function( event, ui ) {
    updateValue();
    var val = $( "#position-slider" ).slider( "value" );
player.seek(val).then(() => {
  
});
  });
  $(window).keypress(function(e) {
  if (e.keyCode == 0 || e.keyCode == 32) {
	
player.togglePlay().then(() =>  {
     console.log('Toggled playback!');
});
  }
});
};