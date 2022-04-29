/*
i: string
o: bool

- case insenstivive
- a-z

The quick brown fox jumps over the lazy dog.


*/
function isPanagram(sentence) {
    var _hashMap = {};
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence[i].toLowerCase();
        if (!_hashMap[current]) {
            _hashMap[current] = true;
        }
    }
    return Object.keys(_hashMap).length === 26;
}
console.log(isPanagram('The quick brown fox jumps over the lazy dog.'));
