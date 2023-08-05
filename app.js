const { reviewData } = window;

window.addEventListener("load", function () {
  createCard(reviewData);
});

const createCard = (reviewData) => {
  reviewData.forEach((elem) => {
    const cards = document.querySelector(".cards");
    const card = document.createElement("article");
    const uname = document.createElement("p");
    const date = document.createElement("date");
    const rating = document.createElement("p");
    const detail = document.createElement("p");
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

const review = document.querySelector("#submitreview");
review.addEventListener("click", function (e) {
  if (
    document.querySelector("#reviewername").value != "" &&
    document.querySelector("#reviewdate").value != "" &&
    document.querySelector("#rating").value != "" &&
    document.querySelector("#reviewdetail").value != ""
  ) {
    e.preventDefault();
    clearCard(reviewData);
    submitReview(reviewData);
    createCard(reviewData);
    clearData();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});

const submitReview = (reviewData) => {
  let newReview = {};
  newReview.uname = document.getElementById("reviewername").value;
  newReview.date = document.getElementById("reviewdate").value;
  newReview.rating = document.getElementById("rating").value;
  newReview.detail = document.getElementById("reviewdetail").value;
  reviewData.push(newReview);
};

const clearCard = (reviewData) => {
  const cards = document.querySelector(".cards");
  const card = document.querySelectorAll(".card");
  for (let i = 0; i < reviewData.length; i++) {
    cards.removeChild(card[i]);
  }
};

const clearData = () => {
  document.querySelector("#reviewername").value = "";
  document.querySelector("#reviewdate").value = "";
  document.querySelector("#rating").value = "";
  document.querySelector("#reviewdetail").value = "";
};
