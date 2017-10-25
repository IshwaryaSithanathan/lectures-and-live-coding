
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set b(x) { 
    // this.a = x / 2;
    throw Error("Don't try to change me bro")
  }
};

// console.log(o.a); // 7
console.log(o.b); // 8
try {
  o.b = 100
} catch (err) {
  console.log(err)
}

console.log(o.b)

// o.c = 50;
// console.log(o.a); // 25
