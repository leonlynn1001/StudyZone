const searchBox = document.querySelector(".searchInput");
const coursesName = document.querySelectorAll(".courseTitle");
const searchBtn = document.querySelector(".btn");
const openVd = document.querySelectorAll(".viewBtn");
searchBtn.addEventListener("click", () => {
  //   alert(searchBox.value);
  // for (let i = 0; i < courses.length; i++) {
  //   if (couresName[i].innerText.toLowerCase == searchBox.value.toLowerCase) {
  //     console.log(couresName[i].parentNode);
  //     couresName[i].parentNode.style.display = "block";
  //   } else {
  //     couresName[i].parentNode.style.display = "none";
  //   }
  // }
  coursesName.forEach((name) => {
    if (
      name.textContent.toLocaleLowerCase === searchBox.value.toLocaleLowerCase
    ) {
      console.log(name.parentElement.parentElement);
      name.parentElement.parentElement.style.display = "block";
    } else {
      name.parentElement.parentElement.style.display = "none";
    }
  });
});
