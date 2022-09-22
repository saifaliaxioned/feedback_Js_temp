// feedback function
var feedbackList = document.querySelectorAll('.feedback-list');
var feedback = document.querySelectorAll('.feedback');
var feedText = document.querySelector('.feedback-text');
var reviewBtn = document.querySelector('.review-btn');
var feedResult = "";
feedbackList.forEach(function (list ,index) {
  list.addEventListener ('click', function () {
    var activeFeed = document.querySelector('.active-list');
    activeFeed.classList.remove('active-list');
    list.classList.add('active-list');
    feedResult = feedback[index].innerHTML;
    feedText.innerHTML = feedResult;
  })
});

reviewBtn.addEventListener('click' , showReview);

function showReview() {
  var feedbackCategory = document.querySelector('.feedback-category');
  var showResult = document.querySelector('.result');
  showResult.classList.remove('hideDiv');
  feedbackCategory.classList.add('hideDiv');
}





















