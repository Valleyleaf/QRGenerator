const download = document.querySelector(".download");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const qrContainer = document.querySelector(".#qr-code");
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
//Above is default Url that will generate if user does not enter any info. Maybe change later.

let colorLight = "#fff",
colorDark = "#000",
text = defaultUrl,
size = 300;
// Reminder to self that a let is an object and can contain multible different things.
// Forget the wc3 coding you did and remember this please. You don't need everything to be a const/var

function handleDarkColor(e){
    colorDark = e.target.value;
    generateQRCode();
}

function handleLightColor(e){
    colorLight = e.target.value;
    generateQRCode();
}

function handleQRText(e){
    const value = e.target.value;
    text = value;
    if(!value){
        text = defaultUrl;
    }
    generateQRCode();
    //If user does not enter a value, this will generate the defaultUrl.
}

async function generateQRCode() {
    qrContainer.innerHTML = "";
    //What the hell is this?
    new QRCode("qr-code", {
        text,
        height: size,
        width: size,
        colorLight,
        colorDark,

    });
    download.href = await resolveDataUrl();
}

async function handleShare(){
    setTimeout(async () =>{
        try{
            const base64url = await resolveDataUrl();
            const blob = await (await fetch(base64url)).blob();
            //What the hell is this?
            const file = new File([blob], "QRCode.png", {
                type: blob.type,
            });
        }catch(error){
            alert("Your browser does not support sharing.");
        }
    }, 100);
}
//I do not understand this function. Need to get with mentor to explain.

function handleSize(e){
    size = e.target.value;
    generateQRCode();
}

function resolveDataUrl(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = document.querySelector("#qr-code img");
            if(img.currentSrc){
                resolve(img.currentSrc);
                return;
            }
            const canvas = document.querySelector("canvas");
            resolve(canvas.toDataURL());
        }, 50);
    })
}
generateQRCode();