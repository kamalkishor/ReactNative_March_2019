


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