const forumForm = document.getElementById('forumForm');
const postInput = document.getElementById('postInput');
const feedback = document.getElementById('formFeedback');

forumForm.addEventListener('submit', function(event) {
    // 1. Prevent the page from refreshing (the default behavior)
    event.preventDefault();

    const postValue = postInput.value.trim();

    // 2. The Validation Logic
    if (postValue === "") {
        feedback.textContent = "Error: You cannot submit an empty post!";
        feedback.style.color = "red";
    } else if (postValue.length < 10) {
        feedback.textContent = "Error: Your post must be at least 10 characters long.";
        feedback.style.color = "orange";
    } else {
        // 3. Success State
        feedback.textContent = "Success! Your post has been (simulated) submitted.";
        feedback.style.color = "green";
        
        // Optional: Clear the box after "submission"
        postInput.value = "";
    }
});
