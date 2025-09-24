const { validarLogin } = require("../index");

test("login correto deve retornar mensagem de sucesso", () => {
  expect(validarLogin("admin", "1234")).toBe("✅ Login realizado com sucesso! Bem-vindo admin!");
});

test("login incorreto deve retornar mensagem de erro", () => {
  expect(validarLogin("user", "senhaErrada")).toBe("❌ Usuário ou senha incorretos!");
});
