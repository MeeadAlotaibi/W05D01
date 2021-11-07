function isPalindrome(x) {
  const len = x.length;

  for (let i = 0; i < len / 2; i++) {
    if (x[i] !== x[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

console.log(isPalindrome("looooool"));
console.log(isPalindrome("that is not funny :| "));
