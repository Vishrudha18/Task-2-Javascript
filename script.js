// Color Change Button
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
    colorBtn.style.backgroundColor =
        colorBtn.style.backgroundColor === "green" ? "#2563eb" : "green";
});

// Greeting Alert
function showGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
}

// Addition Calculator
function addNumbers() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 + num2;
    document.getElementById("result").innerText =
        "Result: " + result;
}
