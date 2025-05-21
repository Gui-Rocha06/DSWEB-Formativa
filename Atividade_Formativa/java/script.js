document.addEventListener("DOMContentLoaded", function () {
  const botaoCadastro = document.querySelector(".cadastro-popup");
  const popup = document.getElementById("popupSobrepor");
  const botaoFechar = document.getElementById("fecharPopup");

  if (!botaoCadastro || !popup || !botaoFechar) {
    console.error("Erro: elementos do popup não encontrados no DOM.");
    return;
  }

  botaoCadastro.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  botaoFechar.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (evento) {
    if (evento.target === popup) {
      popup.style.display = "none";
    }
  });
});

window.addEventListener('scroll', () => {
  const topo = document.querySelector('.topo');
  if(window.scrollY > 300) {
    topo.classList.add('scroll');
  } else {
    topo.classList.remove('scroll');
  }
});



