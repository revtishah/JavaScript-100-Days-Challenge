//CREATE VARIABLES
const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

btn.addEventListener("click", generateLink);

function generateLink(e) {
  e.preventDefault();
  //console.log(gLink.value);

  const glinkValue = gLink.value;
  const confirmLink = gLink.value.includes("https://drive.google.com/file/d/");

  if (confirmLink == true) {
    const getDownloadLink = gLink.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=dpwnload&id="
      )
      .replace("/view?usp=sharing", "");

    console.log(getDownloadLink);
  }
}
