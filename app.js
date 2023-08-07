const { reviewData } = window;

window.addEventListener("load", function () {
  createCard(reviewData);
});

// generate a card
const createCard = (reviewData) => {
  reviewData.forEach((elem) => {
    const cards = document.querySelector(".cards");
    const card = document.createElement("article");
    const uname = document.createElement("p"); // name
    const date = document.createElement("date"); // date
    const rating = document.createElement("p"); // rating
    const detail = document.createElement("p"); // comments
    cards.appendChild(card);
    card.className = "card";
    card.appendChild(uname);
    uname.className = "uname";
    uname.innerHTML = elem.uname;
    card.appendChild(date);
    date.innerHTML = elem.date;
    card.appendChild(rating);
    rating.className = "rating";
    rating.innerHTML = "";
    // display rating visually with filled and empty stars
    for (let i = 0; i < elem.rating; i++) {
      rating.innerHTML += "★";
    }
    for (let i = 0; i < 5 - elem.rating; i++) {
      rating.innerHTML += "☆";
    }
    card.appendChild(detail);
    detail.className = "detail";
    detail.innerHTML = elem.detail;
  });
};

//submit button event listener
const review = document.querySelector("#submitreview");
review.addEventListener("click", function (e) {
  //only if all fields are filled
  if (
    document.querySelector("#reviewername").value != "" &&
    document.querySelector("#reviewdate").value != "" &&
    document.querySelector("#rating").value != "" &&
    document.querySelector("#reviewdetail").value != ""
  ) {
    e.preventDefault();
    clearCard(reviewData); // first clear all cards
    submitReview(reviewData); // store data in the array
    createCard(reviewData); // re-create all cards
    clearData(); // clear user input fields
    // scroll back to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});

//store user input review data in the reviewData array
const submitReview = (reviewData) => {
  let newReview = {};
  newReview.uname = document.getElementById("reviewername").value;
  newReview.date = document.getElementById("reviewdate").value;
  newReview.rating = document.getElementById("rating").value;
  newReview.detail = document.getElementById("reviewdetail").value;
  reviewData.push(newReview);
};

// clear currently-displayed cards
const clearCard = (reviewData) => {
  const cards = document.querySelector(".cards");
  const card = document.querySelectorAll(".card");
  for (let i = 0; i < reviewData.length; i++) {
    cards.removeChild(card[i]);
  }
};

// clear user input values in review form
const clearData = () => {
  document.querySelector("#reviewername").value = "";
  document.querySelector("#reviewdate").value = "";
  document.querySelector("#rating").value = "";
  document.querySelector("#reviewdetail").value = "";
};
