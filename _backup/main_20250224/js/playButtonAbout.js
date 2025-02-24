document.addEventListener("DOMContentLoaded", function() {
    const aboutPlayButton = document.getElementById("about-play");
    const aboutVideoContainer = document.getElementById("about-responsive-video");
    const aboutYoutubeVideo = document.getElementById("about-youtube-video");

    aboutPlayButton.addEventListener("click", function() {
        // Hide the play button SVG
        aboutPlayButton.style.display = "none";

        // Set the YouTube video URL with autoplay
        aboutYoutubeVideo.src = "https://www.youtube.com/embed/Inf5du8u7OE?autoplay=1";  // Replace YOUR_VIDEO_ID with actual ID

        // Display the video container
        aboutVideoContainer.style.display = "block";
    });
});
