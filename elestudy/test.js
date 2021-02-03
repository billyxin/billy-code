class pp {
	constructor() {
		this.att = 'attr';
	}
	att3 = '3333'

	// return 'bbbbbbb';
		// console.log('bbbb');
		
	
}
let p =  new pp();
// console.log(p.att);


pp.prototype.att2 = 'sssss2333'

console.log(p.__proto__.constructor.prototype);
  