function findAge() {
  let age = document.getElementById("ageinput").value;
  let result = document.getElementById("result");
  let progressBox = document.getElementById("progressBox");
  let progressBar = document.getElementById("progressBar");

  if (age === "") {
    alert("Please enter your age");
    return;
  }


  progressBox.style.display = "block";
  progressBar.style.width = "0%";
  result.innerText = "Loading...";

  
  setTimeout(() => {
    progressBar.style.width = "15%";
    result.innerText = "Calculating...";
  }, 1000);

  
  setTimeout(() => {
    progressBar.style.width = "30%";
    result.innerText = "Asking AI...";
  }, 2000);

  
  setTimeout(() => {
    progressBar.style.width = "45%";
    result.innerText = "Discussing with Elon Musk...";
  }, 3000);

  
  setTimeout(() => {
    progressBar.style.width = "60%";
    result.innerText = "Checking satellites...";
  }, 4000);

  
  setTimeout(() => {
    progressBar.style.width = "80%";
    result.innerText = "Doing something...";
  }, 5000);

  
  setTimeout(() => {
    progressBar.style.width = "90%";
    result.innerText = "Verifying...";
  }, 6000);


  setTimeout(() => {
    progressBar.style.width = "100%";
    result.innerText = "Your age is: " + age;

   setTimeout(() => {
    progressBox.style.display="none";
   }, 0);

},7000);
}