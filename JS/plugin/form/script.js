$(function(){
    $("#monform").submit(function(){
        var envoyer = true;
        var nom,email,prenom,codePostal,message;
        var regPrenom = new RegExp("^[a-zA-Z]{1,35}$");
        var regCodePostal = new RegExp("^[a-zA-Z]{1,35}$");
        var regEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$");
        var regMessage = = new RegExp("^[a-zA-Z]{1,255}$");
        nom = $("#nom").val()
        email = $("#email").val()
        age = $("#age").val() //recupere valeur de zone nom
        prenom = $("#prenom").val()
        codePostal = $("#codePostal").val()
        if(!regPrenom.test(prenom)){
            
            envoyer = false;
        }
        if(!regCodePostal.test(codePostal)){
            
            envoyer = false;
        }
        if(!regMessage.test(message)){
            
            envoyer = false;
        }
    

        if(!regEmail.test(email)){
            $("#mail").html("<p> Email incorrect</p>");
            envoyer = false;
        }
       
        return envoyer;
    })
})