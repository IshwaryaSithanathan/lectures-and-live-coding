
console.log('Kitchen! we just received an order for spaghetti, lasagna and a sandwich!')

setTimeout(() => {
  // make the spaghetti asynchronously
  //
  console.log('Spaghetti is done!')
}, 5000)

setTimeout(() => {
  // make the lasagna
  //
  console.log('Lasagna is done!')
}, 7000)

console.log('Great! Thanks for letting us know about those orders.')
