var Pilha = /** @class */ (function () {
    function Pilha() {
        this.data = [];
        this.topo = -1;
    }
    Pilha.prototype.push = function (value) {
        this.topo++;
        this.data[this.topo] = value;
    };
    Pilha.prototype.pop = function () {
        if (this.topo < 0) {
            return false;
        }
        else {
            this.topo--;
            this.data.splice(this.topo, 1);
        }
    };
    Pilha.prototype.show = function () {
        console.log(this.topo, this.data);
    };
    return Pilha;
}());
var minhaPilha = new Pilha();
minhaPilha.push(10);
minhaPilha.show();
minhaPilha.pop();
minhaPilha.pop();
minhaPilha.pop();
minhaPilha.show();
minhaPilha.push(1);
minhaPilha.push(2);
minhaPilha.push(3);
minhaPilha.show();
minhaPilha.pop();
minhaPilha.show();
