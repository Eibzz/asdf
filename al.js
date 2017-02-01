var ayy = "lmao";
console.log(ayy);

(function closureTest(x) {
	console.log("fancy closure: ");
	for(i=0; i<x; i++) {
		(function(y) {
			console.log(y);
		}(i));
	}
	console.log("pleb code: ");
	for(i=0; i<x; i++) {
		console.log(i);
	}
}(10));