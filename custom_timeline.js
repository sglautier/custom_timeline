(function ($) {
  $(document).ready(function () {
    setTimeout(function () {
      $(".h5p-content").append("<div class='modaltext'></div>");  
      $('.h5p-control.h5p-playbackRate').css('background', 'green');
      var j = 0;
      var h5pi = H5PIntegration["contents"];
      for (var key in h5pi){
          if(key.startsWith("cid")) {
              var json = h5pi[key]["jsonContent"];
          }
          
      }
      var contenu = "";
      var titre = "";
      var titremod = "";
      $(".era[id*=_text]").each(function(){    
        $.each($.parseJSON(json), function(i, obj) {
            contenu = obj.era[j].text;
        });
        var titrebouton = $(this).text();
        var titre = "<b>" + $(this).text() + "</b>";
        var titremod = titrebouton.substr(0, 5);
        var titremod2 = "info"
        var titreContenu = "<button class='croix'>X</button><br>&nbsp;<br>" + titre + "<br>&nbsp;<br>" + contenu;
        var modal = $(".modaltext");
        $(this).text("");
        $(this).append("<button class='eratooltiptext'></button>");
        $(this).children().attr("title", titrebouton);
        $(this).children().text(titremod2);
        $(this).children().click(function(){
            $(".modaltext").html(titreContenu);
            $(".modaltext").fadeIn("low");
            $(".modaltext").css("visibility","visible");
            $(".croix").click(function(){
                $(".modaltext").fadeOut("low"); 
                $(".modaltext").css("visibility","hidden");    
            });

        });
        $(this).css("font-size","12px"); 
        j++;
      });    
    $(".flag-content").click(function(){
       $("img.media-image").each(function(){
          var source = $(this).attr("src");
          $(this).wrap("<a href='"+ source +"' target='_blank'></a>");  
       }); 
    });
  
    }, 1000)
  })

          
})(H5P.jQuery);
