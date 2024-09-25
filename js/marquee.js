
// Marquee textand getting the container
const text = "Onsite Sunday Service at Lagos and Aba Church: 9:00am - 12:00pm || Online Anoniting Service: Every first Saturday at 6:00am - 7:00am || Virtual Sunday Service at 9:00am - 10:30am.";
const marqueeContainer = document.getElementById('marqueeContainer');

// Get the modal and loading
const modal = document.getElementById("myModal");
const loading = document.getElementById("loading");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");

// Get the span element that closes the modal
const closeBtn = document.getElementsByClassName("closeBtn")[0];


// Creating the continous text function
function createMarquee(text) {
  const div = document.createElement('div');
  div.className = 'marquee';
  div.textContent = text;
  marqueeContainer.appendChild(div);
}
createMarquee(text);

// Simulate loading time
function loadContent() {
  return new Promise(resolve => setTimeout(resolve, 7000)); // 7 seconds delay
}

// When the user clicks the button, show loading and then open the modal, 
openModalBtn.onclick = async function() {
  loading.style.display = "flex"; // Show loading screen
  await loadContent(); // Wait for loading to finish
  loading.style.display = "none"; // Hide loading screen
  modal.style.display = "block"; // Show modal
}

// When the user clicks on span x, close the modal
closeBtn.onclick = function() {
      modal.style.display = "none"
  }

// When the user clicks anywhere outside of the modal,close it
window.onclick = function(event) {
  if(event.target == modal) {
      modal.style.display = "none";
  }
} 