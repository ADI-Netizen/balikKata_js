function balik(kata) {
    var x = kata.length;

    for (var a = 0; a < (kata.length + 1); a++) {
        if (a == 0) {
            var y = kata.slice(x - 1);
        } else if (a == x) {
            return y;
        } else {
            var y = y + kata.slice(x - (a + 1), x - a);
        }
    }
}

console.log(balik("NIOMIC!"))
console.log(balik("JavaScipt"))
console.log(balik("alohahola"))
console.log(balik("Jawa_Barat"))