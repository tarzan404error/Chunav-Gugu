// Simplified surname mapping to caste groups (for demonstration only)
const casteMap = {

  // BRAHMIN
  
  "Sharma": "Brahmin",
  "Mishra": "Brahmin",
  "Pandey": "Brahmin",
  "Tiwari": "Brahmin",
  "Chaturvedi": "Brahmin",
  "Dwivedi": "Brahmin",
  "Tripathi": "Brahmin",
  "Bhatt": "Brahmin",
  "Joshi": "Brahmin",
  "Upadhyay": "Brahmin",
  "Pandit": "Brahmin",
  "Prajapati": "Brahmin",
  "Chakraborty": "Brahmin",
  "Prakash": "Brahmin",
  "Shrivastava": "Brahmin",

  // -------------------------
  // YADAV / AHIR
  // -------------------------
  "Yadav": "Yadav",
  "Ahir": "Yadav",
  "Ray": "Yadav",
  "Rai": "Yadav",
  "Roy": "Yadav",
  "Paswan": "Yadav",

  // -------------------------
  // KURMI / KUSHWAHA
  // -------------------------
  "Singh": "Kurmi",
  "Patel": "Kurmi",
  "Kushwaha": "Kurmi",
  "Parsad": "Kurmi",
  "Prasad": "Kurmi",
  "Maurya": "Kurmi",

  // -------------------------
  // VAISHYA / BANIYA / MARWARI / JAIN
  // -------------------------
  "Agarwal": "Vaishya",
  "Gupta": "Vaishya",
  "Bansal": "Vaishya",
  "Goel": "Vaishya",
  "Mehta": "Vaishya",
  "Jain": "Vaishya",
  "Khandelwal": "Vaishya",
  "Maheshwari": "Vaishya",
  // "Paswan": "Vaishya",
  "Sharma": "Vaishya",
  "Mittal": "Vaishya",
  "Saw": "Vaishya",
  "Sahu": "Vaishya",

  // -------------------------
  // KSHATRIYA / RAJPUT
  // -------------------------
  "Rathore": "Rajput",
  "Chauhan": "Rajput",
  "Thakur": "Rajput",
  "Solanki": "Rajput",
  "Sisodia": "Rajput",
  "Rawat": "Rajput",
  "Saraf": "Rajput",
  "Sarraf": "Rajput",
  "Keshri": "Rajput",
  "Rajput": "Rajput",


  // -------------------------
  // SCHEDULED CASTE / DALIT (Generic surnames, regionally used)
  // -------------------------
  "Valmiki": "SC",
  "Chamar": "SC",
  "Mala": "SC",
  "Mahar": "SC",
  "Ram": "SC",
  "Das": "SC",
  "Nishad": "SC",
  "Ravidas": "SC",
  "Jatav": "SC",

  // -------------------------
  // OBC (Other Backward Classes)
  // -------------------------
  "Maurya": "OBC",
  "Kushwaha": "OBC",
  "Teli": "OBC",
  "Nai": "OBC",
  "Soni": "OBC",
  "Rajbhar": "OBC",

  // -------------------------
  // MUSLIM (Community-based)
  // -------------------------
  "Khan": "Muslim",
  "Ansari": "Muslim",
  "Sheikh": "Muslim",
  "Shaikh": "Muslim",
  "Malik": "Muslim",
  "Qureshi": "Muslim",
  "Siddiqui": "Muslim",
  "Farooqui": "Muslim",
  "Syed": "Muslim",
  "Mirza": "Muslim",
  "Pathan": "Muslim",
  "Ahmad": "Muslim",
  "Hussain": "Muslim",
  "Ali": "Muslim",
  "Raza": "Muslim",
  "Hashmi": "Muslim",
  "Sayeed": "Muslim",
  "Jafri": "Muslim",
  "Alam": "Muslim",
  "Yazdani": "Muslim",
  "Mansuri": "Muslim",
  "Bismil": "Muslim",


  // // -------------------------
  // // SIKH / PUNJABI
  // // -------------------------
  // "Singh": "Sikh",
  // "Kaur": "Sikh",
  // "Gill": "Sikh",
  // "Dhillon": "Sikh",
  // "Bajwa": "Sikh",
  // "Sandhu": "Sikh",

  // --------------------
  // Common Neutral Titles
  // --------------------
  "Kumar": "Title",
  "Raj": "Title",
  "Lal": "Title",
  "Nath": "Title",
  "Chandra": "Title",
  "Bhushan": "Title",
  "Mohan": "Title",
  "Kanta": "Title",
  "Rani": "Title"



  
};

function isMobile() {
  return window.innerWidth <= 700;
}

function setMobileBg(img) {
  const mainBg = document.querySelector('.main-bg');
  if (mainBg) {
    mainBg.style.backgroundImage = `url('${img}')`;
  }
}

function resetMobileBg() {
  setMobileBg('img1.png');
}

function showLoaderImages(callback) {
  if (isMobile()) {
    // Mobile: cycle background images
    const imgFiles = ["img1.png", "img2.png", "img3.png", "img4.png"];
    let idx = 0;
    function showNext() {
      setMobileBg(imgFiles[idx]);
      idx++;
      if (idx < imgFiles.length) {
        setTimeout(showNext, 400);
      } else {
        setTimeout(() => {
          resetMobileBg();
          callback();
        }, 400);
      }
    }
    showNext();
  } else {
    // Desktop: show loader images as before
    const loaderDiv = document.getElementById("loader-images");
    loaderDiv.innerHTML = '';
    loaderDiv.style.display = 'flex';
    const imgFiles = ["img1.png", "img2.png", "img3.png", "img4.png"];
    const imgs = imgFiles.map(src => {
      const img = document.createElement('img');
      img.src = src;
      loaderDiv.appendChild(img);
      return img;
    });

    let idx = 0;
    function showNext() {
      imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
      idx++;
      if (idx < imgs.length) {
        setTimeout(showNext, 400);
      } else {
        setTimeout(() => {
          loaderDiv.style.display = 'none';
          callback();
        }, 400);
      }
    }
    idx = 0;
    showNext();
  }
}

function predictVote() {
  const fullName = document.getElementById("nameInput").value.trim();
  const lastName = fullName.split(" ").pop();
  // Fix: Make surname case-insensitive
  const normalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  const casteGroup = casteMap[normalizedLastName] || "Unknown";

  let candidate = "";
  switch(casteGroup) {
    case "Brahmin":
      candidate = "Likely supports Candidate of Bhartiya Janta Party (BJP)";
      break;
    case "Yadav":
      candidate = "Tends to favor Candidate of Rashtriya Janata Dal (RJD)";
      break;
    case "Kurmi":
      candidate = "Often leans towards Candidate of Janata Dal (United) [JD(U)]";
      break;
    case "Vaishya":
      candidate = "Likely supports Candidate of Bhartiya Janta Party (BJP)";
      break;
    case "Rajput":
      candidate = "98% Chance You Likely supports Candidate of Bhartiya Janta Party (BJP)";
      break;
    case "SC":
      candidate = "Tends to favor Candidate of Rashtriya Janata Dal (RJD)";
      break;
    case "OBC":
      candidate = "Likely supports Candidate of Bhartiya Janta Party (BJP)";
      break;
    case "Muslim":
      candidate = "Predicted to support Candidate of Rashtriya Janata Dal (RJD)";
      break;
    case "Title":
      candidate = "hard to guess! Please provide me your proper surname.";
      break;
      
    default:
      candidate = "hard to guess! Please provide me your surname.";
  }

  document.getElementById("result").innerText = "";
  showLoaderImages(function() {
    document.getElementById("result").innerText =
      `${fullName}, your predicted vote : ${candidate}`;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.vote-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      predictVote();
    });
  }
  if (isMobile()) resetMobileBg();
});
