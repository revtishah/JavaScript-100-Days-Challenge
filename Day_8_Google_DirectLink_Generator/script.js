//CREATE VARIABLES
const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

const copy = document.querySelector(".copy");
const copyAudio = document.querySelector(".copy-audio");
const copyVideo = document.querySelector(".copy-video");

btn.addEventListener("click", generateLink);

function generateLink(e) {
  e.preventDefault();
  //console.log(gLink.value);
  debugger;
  const glinkValue = gLink.value;
  const confirmLink = gLink.value.includes("https://drive.google.com/file/d/");

  if (confirmLink == true) {
    const getDownloadLink = gLink.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=dpwnload&id="
      )
      .replace("/view?usp=sharing", "");

    downloadLink.value = getDownloadLink;
    //console.log(getDownloadLink);

    function copyText(target) {
      if (target.value == "") {
        alert("Please generate download Link");
      } else {
        navigator.clipboard.writeText(target.value).then(() => {
          copy.textContent = "Copied!!";
          copyAudio.textContent = "Copied!!!";
          copyVideo.textContent = "Copied!!!";
          setTimeout(() => {
            copy.textContent = "Copy";
            copyAudio.textContent = "Copy";
            copyVideo.textContent = "Copy";
          }, 3000);
        });
        alert("Link has been copied to clipboard");
      }
    }

    copy.addEventListener("click", () => {
      //debugger;
      return copyText(downloadLink);
    });

    //EMBED Audio function
    const audio1 = '<audio width="300 height="32" controls="controls src="';
    const audio2 = '" type="audio/mp3></audio>"';
    const embedAudio = document.getElementById("embed-audio");

    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;

    //console.log(embedAudio.value);

    //COPY AUDIO EMBED CODE
    copyAudio.addEventListener("click", () => {
      debugger;
      return copyText(embedAudio);
    });

    //EMBED VIDEO
    const getVideoLink = gLink.value.replace("/view?usp=sharing", "");

    const video1 = '<iframe src="';
    const video2 = '/preview" width="560" height="315"</iframe>';

    const embedVideo = document.getElementById("embed-video");

    embedVideo.value = `${video1}${getVideoLink}${video2}`;

    //COPY Video EMBED CODE
    copyVideo.addEventListener("click", () => {
      debugger;
      return copyText(embedVideo);
    });
  } else {
    alert("Please enter a Google Drive File Link");
  }
}
