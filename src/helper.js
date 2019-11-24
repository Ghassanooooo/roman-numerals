export const numbers=[1,2,3,4,5,6,7,8,9]
.map((item)=>(
  { 
    isOperation:false,
    value:item
  }
))
export const operations=['+','-','x','=']
.map((item)=>(
  {
    isResults:item === '=' ? true : false,
    isOperation:true,
    value:item
  }
))
export const romanize=(num) =>{
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}