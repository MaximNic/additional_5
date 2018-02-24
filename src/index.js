module.exports = function check(str, bracketsConfig) {
            
var opN=[], clO=[];
var stek=[];
var elem, ind;
for (i=0; i<bracketsConfig.length; i++){
  opN[i]=bracketsConfig[i][0];         
  clO[i]=bracketsConfig[i][1]; }
for (i=0; i<str.length; i++){
  elem=str[i];                                         
  ind=opN.indexOf(elem);                                
  if (ind>=0){                                                          
     if ((clO[ind] == opN[ind]) &&  (ind==stek[stek.length-1])) {             
       stek.pop();
    }                                                        
      else
      stek.push(ind);                     
  }
  else 
    if (clO.indexOf(elem)==stek[stek.length-1]){ 
      stek.pop();                                                   
    }                                               
    else
      stek.push('!');   
}
if (stek.length==0)
return true;
else return false;

}

