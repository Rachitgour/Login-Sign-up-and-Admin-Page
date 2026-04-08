const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

const signupUsername = document.getElementById("signupUsername");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

showSignup.addEventListener("click", function(e) {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

showLogin.addEventListener("click", function(e) {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = signupUsername.value;
    const email = signupEmail.value;
    const password = signupPassword.value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");

    signupForm.reset();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = loginEmail.value;
    const password = loginPassword.value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === "admin@gmail.com" && password === "1234") {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "admin.html";
        return;
    }

    if (!storedEmail) {
        alert("You don't have an account!");
    } 
    else if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
    } 
    else {
        alert("Invalid email or password!");
    }
});

// if (window.location.pathname.includes("admin.html")) {
//     if (localStorage.getItem("isAdmin") !== "true") {
//         alert("Access Denied!");
//         window.location.href = "index.html";
//     }
// }

function addProduct() {
    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;

    if (name === "" || price === "") {
        alert("Enter product details!");
        return;
    }

    let list = document.getElementById("productList");

    let li = document.createElement("li");
    li.innerHTML = `${name} - Rs.${price}`

    list.appendChild(li);
}