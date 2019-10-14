function reverseList<T>(list:Array<T>):T[]{
	let rl:T[]=[];
	for (let i = list.length-1;i>=0;i--){
		rl.push(list[i]);
	}
	return rl;
}

const names = ["julio","luffy","Jotaro"];
console.log(reverseList<string>(names));