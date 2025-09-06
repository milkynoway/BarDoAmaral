document.getElementById("loginBtn").addEventListener("click", function() {
  const user = prompt("Digite seu usuário:");
  const password = prompt("Digite sua senha:");

  if (user === "admin" && password === "1234") {
    alert("✅ Login realizado com sucesso! Bem-vindo " + user + "!");
  } else {
    alert("❌ Usuário ou senha incorretos!");
  }
});
