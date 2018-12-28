/**
 * Created by Administrator on 2016/8/23 0023.
 */
var  Pipe =  function(upImg,downImg,x,speed,ctx){
    this.x = x;
    this.upImg = upImg ;
    this.downImg = downImg;
    this.speed = speed;
    this.ctx = ctx;
    this.r = Math.random() *200 + 100;
}
Pipe.prototype.draw = function(){
    this.ctx.drawImage(
        this.upImg, this.x , this.r - 420
    )
    this.ctx.drawImage(
        this.downImg, this.x , this.r +150
    )
}
Pipe.prototype.setCount = function( count,gap ){
    Pipe.count = count;
    Pipe.gap = gap;
}
Pipe.prototype.update =function( dur ){
    this.x = this.x + this.speed*dur;
    if(this.x <- 52){
        this.x = this.x + Pipe.count * Pipe.gap;
        this.r = Math.random() *200 + 150;
    }
}
Pipe.prototype.hitTest = function(x,y){
    return (x > this.x && x < this.x + 52)
        &&(! (y >this.r  && y < this.r +150));
}