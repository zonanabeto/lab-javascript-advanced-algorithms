function Stack(){
    this.numero = 15;
    this.addStack = function() {
        this.numero --
    }
    this.removeStack = function(){
        this.numero++;
    }

   
}

var x = new Stack;






$('#add-stack').on("click",function(){
  
    x.addStack();
    console.log(x.numero);
    var _stack =  $(`#stack-div .stack-element:nth-child(${x.numero})`);
    _stack.addClass("addedelement");
}.bind(this));




$('#delete-stack').on("click",function(){
    x.removeStack();
    var _stack =  $(`#stack-div .stack-element:nth-child(${parseInt(x.numero) - 1})`);
    console.log(x.numero);
    _stack.removeClass("addedelement");
}.bind(this));
