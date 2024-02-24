/*
function toggleFeedbackForm() {
    var feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.style.display = (feedbackForm.style.display === "none" || feedbackForm.style.display === "") ? "block" : "none";
}

function submitFeedback() {
    // Add logic to handle the submitted feedback
    // For example, you can send the feedback data to the server
    alert("Feedback submitted!");
    // Hide the feedback form after submission (optional)
    toggleFeedbackForm();
}

function closeFeedbackForm() {
    var feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.style.display = "none";
}
*/

// Hide the feedback form initially
closeFeedbackForm();

function toggleFeedbackForm() {
    var feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.style.display = (feedbackForm.style.display === "none" || feedbackForm.style.display === "") ? "block" : "none";
}

function submitFeedback() {
    // Add logic to handle the submitted feedback
    // For example, you can send the feedback data to the server
    alert("Feedback submitted!");
    // Hide the feedback form after submission (optional)
    toggleFeedbackForm();
}

function closeFeedbackForm() {
    var feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.style.display = "none";
}
