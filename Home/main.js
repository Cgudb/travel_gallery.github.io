document.addEventListener('DOMContentLoaded', function () {
  const popupOverlay = document.getElementById('popupOverlay');
  const noShowCheckbox = document.getElementById('noShowCheckbox');

  // Check if the user has visited before
  const visitedBefore = localStorage.getItem('visitedBefore');

  if (!visitedBefore || (visitedBefore && localStorage.getItem('showPopup'))) {
    // Show the popup if it's the first visit or after 24 hours
    popupOverlay.style.display = 'flex';
  }

  // Set a flag to indicate that the user has visited
  localStorage.setItem('visitedBefore', 'true');
});

// Close the popup when the user clicks anywhere on the page
document.addEventListener('click', function () {
  const popupOverlay = document.getElementById('popupOverlay');
  const noShowCheckbox = document.getElementById('noShowCheckbox');

  if (!noShowCheckbox.checked) {
    popupOverlay.style.display = 'none';
    // Set a flag to show the popup again after 24 hours
    localStorage.setItem('showPopup', 'true');
  }
});

function closePopup() {
  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.style.display = 'none';
  // Set a flag to show the popup again after 24 hours
  localStorage.setItem('showPopup', 'true');
}
