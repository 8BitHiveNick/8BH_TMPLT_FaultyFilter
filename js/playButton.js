document.getElementById("play").addEventListener("click", function() {
    // Hide the play button SVG
    this.style.display = "none";

    // Get the YouTube iframe and set its source with autoplay enabled
    var youtubeVideo = document.getElementById("youtube-video");
    youtubeVideo.src = "https://www.youtube.com/embed/CeBb40wcOxw?autoplay=1"; // Correct format

    // Display the video container
    document.getElementById("responsive-video").style.display = "block";
});
