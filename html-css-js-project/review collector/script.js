
let rating = 0;

const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        rating = this.dataset.val;
        stars.forEach(s => s.classList.remove('active'));
        for(let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
            
        }
    });
});



function submitReview() {

    let userName = document.getElementById("username").value;
    let userEmail = document.getElementById("email").value;
    let reviewText = document.getElementById("review").value;

    let initials  = userName.slice(0, 2).toUpperCase();

     let noReviews = document.querySelector("#reviews-list h1");
    if (noReviews) {
        noReviews.remove();
    }

    let card= `
  <div class="review-card">
    <div class="circle">${initials}</div>
    <p>${reviewText}</p>
  </div>
`;
         document.getElementById("reviews-list").innerHTML += card;

     document.getElementById("username").value = "";
     document.getElementById("email").value = "";
     document.getElementById("review").value = "";

}
