  $(function () {
    $("#RangeRolarvalue").text($("#formControlRangeRolar").val());
    $("#RangeMantervalue").text($("#formControlRangeManter").val());
    $("#formControlRangeRolar").change(function () {
      var rolar = $(this).val();
      $("#RangeRolarvalue").text(rolar);
    });
    $("#formControlRangeManter").change(function () {
      var rolar = $(this).val();
      $("#RangeMantervalue").text(rolar);
    });
  });


  $(function () {
    $('#form_dado').on('submit', function (e) {
      e.preventDefault();
      let rolados = [];
      let soma = 0;
      let rolarjs = $("#formControlRangeRolar").val();
      let manterjs = $("#formControlRangeManter").val();
      let explodirdezjs = $("#ExplodirDez").is(':checked');
      let explodirnovejs = $("#ExplodirNove").is(':checked');
      let rerolarumjs = $("#RerolarUm").is(':checked');

      if (manterjs > rolarjs) manterjs = rolarjs;

      for (var i = 0; i < rolarjs; i++) {
        do {
          var dados = Math.floor(Math.random() * 10) + 1;
        } while (dados == 1 && rerolarumjs === true)
        rolados.push(dados);
      }
      rolados.sort(function (a, b) { return b - a });
      $("#resultado").text('');

      for (var i = 0; i < manterjs; i++) {
        var dado = rolados[0];
        rolados.shift();
        if(dado == 1) {
          $("#resultado").append(' <span class="ignorar">' + dado + '</span>');
        } else {
          soma += dado;
          $("#resultado").append(' <span class="manter">' + dado + '</span>');
        }
        if (dado >= 9 && explodirnovejs === true) {
          do {
            var roladoexplode = Math.floor(Math.random() * 10) + 1;
            if (roladoexplode > 1) {
              $("#resultado").append(' <span class="explodir">' + roladoexplode + '</span>');
              soma += roladoexplode;
            }
          } while (roladoexplode >= 9)
        } else if (dado == 10 && explodirdezjs === true) {
          do {
            var roladoexplode = Math.floor(Math.random() * 10) + 1;
            if (roladoexplode > 1) {
              $("#resultado").append(' <span class="explodir">' + roladoexplode + '</span>');
              soma += roladoexplode;
            }
          } while (roladoexplode == 10)
        }
      }
      for (var i = 0; i < rolados.length; i++) {
        $("#resultado").append(' <span class="ignorar">' + rolados[i] + '</span>');
      }
      $("#resultado").append(' <span class="soma">' + soma + '</span>');
    });
  });