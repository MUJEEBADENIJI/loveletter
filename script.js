function toggleCard() {
    let cardWrapper = document.querySelector(".card-wrapper");
   
    let audio = document.getElementById("bg-music");

    cardWrapper.classList.toggle("open");

    if (cardWrapper.classList.contains("open")) {
        // Play audio if it's paused
        if (audio.paused) {
            audio.play().catch(error => console.log("Audio playback error:", error));
        }

        
        // Resume all videos and ensure they loop
        videos.forEach(video => {
            video.loop = true; // Ensures the video loops when it ends
            video.play().catch(error => console.log("Video playback error:", error));
        });
   
    } else {
        // Pause all videos (but DO NOT reset them)
        videos.forEach(video => {
            video.pause();
        });

          // Pause and reset audio
          audio.pause();
          audio.currentTime = 0;
      }
  }
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const videos = document.querySelectorAll("video");
    const card = document.querySelector(".card");

    videos.forEach(video => {
        video.addEventListener("ended", function () {
            this.currentTime = 0; // Reset to the beginning
            this.play().catch(error => console.log("Video replay error:", error));
        });
    });

    card.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.log("Playback error:", error));
        }
        window.addEventListener("load", () => {
            const videos = document.querySelectorAll("video");
            videos.foreach(video => {
              video.play().catch(error => console.log("Autoplay failed:", error));
            });
        });

         // Play all videos when card opens
         setTimeout(() => {
            videos.forEach(video => {
                video.classList.remove("hidden");
                video.play().catch(error => console.log("Video playback error:", error));
            });
        }, 1000); // Delay for animation effect

        

    });
});
// Function to create falling roses
function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.innerHTML = '🌹'; // Unicode rose symbol

    // Set random horizontal position
    rose.style.left = Math.random() * window.innerWidth + 'px';

    // Set random animation duration
    rose.style.animationDuration = Math.random() * 3 + 2 + 's';

    // Append rose to the container
    document.body.appendChild(rose);

    // Remove rose after animation ends
    setTimeout(() => {
        rose.remove();
    }, 5000);
}

// Generate multiple falling roses
setInterval(createRose, 300);


// List of image sources for falling effect
const images = ["shot.jpg", "mama.jpg", "cute.jpg"]; // Replace with your actual image file names

// Function to create falling images
function createFallingImage() {
    const img = document.createElement('img');
    img.classList.add('falling-image');
    
    // Randomly select an image from the list
    img.src = images[Math.floor(Math.random() * images.length)];

    // Set random position and animation speed
    img.style.left = Math.random() * window.innerWidth + 'px';
    img.style.animationDuration = Math.random() * 4 + 3 + 's'; // Random fall speed

    // Append to falling container
    document.getElementById('falling-container').appendChild(img);

    // Remove after animation
    setTimeout(() => {
        img.remove();
    }, 5000);
}

// Generate multiple falling images
setInterval(createFallingImage, 500);
