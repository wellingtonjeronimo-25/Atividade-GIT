// Função para validar nome
function validarNome(nome) {
  return nome.trim().length >= 3;
}

// Função para validar email
function validarEmail(email) {
  // validação simples
  return email.includes("@") && email.includes(".");
}

// Função para validar mensagem
function validarMensagem(msg) {
  return msg.trim().length > 5;
}

// Mostrar dica de segurança
document.getElementById("btnInfo").addEventListener("click", () => {
  const dica = document.getElementById("dica");

  if (dica.style.display === "none") {
    dica.style.display = "block";
  } else {
    dica.style.display = "none";
  }
});

// Evento do formulário
document.getElementById("contatoForm").addEventListener("submit", (e) => 
{
  e.preventDefault(); // Evita recarregar a página

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // validações
  if (!validarNome(nome)) {
    alert("O nome precisa ter pelo menos 3 caracteres.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Digite um email válido.");
    return;
  }

  if (!validarMensagem(mensagem)) {
    alert("A mensagem deve ser maior que 5 caracteres.");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  
  // limpa o formulário
  document.getElementById("contatoForm").reset();
});

