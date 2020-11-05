$(document).ready(function(e){

    // IFrame Player API の読み込み
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

function onYouTubeIframeAPIReady() {
    $video_id = 'oACw8W5im_M'
    ytPlayer = new YT.Player(
        'sample', // 埋め込む場所の指定(idの値)
        {
            width: 640,
            height: 480,
            videoId: $video_id, // YouTubeのID
            events: {
                // 'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        }
    );
}

$(window).on('load',function(){
    onYouTubeIframeAPIReady();
});


// プレーヤーの状態が変更されたとき
function onPlayerStateChange(event) {
    // 再生されたとき
    if (event.data == YT.PlayerState.PLAYING) {
        console.log('再生されました。');
        alert("再生されました。");
    }
}

// 動画stop
function stopVideo() {
    player.stopVideo();
}