document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Pega os valores dos campos
    var nome = document.getElementById('nome').value;
    var assunto = document.getElementById('assunto').value;

    // Formata a mensagem para enviar via WhatsApp
    var texto = "Olá, meu nome é " + nome + ".\n" + assunto;

    // Número de WhatsApp (adicione o DDI e DDD sem espaços ou símbolos)
    var numeroWhatsApp = "5581988065890"; // Substitua com o número desejado

    // Gera a URL para o WhatsApp
    var url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(texto);

    // Redireciona para o WhatsApp
    window.open(url, '_blank');
});