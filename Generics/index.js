function reverseList(list) {
    var rl = [];
    for (var i = list.length - 1; i >= 0; i--) {
        rl.push(list[i]);
    }
    return rl;
}
var names = ["julio", "luffy", "Jotaro"];
console.log(reverseList(names));
