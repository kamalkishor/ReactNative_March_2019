


var obj = {
    id: 10,
    print: function(){
        console.log("Id: " + this.id);
    }
}

var emp = {
    id: 20
}

obj.print();

var fn = obj.print.bind(emp);

obj.print();
fn();

obj.print.call(emp);
obj.print();


var numbers = [1,2,3,4,5];

var squares = numbers.map((item) => item * item);
console.log(squares);