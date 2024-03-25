function isPrime(n){
  if(n<2){
    return false
  }
  for(let i=2;i<=n/2;i++){
    if(n%i==0){
      return false
    }
  }
  return true
}
console.log(isPrime(7));


function palindrome(str){
  let reverse = ''
  let string = str.split('')
  for(let i=string.length-1;i>=0;i--){
    reverse += string[i]
  }
 return reverse === str
}

// console.log(palindrome('MALAYALAM'))

function capitailzation(str){
 let string = str.split('')
  for(let i=0;i<string.length;i++){
    if(i==0){
      string[i] = string[i].toUpperCase()
    }else{
      string[i] = string[i].toLowerCase()
    }
  }
  return string.join('')
}

// console.log(capitailzation('from'));

function concatt(str1,str2){
 if(str1 ===''){
  return str2
 }
  return str1[0]+ concatt(str1.slice(1),str2)
}

function reverseStirng(str){
  if(str == ''){
    return str
  }
  return reverseStirng(str.slice(1))+str[0]
}
console.log(reverseStirng("hello"));


function string(string){
   string.replaceAll(string,'a')
  
  return string
}

console.log(string("hello"));


var reverseWords = function(s) {
  let array = s.split(' ')
  let out = [];
  for(let i=0;i<array.length;i++){
      let rev = '';
      let val = array[i]
      for(let j=val.length;j>=0;j--){
          rev+= val[j]
      }  
      out.push(rev)
  }
  return out.join(' ')
};

console.log(reverseWords("hello i am peer mohammad"));