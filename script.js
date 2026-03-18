const generatebtn = document.getElementById("generateBtn");
const catpic = document.getElementById("img");
const tagSelect = document.getElementById('tagSelect');







function Random() {
    
    
    
    let timestamp = Date.now()
    
    catpic.src = `https://cataas.com/cat?t=${timestamp}`;
    
    
    
    
    
}


async function initializeTags() {
      try {
        const response = await fetch('https://cataas.com/api/tags');
        const tags = await response.json();
        
        
        tags.sort();
        
        
        tags.forEach(tag => {
          const option = document.createElement('option');
          option.value = tag;
          option.textContent = tag;
          tagSelect.appendChild(option);
        });
      } catch (error) {
        console.error('Error loading tags:', error);
        tagSelect.innerHTML = '<option value="">Error loading tags</option>';
      }
    }

    
    function loadCatWithTag() {
      const selectedTag = tagSelect.value;
      
      if (selectedTag) {
        
        catpic.src = `https://cataas.com/cat/${selectedTag}`;
      } 
      else {
        alert('Please select a tag first!');
        // piros :)
      }
    }


initializeTags()
