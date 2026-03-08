const generatebtn = document.getElementById("generateBtn");
const catpic = document.getElementById("img");




function Random() {
    
    
    
    const timestamp = Date.now();
    catpic.src = `https://cataas.com/cat?t=${new Date().getTime()}`;
    
}