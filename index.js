// --- Função de login (testável com Jest) ---
function validarLogin(user, password) {
  if (user === "admin" && password === "1234") {
    return "✅ Login realizado com sucesso! Bem-vindo " + user + "!";
  } else {
    return "❌ Usuário ou senha incorretos!";
  }
}

// --- Código que roda no navegador ---
if (typeof document !== "undefined") {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const user = prompt("Digite seu usuário:");
      const password = prompt("Digite sua senha:");

      alert(validarLogin(user, password));
    });
  }
}

// --- Exporta a função para ser usada nos testes ---
module.exports = { validarLogin };
