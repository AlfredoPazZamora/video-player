const $backward = document.querySelector('#backward');
const $forward  = document.querySelector('#forward');
const $pause    = document.querySelector('#pause');
const $play     = document.querySelector('#play');
const $progress = document.querySelector('#progress');
const $video    = document.querySelector('#video');

$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

$progress.addEventListener('input', handleInput);


function handlePlay(){
    $video.play();

    $play.hidden    = true;
    $pause.hidden   = false;

    console.log('Click al play');
};

function handlePause(){
    $video.pause();

    $play.hidden    = false;
    $pause.hidden   = true;

    console.log('Click al pause')
};

function handleBackward(){
    $video.currentTime -= 10;
}

function handleForward(){
    $video.currentTime += 10;
}

function handleLoaded(){
    $progress.max = $video.duration;
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

function handleInput(){
    $video.currentTime = $progress.value;
}
