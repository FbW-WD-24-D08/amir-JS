import { question, questionInt, keyInSelect, keyInYN } from "readline-sync";

let name = question("Wie ist dein Name? > ").trim();
let age = questionInt("Wie alt bist du? > ");

name = name.toUpperCase();

const iphones = ["iPhone 14-Promax", "iPhone 15-Promax", "iPhone 16-Promax"];
const iphone = keyInSelect(iphones, "Welches iPhone-Modell magst du? ");

if (iphone === -1) {
  console.log("❌ Du hast das Programm abgebrochen.");
} else {
  console.log(
    `✅ Hallo ${name}, du bist ${age} Jahre alt! Du magst das iPhone-Modell ${iphones[iphone]}.`
  );
}

if (keyInYN("Magst du auch Samsung-Handys?")) {
  console.log("📱 Cool! Vielleicht gefällt dir das Samsung Galaxy S23.");
} else {
  console.log("🍏 Du bist also ein echter Apple-Fan! 🍏");
}
