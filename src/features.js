// function show(){
//     let name=prompt("what is your name?");
//    alert(`Welcome ${name} to Rieta's Bank`);
// }
// // else{
// // //     alert(`enter a valid age please`)
// // // }
// let who =document.getElementById("why");
// who.addEventListener("click",show);


  // Prompt for user's name
  const userName = prompt("Welcome to the Features page! What's your name?");
        
  // Check if user entered a name
  if (userName) {
      // Alert the user's name
      alert(`Hello, ${userName}!`);
      
      // Update the paragraph with the user's name
      const welcomeText = document.getElementById('angel');
      welcomeText.innerHTML = `Hello, <span class="username"> ${userName}</span>! Explore the innovative solutions and services we offer to make your financial journey seamless and rewarding.`;


       // Add animation effect
       setTimeout(() => {
        welcomeText.style.opacity = "1";
        welcomeText.style.transform = "translateY(0)";
    }, 100); // Delays animation slightly for a better effect
  }


   // Images fade-in and fade-out animation
   const featureImages = document.querySelectorAll('.card img');
   let currentIndex = 0;

   function showNextImage() {
       // Remove the 'visible' class from the current image
       featureImages[currentIndex].classList.remove('visible');

       // Move to the next image
       currentIndex = (currentIndex + 1) % featureImages.length;

       // Add the 'visible' class to the new current image
       featureImages[currentIndex].classList.add('visible');
   }

   // Initial image visibility
   featureImages[currentIndex].classList.add('visible');

   // Set an interval to cycle through images
   setInterval(showNextImage, 2000); // 4 seconds per image

