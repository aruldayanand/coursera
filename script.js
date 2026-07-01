function addRecommendation() {
  const input = document.getElementById("new_recommendation");
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  const container = document.getElementById("all_recommendations");
  const recommendation = document.createElement("div");
  recommendation.className = "recommendation";
  recommendation.innerHTML = "<span>&#8220;</span>" + text + "<span>&#8221;</span>";

  container.appendChild(recommendation);
  input.value = "";

  if (typeof showPopup === "function") {
    showPopup(true);
  }
}
function showPopup(bool) {
    if (bool) {
        document.getElementById("popup").style.visibility = "visible";
    } else {
        document.getElementById("popup").style.visibility = "hidden";
    }
}