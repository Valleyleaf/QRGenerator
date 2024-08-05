const download = document.querySelector(".download");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const qrContainer = document.querySelector(".#qrCode");
const qrText = document.querySelector(".qr-text");
const shareBtn = document.querySelector(".share-btn");
const sizes = document.querySelector(".sizes");

dark.addEventListener("input", handleDarkColor);
light.addEventListener("input", handleLightColor);
qrText.addEventListener("input", handleQRText);
sizes.addEventListener("change", handleSize);
// change is refering to the dropdown menu for sizes
shareBtn.addEventListener("click", handleShare);

const defaultUrl = "https://adahllof.netlify.app/"

let colorLight = "#fff",
colorDark = "000",
text = defaultUrl,
size = 300;
// Reminder to self that a let is an object and can contain multible different things.
// Forget the wc3 coding you did and remember this please. You don't need everything to be a const/var

function handleDarkColor(e){
    colorDark = e.target.value;
    generateQRCode;
}