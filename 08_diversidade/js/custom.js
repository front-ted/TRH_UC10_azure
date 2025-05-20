$(".painel-geracoes button.bt1").click(function(){
    $(".aba2, .aba3, .aba4").css('display','none');
    $(".aba1").css('display','block');
  })
  $(".painel-geracoes button.bt2").click(function(){
    $(".aba1, .aba3, .aba4").css('display','none');
    $(".aba2").css('display','block');
  })
  $(".painel-geracoes button.bt3").click(function(){
    $(".aba1, .aba2, .aba4").css('display','none');
    $(".aba3").css('display','block');
  })
  $(".painel-geracoes button.bt4").click(function(){
    $(".aba1, .aba2, .aba3").css('display','none');
    $(".aba4").css('display','block');
  })