$.get("JS/jour.json", function(response){
       
        
    var now = new Date();
    var jours = now.getDay();
    var jour;
    switch (jours){
        case 0 : jour = "dimanche";
        break;
        case 1 : jour = "lundi";
        break;
        case 2 : jour = "mardi";
        break;
        case 3 : jour = "mercredi";
        break;
        case 4 : jour = "jeudi";
        break;
        case 5 : jour = "vendredi";
        break;
        default : jour = "samedi";
        break;
    } 
    var aux = "on est pas la";
    
    $.each(response,function(i,val){
        
        if (jour == i){
            aux = val[0];
            console.log(aux)
        }
       

    })
    $(".jason").append(`
        <p> À ${aux}</p>
  `)
    
  
   

})