// Rolagem suave para agendamento
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Scroll suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simulação de envio do formulário
const form = document.getElementById('form-agendamento');
const msg = document.getElementById('msg-sucesso');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Aqui você pode integrar com back-end PHP, Firebase, etc.
  msg.style.display = 'block';
  form.reset();
});


window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});

const banner = document.getElementById("banner-nutri");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      banner.classList.add("aparecendo");
    }
  });
}, {
  threshold: 0.3 // ativa quando 30% do elemento aparecer
});

observer.observe(banner);

const banne = document.getElementById("banner-nutri-2");

const observe = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      banne.classList.add("aparecendo");
    }
  });
}, {
  threshold: 0.3 // ativa quando 30% do elemento aparecer
});

observe.observe(banne);

//Novo elemento...

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById("form-agendamento").addEventListener("submit", function (e) {
  e.preventDefault();

  // Dados do formulário

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  // Número do WhatsApp de destino (somente números, com DDD e país, ex: 5585987654321)
  const numero = "5585985279267"; // Ex: 5585987654321

  // Monta a mensagem
  const texto = `*Agendamento de Consulta:*\n\n🧑 Nome: ${nome}\n📧 E-mail: ${email}\n📞 Telefone: ${telefone}\n💬 Motivo: ${mensagem}`;

  // Codifica a mensagem para URL
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // Abre o WhatsApp
  window.open(url, "_blank");
});
