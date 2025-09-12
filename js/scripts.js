
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
              .scrollIntoView({ behavior: "smooth" });
    }
  });
});


const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "admin@example.com" && password === "admin123") {
    alert("Welcome Admin! Redirecting to Admin Dashboard...");
    window.location.href = "admin-dashboard.html"; 
  } else {
    alert("Welcome back! Redirecting to Home Page...");
    window.location.href = "index.html";
  }
});




function updateNavbar() {
  const navLinks = document.getElementById("navLinks");
  if (!navLinks) return;

  navLinks.innerHTML = "";

  const role = localStorage.getItem("userRole"); 

  let commonLinks = `
    <li><a href="index.html" class="hover:text-orange-400">Home</a></li>
    <li><a href="about.html" class="hover:text-orange-400">About</a></li>
    <li><a href="menu.html" class="hover:text-orange-400">Menu</a></li>
    <li><a href="contact.html" class="hover:text-orange-400">Contact</a></li>
  `;

  if (role === "admin") {
    navLinks.innerHTML = commonLinks + `
      <li><a href="admin-dashboard.html" class="hover:text-orange-400">Dashboard</a></li>
      <li><a href="#" onclick="logout()" class="hover:text-orange-400">Logout</a></li>
    `;
  } else if (role === "user") {
    navLinks.innerHTML = commonLinks + `
      <li><a href="#" onclick="logout()" class="hover:text-orange-400">Logout</a></li>
    `;
  } else {
    navLinks.innerHTML = commonLinks + `
      <li><a href="login.html" class="hover:text-orange-400">Login</a></li>
      <li><a href="signup.html" class="hover:text-orange-400">Sign Up</a></li>
    `;
  }
}

function logout() {
  localStorage.removeItem("userRole");
  alert("Logged out successfully.");
  window.location.href = "index.html";
}


document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "admin@example.com" && password === "admin123") {
    localStorage.setItem("userRole", "admin");
    alert("Welcome Admin!");
    window.location.href = "admin-dashboard.html";
  } else {
    localStorage.setItem("userRole", "user");
    alert("Welcome back!");
    window.location.href = "index.html";
  }
});


document.addEventListener("DOMContentLoaded", updateNavbar);




