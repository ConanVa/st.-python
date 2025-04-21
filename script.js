document
  .getElementById("dateButtonFooter")
  .addEventListener("click", function () {
    var dateList = document.getElementById("dateList");

    // Vérifie si la liste des dates a la classe "hidden"
    if (dateList.classList.contains("hidden")) {
      // Affiche la liste des dates
      dateList.classList.remove("hidden");
      dateList.style.display = "block"; // Assure que l'élément soit visible
    } else {
      // Masque la liste des dates
      dateList.classList.add("hidden");
      dateList.style.display = "none"; // Assure que l'élément soit masqué
    }
  });
