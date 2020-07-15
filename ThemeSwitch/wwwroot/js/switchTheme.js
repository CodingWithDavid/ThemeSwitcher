function switchSheet() {
  let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/site.css") {
        theme.href = "css/darksite.css";
  } else {
        theme.href = "css/site.css";
  }
}

function dynamicSheet(sheet) {
    let theme = document.getElementById("theme");

    if (sheet === "dark") {
        theme.href = "css/darksite.css";
    }else {
        theme.href = "css/site.css";
    }
}