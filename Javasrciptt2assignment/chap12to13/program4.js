let ch = prompt("Enter a single character:");
if (!ch) {
  alert("No input given");
} else {
  
  let c = ch.charAt(0).toLowerCase();

  
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    alert(true);   // it's a vowel
  } else {
    alert(false);  // not a vowel
  }
}