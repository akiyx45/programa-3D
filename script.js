// ANIMAÇÃO DE ENTRADA
gsap.to("#titulo", {
  opacity: 1,
  y: -20,
  duration: 1.5
});

gsap.to("#card", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  delay: 0.5
});

// PARTÍCULAS NO FUNDO
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedX: Math.random() - 0.5,
    speedY: Math.random() - 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    ctx.fillStyle = "#ff2c2c";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    // loop
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// LOGIN
function login() {
  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("senha").value;

  if (user === "admin" && pass === "1234") {
    alert("Login OK 🚀");
  } else {
    alert("Erro!");
  }
}

// OUTRAS FUNÇÕES
function esqueceuSenha() {
  alert("Recuperação de senha!");
}

function registrar() {
  alert("Tela de cadastro em breve!");
}

// EFEITO MOUSE (PARALLAX)
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 20;
  let y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.getElementById("card").style.transform =
    `translate(${x}px, ${y}px)`;
});