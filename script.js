
const getadviceBtn = document.getElementById("getadviceBtn");
const footForadvice = document.getElementById("footForadvice");

getadviceBtn.addEventListener("click", () => {
  // Clear previous advice (instead of overwriting the variable)
  footForadvice.textContent = "Loading advice...";

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json()) // parse JSON
    .then((data) => {
      // update the DOM with the fetched advice
      footForadvice.textContent = data.slip.advice;
    })
    .catch((error) => {
      console.log(error);
      footForadvice.textContent = "Something went wrong. Try again!";
    });
});
