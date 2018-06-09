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
const redirectUri = 'https://isetnt2.github.io/cuspotify/';
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

  // Error handling
  player.on('initialization_error', e => console.error(e));
  player.on('authentication_error', e => console.error(e));
  player.on('account_error', e => console.error(e));
  player.on('playback_error', e => console.error(e));
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

});
  // Playback status updates
  player.on('player_state_changed', state => {
    console.log(state)
    $('#info-pic').attr('src', state.track_window.current_track.album.images[0].url);
    $('#info').text(state.track_window.current_track.name);
    $('#nexttrack').attr('src', state.track_window.next_tracks[0].album.images[0].url);
      if ( (state.paused == false)){
  $('.play').removeClass('fa-play');
  $('.play').addClass('fa-pause');
  } else{
    $('.play').removeClass('fa-pause');
  $('.play').addClass('fa-play');
  }
      $('#info-pic').on('click', function(){
      window.open(('https://open.spotify.com/track/' + state.track_window.current_track.id), '_blank');
      });
  });

  // Ready
  player.on('ready', data => {
    console.log('Ready with Device ID', data.device_id);
    
    // Play a track using our new device ID
    player(data.device_id);
  });
$('.connect').click(function(){
  // Connect to the player!
  player.connect().then(success => {
  if (success) {
    console.log('The Web Playback SDK successfully connected to Spotify!');
  }
})
  $('.crl').show();
  $('#info-pic').show();
  $('#info').show();
  $('#nexttrack').show();
});
$('.disconnect').click(function(){
  player.disconnect();
  $('.crl').hide();
  $('#info').hide();
  $('#info-pic').hide();
  $('#nexttrack').hide();
});
$('.play').click(function(){
	player.togglePlay().then(() => { console.log('Toggled playback!'); });
});
$('.next').click(function(){
	player.nextTrack().then(() => { console.log('Skipped to next track!'); });
});
$('.prev').click(function(){
player.previousTrack().then(() => { console.log('Set to previous track!'); });
});
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
document.getElementById("myRange").value = "position";
}
