var vowels = 'aeiou'.split('');
var cons = [];
var consString = '';

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


var userInput = $('#word').val();
var wordarr = userInput.split('')

function piglatinResult(){
    for(var j = 0; j < userInput.length; j++){  
    if( is_vowel(userInput.charAt(j)) ){
//console.log(userInput + 'ay' );      
break;
    }
      
    else{
        cons.push(wordarr.shift()) 
          //console.log('eu sou  a array de consoante === ' + cons)
         // console.log(wordarr)
      
    }
 consString = cons.join('')


  }
 console.log(wordarr.join('') + consString + 'ay')    

}
piglatinResult()