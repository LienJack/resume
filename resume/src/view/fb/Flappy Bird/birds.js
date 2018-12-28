/**
 * Created by Administrator on 2016/8/23 0023.
 */
var Bird = function (img,x,y,speed,a,ctx){
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.a =a ;
    this.ctx = ctx;
    this.index = 0;
}

Bird.prototype.draw = function (){

    this.ctx.save();

    this.ctx.translate(this.x ,this.y);
    this.ctx.rotate((Math.PI /6) * this.speed / 0.3 );

    this.ctx.drawImage(
        this.img,52*this.index,0,52,45,
        -52/2,-45/2,52,45
    )
    this.ctx.restore();
}
var durgather=0;
Bird.prototype.update = function(dur){
    durgather+=dur;
    if(durgather>100){
        this.index++;
        if(this.index===2){
             this.index=0;
        }
      durgather -= 100;
    }
    this.speed = this.speed + this.a *dur;
    this.y = this.y + this.speed * dur;
}