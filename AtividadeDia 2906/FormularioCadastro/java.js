function validaFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha= document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar senha').value;

    if (name === '' || email === '' || senha === '' || confirmarSenha === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return false;
    }

    // Processar os dados do formulário aqui...
    // Exemplo: enviar os dados para o servidor, etc.

    alert('Cadastro realizado com sucesso!');
    return true;
}