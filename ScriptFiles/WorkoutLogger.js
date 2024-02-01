function wrkoutlogger() {
  var exrcs = document.getElementById("exrcs").value;
  var set = parseInt(document.getElementById("set").value);
  var rep = parseInt(document.getElementById("rep").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var date = document.getElementById("date").value;

  var listItem = document.createElement("div");

  // var listItem = document.createElement('li');

  listItem.textContent =
    exrcs +
    " - " +
    set +
    " sets x " +
    rep +
    " reps at " +
    weight +
    " kg on " +
    date;

  var logger = document.getElementById("logger");

  logger.appendChild(listItem);
  document.getElementById("exrcs").value = "";
  document.getElementById("set").value = "";
  document.getElementById("rep").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("date").value = "";
}
