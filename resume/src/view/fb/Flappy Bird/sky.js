/**
 * Created by Administrator on 2016/8/23 0023.
 */
var Sky = function(img,x,speed,ctx) {
    this.img = img ;
    this.ctx = ctx;
    this.x = x;
    this.speed = speed;
}
Sky.prototype.draw = function(){
    this.ctx.drawImage(
        this.img ,this.x,0
    )
}
Sky.prototype.setCount = function(count){
    Sky.count = count;
}
Sky.prototype.update = function(dur){
    this.x = this.x+ this.speed * dur;
    if(this.x<-800){
        this.x = Sky.count * 800 + this.x;
    }
}