var x = document.getElementById("myAudio"); 

function playAudio(url,img) {
    const audio = document.getElementById('myAudio');
    const toggleImage = document.getElementById('toggleImage');
    const favicon = document.getElementById('favicon')
    toggleImage.src = 'assets/pause.png';
    favicon.src = img;
    audio.src = url;
    audio.play();
    
}

document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.getElementById('myAudio');
    const toggleImage = document.getElementById('toggleImage');

    // Function to toggle play/pause and image
    function togglePlayback() {
        if (!audioElement.paused) {
            audioElement.pause();
            toggleImage.src = 'assets/play.png'; // Update to your pause image
        } else {
            audioElement.play();
            toggleImage.src = 'assets/pause.png'; //// Update to your play image
        }
    }

    // Initially set the image based on the audio state
    if (audioElement.paused) {
        toggleImage.src = 'assets/play.png'; // Ensure this matches your initial image
    } else {
        toggleImage.src = 'assets/pause.png'; //// Ensure this matches your initial image
    }

    // Listen for the 'ended' event to reset the image after playback ends
    audioElement.addEventListener('ended', function() {
        toggleImage.src = 'assets/play.png'; // Reset to pause image
    });

    // Call togglePlayback when the image is clicked
    toggleImage.addEventListener('click', togglePlayback);
});
