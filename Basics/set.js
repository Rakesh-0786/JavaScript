const letters=new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
letters.add("a");
letters.add("a");
letters.add("a");

console.log(letters.has("d"));
console.log(letters.entries());
console.log(letters);
