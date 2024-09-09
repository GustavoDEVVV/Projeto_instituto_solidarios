document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // <- Previne que o formulario seja enviado antes de abrir o Whatsapp

    var nome = document.getElementById('nome').value;     // <- Pega os valores dos campos, com os determinados ids
    var assunto = document.getElementById('assunto').value;
    var texto = "Olá, meu nome é " + nome + ".\n" + assunto; // <- Formata a mensagem para enviar via WhatsApp
    var numeroWhatsApp = "558194266265"; // <- Número de WhatsApp
    var url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(texto);  // <- Gera a URL para o WhatsApp

    window.open(url, '_blank'); // <- Redireciona para o WhatsApp
});