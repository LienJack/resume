function canvas () {
  var canvas = document.querySelector("#starCanvas");
  var ctx = canvas.getContext("2d");
  const particles = []
  let   a = 0
  let  opts = {
      height: 260,
      density: 100,
      canvasHeight: canvas.height,
      leftWall: 0,
      canvasWidth: canvas.width,
      alpha: 0,
      maxAlpha: 1
  }

  // 用来制作上密集下稀疏的效果
  var dense = function() {
      var e = Math.random();
      var t = Math.ceil(1 / (1 - e));
      var i = [];
      for (var n = 0; n < t; n++) {
          i.push(Math.random())
      }
      return Math.min(...i)
  };
  function initSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      opts.canvasWidth = canvas.width;
      opts.canvasHeight = canvas.height;
    //   for (let e in particles) {
    //       particles[e].y = dense() * canvas.height
    //   }
    particles.forEach(item => {
        item.y = dense() * canvas.height
    })
      cleanCanvas();
  }
  initSize();

  window.addEventListener("resize", initSize);

  function cleanCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  function Particle() {
      let e = canvas.width / 2
      let i = canvas.height
      this.x = Math.floor(Math.random() * canvas.width);
      this.y = dense() * canvas.height
      this.speedX = .05 + Math.random() * .1
      this.particleSize = .5 + (Math.random() + .1 / 4)
    //   a++;
    //   particles[a] = this;
      particles.push(this)
      this.alpha = 0;
      this.maxAlpha = .2 + this.y / canvas.height * Math.random() * .8;
      this.alphaAction = 1
  }
  Particle.prototype.draw = function() {
      this.x += this.speedX;
      if (this.alphaAction == 1) {
          if (this.alpha < this.maxAlpha) {
              this.alpha += .005
          } else {
              this.alphaAction = -1
          }
      } else {
          if (this.alpha > .2) {
              this.alpha -= .002
          } else {
              this.alphaAction = 1
          }
      }

      // 超出边界处理
      if (this.x + this.particleSize * 2 >= opts.canvasWidth) {
          this.x = this.x - opts.canvasWidth
      }

      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${this.alpha.toString()})`
      ctx.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill()
  }
  function panit() {
      cleanCanvas();
      var e = 100;
      if (screen.width < 1024) {
          e = 200
      }
      if (screen.width < 640) {
          e = 100
      }
      if (particles.length > e) {
          opts.density = 0
      }
      for (let t = 0; t < opts.density; t++) {
        if (Math.random() > .97) {
              new Particle
          }
      }
    particles.forEach(item => item.draw())
      requestAnimationFrame(panit)
  }
  panit();
 }
 canvas();