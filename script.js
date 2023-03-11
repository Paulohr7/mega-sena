
      // função para sortear números aleatórios
      function sorteio() {
        return Math.floor(Math.random() * 60) + 1;
      }

      // função para realizar o sorteio da Mega Sena
      function sortear() {
        // array para armazenar os números sorteados
        let numerosSorteados = [];

        // realiza o sorteio de 6 números únicos
        while (numerosSorteados.length < 6) {
          let numeroSorteado = sorteio();
          if (!numerosSorteados.includes(numeroSorteado)) {
            numerosSorteados.push(numeroSorteado);
          }
        }

        // ordena os números sorteados em ordem crescente
        numerosSorteados.sort(function(a, b){return a-b});

        // exibe os números sorteados na tela
        let numerosSorteadosElement = document.getElementById("numeros-sorteados");
        numerosSorteadosElement.innerHTML = "Os números sorteados foram: " + numerosSorteados.join(", ");
      }
   
