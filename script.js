// Efeito de floração: imagens aumentam suavemente ao passar o mouse
document.querySelectorAll('.foto').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transition = "transform 0.3s ease, filter 0.3s ease"; 
        item.style.transform = "scale(1.05)"; // Aumenta a imagem suavemente
        item.style.filter = "brightness(1.1)"; // Aumenta a luminosidade para dar um efeito mais delicado
    });
    item.addEventListener('mouseleave', () => {
        item.style.transition = "transform 0.3s ease, filter 0.3s ease";
        item.style.transform = "scale(1)"; // Retorna ao tamanho original
        item.style.filter = "brightness(1)"; // Retorna à luminosidade original
    });
});

// Efeito suave nas bordas do formulário
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = "0 0 8px rgba(255, 105, 180, 0.7)";  // Brilho suave ao focar no campo
    });
    input.addEventListener('blur', () => {
        input.style.boxShadow = "none";  // Retira o brilho ao sair do campo
    });
});
