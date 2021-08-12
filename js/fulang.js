  $(function () {
    $("#RangeRolarvalue").text($("#formControlRangeRolar").val());
    $("#RangeMantervalue").text($("#formControlRangeManter").val());
    $('input[type=range]').on('input', function () {
      $(this).trigger('change');
    });    
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

      manterjs = parseInt(manterjs);
      rolarjs = parseInt(rolarjs);
      
      if (manterjs > rolarjs) {
        manterjs = rolarjs;
      }

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
            } else {
              $("#resultado").append(' <span class="ignorar">' + roladoexplode + '</span>');
            }
          } while (roladoexplode >= 9)
        } else if (dado == 10 && explodirdezjs === true) {
          do {
            var roladoexplode = Math.floor(Math.random() * 10) + 1;
            if (roladoexplode > 1) {
              $("#resultado").append(' <span class="explodir">' + roladoexplode + '</span>');
              soma += roladoexplode;
            } else {
              $("#resultado").append(' <span class="ignorar">' + roladoexplode + '</span>');
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


  $(function () {
    const g_name_1 = ['Aka', 'Aki', 'Ari', 'Atsu', 'Chika', 'Fusa', 'Haru', 'Hide', 'Hira', 'Hiro', 'Hisa', 'Ie', 'Kado', 'Kage', 'Kane', 'Katsu', 'Kore', 'Kimi', 'Kiyo', 'Kuni', 'Masa', 'Masa', 'Michi', 'Mitsu', 'Mochi', 'Mori', 'Moto', 'Mune', 'Naga', 'Naka', 'Nao', 'Nari', 'Nobu', 'Nori', 'Sada', 'Sane', 'Shige', 'Sue', 'Tada', 'Taka', 'Tame', 'Tane', 'Teru', 'Toki', 'Tomo', 'Toshi', 'Tsune', 'Tsura', 'Uji', 'Yasu', 'Yori', 'Yoshi', 'Yuki'];
    const g_name_2 = ['aki', 'akira', 'chika', 'fusa', 'haru', 'hide', 'hiko', 'hira', 'hiro', 'hisa', 'hito', 'ie', 'kado', 'kage', 'kane', 'kata', 'katsu', 'kaze', 'kazu', 'kiyo', 'kuni', 'maro', 'masa', 'michi', 'mitsu', 'mochi', 'mori', 'moto', 'mune', 'mura', 'naga', 'naka', 'nao', 'nari', 'nobu', 'nori', 'sada', 'sane', 'shige', 'suke', 'tada', 'taka', 'tane', 'teru', 'toki', 'tomi', 'tomo', 'toshi', 'tsugu', 'tsura', 'tsune', 'uji', 'yasu', 'yori', 'yoshi', 'yuki', 'zane'];
    let imperial = ['Hantei', 'Toturi', 'Iweko', 'Miya', 'Otomo', 'Seppun', 'Nasu <sup>(*)</sup>', 'Yoshun <sup>(*)</sup>'];
    let imperial_vassal = ['Seppun <em>Hanako</em>', 'Seppun <em>Yotsu</em>', 'Otomo <em>Reju</em>', 'Miya <em>Anou</em>', 'Miya <em>Satoshi</em>'];
    let crab = ['Hida', 'Hiruma', 'Kaiu', 'Kuni', 'Toritaka', 'Yasuki'];	
    let crab_vassal = ['Hida <em>Kakeguchi</em>', 'Hida <em>Moshibaru</em>', 'Hiruma <em>Endo</em>', 'Hiruma <em>Raikuto</em>', 'Kaiu <em>Fundai</em>', 'Kaiu <em>Kenru</em>', 'Kaiu <em>Ishi</em>', 'Kaiu <em>Maisuna</em>', 'Kuni <em>Meishozo</em>', 'Kuni <em>Ugawari</em>', 'Yasuki <em>Kano</em>', 'Yasuki <em>Raikuto</em>'];	
    let crane = ['Asahina', 'Daidoji', 'Doji', 'Kakita'];
    let crane_vassal = ['Daidoji <em>Fujihiro</em>', 'Daidoji <em>Hiramichi</em>', 'Daidoji <em>Hiramori</em>', 'Doji <em>Kotagama</em>', 'Doji <em>Tsume</em>', 'Kakita <em>Ashidaka</em>', 'Kakita <em>Iwasaki</em>'];
    let dragon = ['Kitsuki', 'Mirumoto', 'Tamori', 'Togashi', 'Hitomi', 'Hoshi'];	
    let dragon_vassal = ['Kitsuki <em>Sakura</em>', 'Mirumoto <em>Kouken</em>', 'Mirumoto <em>Zurui</em>', 'Tamori <em>Chiyu</em>', 'Tamori <em>Hiasobi</em>', 'Tamori <em>Izaku</em>', 'Tamori <em>Remiki</em>'];
    let lion = ['Akodo', 'Ikoma', 'Kitsu', 'Matsu'];
    let lion_vassal = ['Akodo <em>Itagawa</em>', 'Akodo <em>Katai</em>', 'Akodo <em>Seizuka</em>', 'Ikoma <em>Hosokawa</em>', 'Ikoma <em>Murame</em>', 'Kitsu <em>Ise</em>', 'Kitsu <em>Noroko</em>', 'Matsu <em>Ikeda</em>', 'Matsu <em>Koritome</em>', 'Matsu <em>Watanabe</em>'];
    let mantis = ['Gusai <sup>(*)</sup>', 'Kitsune', 'Moshi', 'Tsuruchi', 'Yoritomo'];	
    let mantis_vassal = ['Kitsune <em>Bayko</em>', 'Kitsune <em>Shudo</em>', 'Moshi <em>Goraiku</em>', 'Tsuruchi <em>Kagehisa</em>', 'Tsuruchi <em>Suguru</em>', 'Yoritomo <em>Chirichi</em>', 'Yoritomo <em>Hogosha</em>'];
    let phoenix = ['Agasha', 'Asako', 'Isawa', 'Shiba', 'Sesai <sup>(*)</sup>'];
    let phoenix_vassal = ['Agasha <em>Atsumaru</em>', 'Agasha <em>Izaku</em>', 'Asako <em>Chukan</em>', 'Asako <em>Nani</em>', 'Isawa <em>Shingon</em>', 'Shiba <em>Koganshi</em>', 'Shiba <em>Nasu</em>', 'Shiba <em>Sodona</em>'];
    let scorpion = ['Bayushi', 'Shosuro', 'Soshi', 'Yogo'];	
    let scorpion_vassal = ['Bayushi <em>Aotora</em>', 'Bayushi <em>Rokugo</em>', 'Bayushi <em>Ugawa</em>', 'Shosuro <em>Kochako</em>', 'Shosuro <em>Tokagure</em>', 'Soshi <em>Nanbu</em>', 'Yogo <em>Naganori</em>', 'Yogo <em>Tansaku</em>'];
    let unicorn = ['Ide', 'Iuchi', 'Moto', 'Shinjo', 'Utaku'];
    let unicorn_vassal = ['Ide <em>Shiko</em>', 'Ide <em>Suio</em>', 'Iuchi <em>Battue</em>', 'Iuchi <em>Kenshin</em>', 'Moto <em>Onshigawa</em>', 'Shinjo <em>Marta</em>', 'Utaku <em>Hyuga</em>', 'Utaku <em>Naoko</em>'];
    let spider = ['Chuda', 'Daigotsu', 'Goju', 'Susumu', 'Gyushi', 'Ninube', '[Kokujin]', '[Ordem da Aranha]', '[Ordem do Veneno]'];
    let minor = ['[Texugo] Ichiro', '[Morcego] Komori', '[Javali] Heichi', '[Libélula] Tonbo', '[Lebre] Usagi', '[Lebre] Ujina', '[Macaco] Toku', '[Macaco] Fuzake', '[Papa-Figos] Tsi', '[Touro] Morito', '[Pardal] Suzume', '[Tartaruga] Kasuga', '[Tigre] Yotsu'];
    let minor_vassal = ['Ichiro <em>Fureheshu</em>', 'Ichiro <em>Tashimi</em>', 'Suzume <em>Edakumi</em>', 'Komori <em>Iongi</em>', 'Tonbo <em>Koshei</em>', 'Tonbo <em>Senkensha</em>', 'Morito <em>Kijuro</em>', 'Kasuga <em>Someisa</em>', 'Kasuga <em>Hyobe</em>'];
    let minor_extra = ['[Abelha] Hachi', '[Corvo] Karasu', '[Centopéia] Moshi', '[Falcão] Toritaka', '[Guaxinim] Tanuki', '[Raposa] Kitsune', '[Salamandra] Hitokage', '[Serpente] Chuda', '[Tubarão] Jirozame', '[Vagalume] Hotaru', '[Vespa] Ashinagabachi'];	
    
    var clan = $('#clan').val();
    $('#clan').on('change', function () {
      clan = $('#clan').val();
    });
	
    $('#btn-l5r-name').on('click', function () {
      var family = Math.floor(Math.random() * eval(clan).length);
      var family_name = eval(clan)[family];	
      
      var rand_1 = Math.floor(Math.random() * g_name_1.length);
      var rand_2 = Math.floor(Math.random() * g_name_2.length);
      var male_1 = g_name_1[rand_1];
      var male_2 = g_name_2[rand_2];
      if(male_1.toLowerCase() == male_2) {
        male_2 = g_name_2[rand_2+1];
      }
      var male =  male_1+male_2;
      $('.male').html(family_name+' '+male);
      $('.female').html(family_name+' '+male_1+'e<br>'+
                        family_name+' '+male_1+'ko<br>'+
                        family_name+' '+male_1+'mi<br>'+
                        family_name+' '+male_1+'yo');
    });
});
$(function () {
  $('select').select2({
    theme: "bootstrap-5",
    language: "pt-BR",
    placeholder: "Selecione uma opção",
    //allowClear: true
  });
});