document
  .getElementById("dateButtonFooter")
  .addEventListener("click", function () {
    var dateList = document.getElementById("dateList");
    // Vérifie si la liste des dates a la classe "hidden"
    if (dateList.classList.contains("hidden")) {
      dateList.classList.remove("hidden"); // Affiche la liste
      dateList.style.display = 'block'; // Assure que l'élément soit visible
    } else {
      dateList.classList.add("hidden"); // Masque la liste
      dateList.style.display = 'none'; // Assure que l'élément soit masqué
    }
  });
