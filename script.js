const hash=window.location.hash.substring(1).split('&').reduce(function(a,b){if(b){var c=b.split('=');a[c[0]]=decodeURIComponent(c[1])}return a},{});window.location.hash='';let _token=hash.access_token;$.cookie('_token',hash.access_token,{expires:3600,path:'/'});const authEndpoint='https://accounts.spotify.com/authorize',clientId='f49138eb3c684fd4af3dfc8f2b0474bb',redirectUri='https://cuspotify.ml',scopes=['streaming','user-read-birthdate','user-read-private','user-modify-playback-state','user-read-playback-state'];$.cookie('_token')!=hash.access_token&&(window.location=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`),window.onSpotifyPlayerAPIReady=()=>{function a(){var r=n;50<=r?($('.volume-high').show(),$('.volume-medium').hide(),$('.volume-low').hide(),$('.mute').hide()):30>=r&&0<r?($('.volume-low').show(),$('.volume-high').hide(),$('.volume-medium').hide(),$('.mute').hide()):50>r&&30<r?($('.volume-medium').show(),$('.volume-high').hide(),$('.volume-low').hide(),$('.mute').hide()):1>r?($('.mute').show(),$('.volume-high').hide(),$('.volume-medium').hide(),$('.volume-low').hide()):($('.volume-high').hide(),$('.volume-medium').hide(),$('.volume-low').hide(),$('.mute').hide())}function b(){function r(H,I){for(var K,J=0;20>=J;J++)K=v[Math.floor(Math.random()*v.length)],u.fillText&&(0===J?u.fillStyle=E[0]:1===J?u.fillStyle=E[1]:3===J?u.fillStyle=E[2]:7===J?u.fillStyle=E[3]:13===J?u.fillStyle=E[4]:17===J?u.fillStyle=E[5]:void 0,u.fillText(K,H,I)),I-=C[J]}function s(){u.clearRect(0,0,t.width,t.height),u.shadowOffsetX=u.shadowOffsetY=0,u.shadowBlur=8,u.shadowColor='#94f475';for(var H=0;H<w;H++)u.font=C[H]+'px MatrixCode',u.textBaseline='top',u.textAlign='center',1358<A[H]?(z[H]=Math.floor(Math.random()*t.width),A[H]=-100,B[H]=Math.floor(7*Math.random())+3,C[H]=Math.floor(16*Math.random())+8,r(z[H],A[H])):r(z[H],A[H]),A[H]+=B[H];setTimeout(s,70)}alert('cheats activated!');var t=document.body.appendChild(document.createElement('canvas')),u=t.getContext('2d');u.globalCompositeOperation='lighter',t.width=window.screen.availWidth,t.height=window.screen.availHeight,t.style.position='fixed',t.style.top='0px',t.style.zIndex='-100',s();for(var v=['\u8BF6','\u6BD4','\u897F','\u8FEA','\u4F0A','\u5409','\u827E','\u6770','\u5F00','\u54E6','\u5C41','\u63D0','\u7EF4'],w=60,z=[],A=[],B=[],C=[],D=0;D<w;D++)z[D]=Math.floor(1265*Math.random()),A[D]=-100,B[D]=Math.floor(7*Math.random())+3,C[D]=Math.floor(16*Math.random())+8;var E=['#cefbe4','#81ec72','#5cd646','#54d13c','#4ccc32','#43c728'],u}const c=new Spotify.Player({name:'Cuspotify test client',getOAuthToken:r=>{r(_token)}});window.console||(window.console={});for(var f=['log','debug','warn','info'],g=0;g<f.length;g++)console[f[g]]=function(){};var h='',m='',n='';$('.volume-high').hide(),$('.volume-medium').hide(),$('.volume-low').hide(),$('.mute').hide(),$('.repeat-2').hide(),$('.repeat-1').hide(),$('.previus').hide(),c.on('initialization_error',r=>console.error(r)),c.on('authentication_error',r=>console.error(r)),c.on('account_error',r=>console.error(r)),c.on('playback_error',r=>console.error(r)),c.addListener('ready',({device_id:r})=>{h=r,console.log('Device ID',h)}),c.on('player_state_changed',()=>{}),c.addListener('player_state_changed',({position:r,duration:s,paused:t,track_window:{current_track:u,next_tracks:v}})=>{console.log('Currently Playing',u),console.log('Position in Song',r),console.log('Duration of Song',s),console.log('Paused',t),console.log('Next track',v[0])}),c.on('player_state_changed',r=>{for(var s='',t='',u='',v=0;v<r.track_window.current_track.artists.length;v++)v<r.track_window.current_track.artists.length-1?s+=r.track_window.current_track.artists[v].name+', ':(v=r.track_window.current_track.artists.length-1)?s+=r.track_window.current_track.artists[v].name+'':(r.track_window.current_track.artists.length=1)&&(s+=r.track_window.current_track.artists[v].name,t=r.track_window.current_track.artists[v].uri.replace(':','/').replace(':','/'),u=t.replace('spotify','https://open.spotify.com'),console.log('the artist url is',u));1==r.track_window.current_track.artists.length&&$('#artists').off('click').on('click',function(){window.open(u,'_blank')});var w=r.track_window.current_track.name,z=r.track_window.current_track.artists,A=r.track_window.current_track.album.images[0].url,B=r.track_window.next_tracks[0].album.images[0].url,C=r.track_window.current_track.id;if(!document.hasFocus()){var D=function(){},E={title:w,options:{body:'ARTIST: '+s,icon:A,tag:'song',onClose:D}};$('#easyNotify').easyNotify(E)}console.log(r),$('#info-pic').attr('src',A),$('#songName').text(w),$('title').text(w),$('#artists').text(s+' '),$('#nexttrack').attr('src',B),!1==r.paused?($('.play').hide(),$('.pause').show()):($('.pause').hide(),$('.play').show()),0==r.repeat_mode?($('.repeat-track').show(),$('.repeat-1').hide(),$('.repeat-2').hide()):1==r.repeat_mode?($('.repeat-1').show(),$('.repeat-track').hide(),$('.repeat-2').hide()):2==r.repeat_mode?($('.repeat-2').show(),$('.repeat-1').hide(),$('.repeat-track').hide(),$('#nexttrack').attr('src',A)):$('.repeat-track').show,2==r.repeat_mode&&$('.next').click(function(){c.seek(0).then(()=>{console.log('Changed position!')})}),$('#songName').off('click').on('click',function(){window.open('https://open.spotify.com/track/'+C,'_blank')}),$('#album3').off('click').on('click',function(){window.open('https://open.spotify.com/track/'+C,'_blank')});var F=r.track_window.current_track.album.images[0].url,G=r.track_window.next_tracks[0].album.images[0].url,H=r.track_window.next_tracks[1].album.images[0].url;2==r.repeat_mode?($('#album3').attr('src',F),$('#album2').attr('src',F),$('#album1').attr('src',F)):($('#album3').attr('src',F),$('#album2').attr('src',G),$('#album1').attr('src',H))}),c.on('ready',r=>{console.log('Ready with Device ID',r.device_id);const s=r.device_id;c(r.device_id),s}),c.connect().then(r=>{r&&console.log('The Web Playback SDK successfully connected to Spotify!'),$('.play').show(),$('.crl').show(),$('#info-pic').show(),$('#songName').show(),$('#artists').show(),$('#nexttrack').show(),$('.repeat-track').show(),$('#slider').slider(),$('.volume-high').show(),$('.previus').hide()}),$('.disconnect').click(function(){c.disconnect(),$('.crl').hide(),$('#songName').hide(),$('#artists').hide(),$('#info-pic').hide(),$('#nexttrack').hide(),$('.repeat-track').hide,$('.repeat-2').ide,$('.repeat-1').hide,$('.play').hide(),$('.pause').hide(),$('.volume').hide(),$('.mute').hide(),$('.previus').hide(),$('.connect').show()}),$('.play').click(function(){c.resume().then(()=>{console.log('Resumed playback!')})}),$('.pause').click(function(){c.pause().then(()=>{console.log('Paused playback!')})}),$('.next').click(function(){c.nextTrack().then(()=>{console.log('Skipped to next track!')})}),setInterval(function(){c.getCurrentState().then(r=>{if(!r)return void console.error('User is not playing music through the Web Playback SDK');let{current_track:s,next_tracks:[t]}=r.track_window;$('.prev').off('click').on('click',function(){3e3<=r.position?c.seek(0).then(()=>{}):3e3>=r.position&&c.previousTrack().then(()=>{console.log('Set to previous track!')})})})},500),$('#slider').slider({max:100,min:0,value:50,step:1,animate:'fast'}),setInterval(function(){c.getVolume().then(r=>{n=$('#slider').slider('value'),m=100*r,$('#slidervalue').text(Math.round(m)+'/'+n)})},1),setInterval(function(){n!=m&&$('#slider').slider({value:m})},600),$('#slider').slider({change:function(){},slide:function(){}}),$('#slider').on('slidechange',function(){a();var t=$('#slider').slider('value')/100;c.setVolume(t).then(()=>{console.log(t)})}),$('.repeat-track').click(function(){var r={async:!0,crossDomain:!0,url:'https://api.spotify.com/v1/me/player/repeat?state=context&device_id='+h,method:'PUT',headers:{accept:'application/json','content-type':'application/json',authorization:'Bearer '+_token}};$.ajax(r).done(function(s){console.log(s)}),$('.repeat-track').hide(),$('.repeat-1').show()}),$('.repeat-1').click(function(){var r={async:!0,crossDomain:!0,url:'https://api.spotify.com/v1/me/player/repeat?state=track&device_id='+h,method:'PUT',headers:{accept:'application/json','content-type':'application/json',authorization:'Bearer '+_token}};$.ajax(r).done(function(s){console.log(s)}),$('.repeat-1').hide(),$('.repeat-2').show()}),$('.repeat-2').click(function(){var r={async:!0,crossDomain:!0,url:'https://api.spotify.com/v1/me/player/repeat?state=off&device_id='+h,method:'PUT',headers:{accept:'application/json','content-type':'application/json',authorization:'Bearer '+_token}};$.ajax(r).done(function(s){console.log(s)}),$('.repeat-2').hide(),$('.repeat-track').show()});var o={37:'left',38:'up',39:'right',40:'down',65:'a',66:'b'},p=['up','up','down','down','left','right','left','right','b','a'],q=0;document.addEventListener('keydown',function(r){var s=o[r.keyCode],t=p[q];s==t?(q++,q==p.length&&(b(),q=0)):q=0}),$(window).keypress(function(r){(0==r.keyCode||32==r.keyCode)&&c.togglePlay().then(()=>{console.log('Toggled playback!')})})};