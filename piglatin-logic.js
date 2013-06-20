var vowels = 'aeiou'.split('');
var cons = [];
var consString = '';
var wordarr;
var userInput
function is_vowel(letter){
    var result = false;

  for(var i=0; i < vowels.length; i++){
    if (letter === vowels[i]){
      result = true;
      break;
    }
  }

  return result;
}



function piglatinResult(){
    for(var j = 0; j < userInput.length; j++){  
    if( is_vowel(userInput.charAt(j)) ){
      //console.log(userInput + 'ay' );      
      break;
    }
      
    else{
        cons.push(wordarr.shift()); 
          //console.log('eu sou  a array de consoante === ' + cons)
         // console.log(wordarr)
      
    }
    consString = cons.join('');
  }
}
     // $(function(){

      $('button').click(function(){


      userInput = $('#word').val();

      wordarr = userInput.split('');
        // var userInput = $('#word').val();
      piglatinResult();        
      console.log(wordarr.join('') + consString + 'ay');    

         $('#content').text((wordarr.join('') + consString + 'ay').toLowerCase());   

         // reset these variables (and any others?)
         consString = '';
         cons = [];
      })       


// piglatinResult()