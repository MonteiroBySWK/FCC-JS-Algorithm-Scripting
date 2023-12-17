function palindrome(str) {
    let str1 = str.toUpperCase().replace(/[^a-zA-Z0-9]/g, "");
    for(let i = 0; i < str1.length - 1; i++) {
      if(str1[i] !== str1[str1.length - i - 1]) {
        return false
      }
    }
    return true
}
  
  