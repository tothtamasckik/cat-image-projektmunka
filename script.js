const generatebtn = document.getElementById("generateBtn");
const catpic = document.getElementById("img");
const tagSelect = document.getElementById('tagSelect');
const textArea = document.getElementById("textArea")
const array = ["Black cat", "Beer", "British", "Box", "Christmas", "Halloween", "Kitten", "Orange", "Steve jobs", "baby", "low quality", "manspreading", "mexican", "nyancat-gif"]





function Random() {
    let r =  Math.floor(Math.random() * (100000 - 1 + 1) ) + 1;
    let timestamp = Date.now()
    if (r == 1) {
      catpic.src = "https://d.ibtimes.co.uk/en/full/1796610/benjamin-netanyahu.png"
    }
    else if (textArea.value != "") {
      catpic.src = `https://cataas.com/cat/says/${textArea.value}?t=${timestamp}`;
    }
    else{
      
    
      catpic.src = `https://cataas.com/cat?t=${timestamp}`;
    }



    
    
    
    
    
    
}


async function initializeTags() {
      try {
        const response = await fetch('https://cataas.com/api/tags');
        const tags = await response.json();
        
        
        tags.sort();
        
        

        

        tags.forEach(tag => {
          if (array.includes(tag)) {
            const option = document.createElement('option');
            option.value = tag;
            option.textContent = tag;
            tagSelect.appendChild(option);
          }
          
        });
      } catch (error) {
        console.error('Error loading tags:', error);
        tagSelect.innerHTML = '<option value="">Error loading tags</option>';
      }
    }

    
    function loadCatWithTag() {
      const selectedTag = tagSelect.value;
      
      if (selectedTag) {
        let timestamp = Date.now()
        
        catpic.src = `https://cataas.com/cat/${selectedTag}?t=${timestamp}`;
      } 
      else {
        alert('Please select a tag first!');
        // piros :)
      }
    }


initializeTags()
