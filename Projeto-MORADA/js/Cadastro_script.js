window.addEventListener('load', function() {
    const form = document.getElementById('imovelForm');
    const cadastrarBtnC = document.getElementById('cadastrarBtnC');
    const cancelarBtnC = document.getElementById('cancelarBtnC');
    const resultadoDiv = document.getElementById('resultado');

    cadastrarBtnC.addEventListener('click', function() {
        if (form.checkValidity()) {
            const emailC = document.getElementById('emailC').value;
            const telC = document.getElementById('telC').value;
            const opcao = document.querySelector('input[name="opcao"]:checked').value;
            const tipo = document.getElementById('tipo').value;
            const metros = document.getElementById('metros').value;
            const quartos = document.getElementById('quartos').value;
            const banheiros = document.getElementById('banheiros').value;
            const salas = document.getElementById('salas').value;
            const endereco = document.getElementById('endereco').value;
            const preco = document.getElementById('preco').value;
            const adicionais = document.getElementById('adicionais').value;

            resultadoDiv.innerHTML = `
                <div class="resultadoC">
                <h4 style="text-align: center;">Imóvel cadastrado com sucesso!</h4>
                <hr>
                <h4><strong>Dados:</strong></h4>
                <p><strong>Email de contato:</strong> ${emailC}</p>
                <p><strong>Telefone de contato:</strong> ${telC}</p>
                <p><strong>Tipo de negociação:</strong> ${opcao}</p>
                <p><strong>Tipo do imóvel:</strong> ${tipo}</p>
                <hr>
                <h4><strong>Dados do imóvel:</strong></h4>
                <p><strong>Área:</strong> ${metros}m²</p>
                <p><strong>Quartos:</strong> ${quartos}</p>
                <p><strong>Banheiros:</strong> ${banheiros}</p>
                <p><strong>Salas:</strong> ${salas}</p>
                <p><strong>Endereço:</strong> ${endereco}</p>
                <p><strong>Valor:</strong> R$${preco}</p>
                <hr>
                <h4><strong>Informações adicionais:</strong></h4>
                <p style="text-align: justify;" id="resultado-info-add"> ${adicionais}</p>
                </div>
            `;
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    cancelarBtnC.addEventListener('click', function() {
        form.reset();
        resultadoDiv.innerHTML = '';
    });
});
