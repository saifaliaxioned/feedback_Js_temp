// feedback function
var feedbackList = document.querySelectorAll('.feedback-list');
var feedText = document.querySelector('.feedback-text');
var reviewBtn = document.querySelector('.review-btn');
var feedResult = "";
var activeFeed = document.querySelector('.active-list');

reviewBtn.addEventListener('click', showReview);

function showReview() {
  var feedbackCategory = document.querySelector('.feedback-category');
  var activeFeed = document.querySelector('.active-list');
  var feedback = activeFeed.children[0];
  var showResult = document.querySelector('.result');
  showResult.classList.remove('hideDiv');
  feedbackCategory.classList.add('hideDiv');
  if (feedback.classList.contains('feedback')) {
    feedText.innerHTML = feedback.innerText;
  }
}

feedbackList.forEach(function (list) {
  list.addEventListener('click', function () {
    activeFeed.classList.remove('active-list');
    list.classList.add('active-list');
  })
});



















