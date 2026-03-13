const generatebtn = document.getElementById("generateBtn");
const catpic = document.getElementById("img");
const download = document.getElementById("download")




function Random() {
    
    
    
    const timestamp = Date.now();
    catpic.src = `https://cataas.com/cat?t=${timestamp}`;
    download.href = catpic.src;
    
}