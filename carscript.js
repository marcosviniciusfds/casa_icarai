  document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const dots = container.querySelectorAll('.dot');

    let index = 0;
    let interval;

    // Atualiza exibição de imagens e indicadores
    function updateCarousel() {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        img.style.display = i === index ? 'block' : 'none';
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    // Avançar
    function nextSlide() {
      index = (index + 1) % images.length;
      updateCarousel();
    }

    // Voltar
    function prevSlide() {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    }

    // Ir para slide específico (clicando na bolinha)
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        index = parseInt(dot.dataset.index);
        updateCarousel();
        resetAutoPlay();
      });
    });

    // Eventos dos botões
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoPlay();
    });

    // Auto play
    function startAutoPlay() {
      interval = setInterval(nextSlide, 3000); // muda a cada 3s
    }

    function resetAutoPlay() {
      clearInterval(interval);
      startAutoPlay();
    }

    // Inicializa carrossel
    updateCarousel();
    startAutoPlay();
  });