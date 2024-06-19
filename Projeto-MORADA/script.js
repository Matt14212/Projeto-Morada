window.addEventListener('load', function() {
    const form = document.getElementById('imovelForm');
    const cadastrarBtn = document.getElementById('cadastrarBtn');
    const cancelarBtn = document.getElementById('cancelarBtn');
    const resultadoDiv = document.getElementById('resultado');

    cadastrarBtn.addEventListener('click', function() {
        if (form.checkValidity()) {
            const emailC= document.getElementById('emailC').value;
            const telC = document.getElementById('telC').value;
            const opcao = document.getElementById('opcao').value;
            const tipo = document.getElementById('tipo').value;
            const metros = document.getElementById('metros').value;
            const quartos = document.getElementById('quartos').value;
            const banheiros = document.getElementById('banheiros').value;
            const salas = document.getElementById('salas').value;
            const endereco = document.getElementById('endereco').value;
            const preco = document.getElementById('preco').value;
            const adicionais = document.getElementById('adicionais').value;

            resultadoDiv.innerHTML = `
                <div class="resultado">
                <h2>Imóvel cadastrado com sucesso</h2>
                <h3>Dados:</h3>
                <p><strong>Email de contato:</strong> ${emailC}</p>
                <p><strong>Telefone de contato:</strong> ${telC}</p>
                <p><strong>Tipo de negociação:</strong> ${opcao}</p>
                <p><strong>Tipo do imóvel:</strong> ${tipo}</p>
                <p><strong>Email de contato:</strong> ${emailC}</p>
                <h3>Dados do imóvel:</h3>
                <p><strong>Área:</strong> ${metros}m²</p>
                <p><strong>Quartos:</strong> ${quartos}</p>
                <p><strong>Banheiros:</strong> ${banheiros}</p>
                <p><strong>Salas:</strong> ${salas}</p>
                <p><strong>Endereço:</strong> ${endereco}</p>
                <p><strong>Valor:</strong> R$${preco}</p>
                <h3><strong>Informações adicionais:</strong> ${adicionais} </h3>
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
