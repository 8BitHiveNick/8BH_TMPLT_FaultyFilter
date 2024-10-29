document.getElementById("play").addEventListener("click", function() {
    // Hide the play button SVG
    this.style.display = "none";

    // Get the YouTube iframe and set its source with autoplay enabled
    var youtubeVideo = document.getElementById("youtube-video");
    youtubeVideo.src = "https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1";  // Note the autoplay=1 in the URL

    // Display the iframe
    youtubeVideo.style.display = "block";
});
