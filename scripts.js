document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Seleciona o elemento da seção "Sobre Mim"
    const sobreMimSection = document.querySelector('.SobreMim');

    // 🔹 Seleciona os elementos do carrossel de projetos
    const slider = document.querySelector(".projects-slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    // Verifica se os elementos do carrossel existem antes de adicionar eventos
    if (slider && prevBtn && nextBtn) {
        let scrollAmount = 0; // Posição inicial do carrossel
        let cardWidth = 320; // Largura do card + margem
        let maxScroll = slider.scrollWidth - slider.clientWidth; // Máximo deslocamento

        // Evento para ir para o próximo conjunto de projetos
        nextBtn.addEventListener("click", () => {
            if (scrollAmount < maxScroll) {
                scrollAmount += cardWidth;
                slider.style.transform = `translateX(-${scrollAmount}px)`;
            }
        });

        // Evento para voltar ao conjunto anterior de projetos
        prevBtn.addEventListener("click", () => {
            if (scrollAmount > 0) {
                scrollAmount -= cardWidth;
                slider.style.transform = `translateX(-${scrollAmount}px)`;
            }
        });

        // Atualiza o valor máximo de deslocamento ao redimensionar a tela
        window.addEventListener("resize", () => {
            maxScroll = slider.scrollWidth - slider.clientWidth;
        });
    }

    // 🔹 Função para verificar se a seção "Sobre Mim" está visível na tela
    function checkVisibility() {
        if (!sobreMimSection) return; // Se o elemento não existir, sai da função

        const rect = sobreMimSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Verifica se a seção está dentro da área visível da tela
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
            sobreMimSection.classList.add("visible"); // Adiciona a classe visível
            window.removeEventListener("scroll", checkVisibility); // Remove o evento para otimizar desempenho
        }
    }

    // Adiciona o evento de rolagem para verificar a visibilidade da seção "Sobre Mim"
    window.addEventListener('scroll', checkVisibility);

    // Verifica a visibilidade logo após o carregamento da página
    checkVisibility();
});
