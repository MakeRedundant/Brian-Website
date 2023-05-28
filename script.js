// Array of languages with their respective texts and flags
let languages = [
  { text: "Hola", flag: "es" },
  { text: "Bonjour", flag: "fr" },
  { text: "こんにちは", flag: "jp" },
  { text: "你好", flag: "cn" },
  { text: "Hallo", flag: "de" },
  { text: "Ciao", flag: "it" },
  { text: "Olá", flag: "pt" },
  { text: "Привет", flag: "ru" },
  { text: "Merhaba", flag: "tr" },
  { text: "안녕하세요", flag: "kr" },
  { text: "नमस्ते", flag: "in" },
  { text: "Xin chào", flag: "vn" },
  { text: "สวัสดี", flag: "th" },
  { text: "Salam", flag: "my" },
  { text: "Kumusta", flag: "ph" },
  { text: "Halo", flag: "id" },
  { text: "ဟယ်လို", flag: "mm" },
  { text: "ជំរាបសួរ", flag: "kh" },
  { text: "Hallo", flag: "de" },
  { text: "Hej", flag: "se" },
  { text: "Hei", flag: "fi" }
];
let index = 0;

// Function to change the language
function changeLanguage() {
  let language = languages[index];
  document.getElementById("hello").innerHTML = `<span id="flag" class="flag-icon 
  flag-icon-${language.flag}"></span> ${language.text}`;
  index = (index + 1) % languages.length;
}

// "Coding is ..." effect
let message = "CODING is pretty fun as well 💻";
let messageIndex = 0;
let interval = setInterval(function () {
  document.getElementById("Codingtext").innerHTML += message.charAt(messageIndex);
  messageIndex++;
  if (messageIndex > message.length) {
    // Reset the message index and clear the text
    messageIndex = 0;
    document.getElementById("Codingtext").innerHTML = "";
  }
}, 100);

// Toggle dark mode
let darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
const darkModeToggleNav = document.querySelector("#dark-mode-toggle-nav");
darkModeToggleNav.addEventListener("click", toggleDarkMode);
