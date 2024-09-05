document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var feedback = document.getElementById('feedback').value;

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('feedback').value = '';

  // Display the feedback
  var feedbackList = document.getElementById('feedbackList');
  var feedbackItem = document.createElement('div');
  feedbackItem.classList.add('feedback-item');
  feedbackItem.innerHTML = '<p><strong>' + name + '</strong> - ' + email + '</p><p>' + feedback + '</p>';
  feedbackList.insertBefore(feedbackItem, feedbackList.firstChild);
});
