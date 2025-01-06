// document.getElementById("theme-toggle").addEventListener("click", function () {
//     const container = document.getElementById("todo-container");
//     const themeButton = document.getElementById("theme-toggle");
  
//     // Toggle class for theme
//     container.classList.toggle("dark-mode");
//     container.classList.toggle("light-mode");
  
//     // Change icon
//     if (container.classList.contains("dark-mode")) {
//       themeButton.textContent = "☀️"; // Light mode icon
//     } else {
//       themeButton.textContent = "🌙"; // Dark mode icon
//     }
//   });
const btn = document.getElementById("kechki");

btn.addEventListener("click", () =>{
    if (document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.textContent = "🌙";

        const container = document.querySelector('.container');
        container.style.backgroundColor = "white";
        container.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn.textContent = "☀️";

        const container = document.querySelector('.container');
        container.style.backgroundColor = "black";
        container.style.color = "white";

        // Here is the correction
        container.style.boxShadow = "0px 0px 10px white";
    }
});
