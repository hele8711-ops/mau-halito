// Copia para os links da materia (classe "segue") todos os parametros
// que chegaram no endereco desta pagina: gclid, utm_*, src, tk_* e qualquer outro.
document.addEventListener('DOMContentLoaded', function () {
  var recebidos = new URLSearchParams(window.location.search);
  if (recebidos.toString() === '') {
    return;
  }

  var links = document.getElementsByClassName('segue');
  for (var n = 0; n < links.length; n++) {
    var endereco = new URL(links[n].getAttribute('href'));
    recebidos.forEach(function (valor, chave) {
      endereco.searchParams.set(chave, valor);
    });
    links[n].setAttribute('href', endereco.toString());
  }
});
