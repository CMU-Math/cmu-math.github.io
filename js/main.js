$(document).ready(function() {
  $('.parallax').parallax();
  $('.slider').slider();
});

var values = [
  "CMIMC doesn't follow the same contest model that all the other competitions do. Instead, when CMIMC was founded, we built our own system up from the ground, taking every aspect of the user experience into consideration and putting deep thought into each new ideas that our staff proposes. We consider our fresh outlook on things to be one of our greatest strengths.",
  "We carefully collect and examine data from our previous contests to ensure that we improve in any of our weak spots. Two years ago, we discovered through post-competition surveys that competitors weren't fond of the individual finals round. The next year, we decided to completely reformat this round, to the great enjoyment of the competitors!",
  "Our extremely quick success has inspired other competitions to improve on some of their own weak spots where we have excelled. For example, due to our big effort into maintaining an excellent website, several other competitions have updated their own websites to get on our level. We are also known for our strong presence on social media and our extremely responsive communication.",
  "We make great use of technology in order to constantly improve the contest experience. This year, we are developing a mobile app to keep people updated on the contest date any time an important event is about to begin or any big changes that may happen throughout the day.",
  "The idea to hold a math competition at Carnegie Mellon was already in motion before we came here as freshmen, but no effort was actually successful. With our determination, we decided to step up to the plate, accept the challenge, and organize this event.",
  "It is our responsibility to make sure that we accommodate people from all over the country. We specifically designed registration so that nobody is restricted by geographical boundaries to come to our event and join in on the fun!",
  "After seeing all of the success that we had in the first two years, CMIMC decided to found the US Math Competition Association. The USMCA is a network of all the colleges throughout the US organizing competitions, and encouraging them to collaborate and share their success with the others. We provide advice and resources to newly-formed competitions and connect organizers from well-established ones.",
  "We are the first math competition to incorporate computer science and algorithmic problems into our contests - quite fittingly since we <i>are</i> at CMU - which has paved the way for other competitions to pick up on the trend."
]

function showValue(n) {
  $('#values').html(values[n]);
}

function hideValue() {
  $('#values').html("");
}
