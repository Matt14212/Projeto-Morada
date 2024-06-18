window.addEventListener('load', function() {
    const form = document.getElementById('cadastroForm');
    const cadastrarBtn = document.getElementById('cadastrarBtn');
    const cancelarBtn = document.getElementById('cancelarBtn');
    const resultadoDiv = document.getElementById('resultado');

    cadastrarBtn.addEventListener('click', function() {
        if (form.checkValidity()) {
            const nome= document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const email = document.getElementById('email').value;
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;
            const data = document.getElementById('data').value;

            resultadoDiv.innerHTML = `
                <div class="resultado">
                <h2>Cadastro realizado com sucesso!</h2>
                <h3>Seus dados:</h3>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Data de nascimento:</strong> ${data}</p>
                <p><strong>Usuário:</strong> ${usuario}</p>
                <p><strong>Senha:</strong> ${senha}</p>
                </div>
            `;
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    cancelarBtn.addEventListener('click', function() {
        form.reset();
        resultadoDiv.innerHTML = '';
    });
});
