        // Global Variables
        let canvas = document.querySelector('canvas');
        let context = canvas.getContext('2d');

        canvas.width = innerWidth;
        canvas.height = innerHeight;


        let particleArray = [];
        let colors = ['white', 'e0e0e0'];

        // Objects
        let numParticles = 50;
        let mouse = {
            x: undefined,
            y: undefined
        };

        function particle(x, y, velx, vely, radius, color) {
            this.x = x;
            this.y = y;
            this.velx = velx;
            this.vely = vely;
            initvelx = Math.random() * 1 - 0.5;
            initvely = (Math.random() * 5 + 2) / 4;
            this.radius = {
                size: radius,
                min: radius,
                max: 17
            };
            this.color = color;

        // Event Listeners
        addEventListener('mousemove', event => {
            mouse.x = event.pageX;
            mouse.y = event.pageY;
        });

        addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        });
            // Utility Functions

        function distanceFrom(num, num2){
            if (num < num2){
                return (num2 - num);
            }
            if (num > num2){
                return (num - num2);
            }
        }
            // Drawing
            this.draw = function () {
                context.beginPath();
                context.arc(x, y, this.radius.size, 0, Math.PI * 2);
                context.fillStyle = color;
                context.shadowColor = this.color;
                context.shadowBlur = 15;
                context.fill();
                context.closePath();
            }

            // Updating
            this.update = function () {

                //Falling
                y += vely;
                x += velx;

                // Interactivity
                if (
                    mouse.x - x < 80 &&
                    mouse.x - x > -80 &&
                    mouse.y - y < 80 &&
                    mouse.y - y > -80) {
                    if (this.radius.size < this.radius.max) {
                        this.radius.size += 1;
                    }
                } 

                else if (this.radius.size > this.radius.min) {
                    this.radius.size -= 0.2;
                    this.radius.size = Math.max(1, this.radius.size);
                }

                if (y > canvas.height) {
                    y = 0 + this.radius.size;
                }
                if (y < 0) {
                    y = canvas.height - this.radius.size
                }
                if (x > canvas.width) {
                    x = 0 + this.radius.size;
                }
                if (x < 0) {
                    x = canvas.width - this.radius.size
                }
            }
        }

        // Give particles values and push to array
        function init() {
            for (let i = 0; i < numParticles; i++) {
                let px = Math.random() * innerWidth;
                let py = Math.random() * innerHeight;
                let pvelx = this.initvelx;
                let pvely = this.initvely;
                let pradius = Math.max(2, Math.random() * 5);
                let pcolor = colors[Math.floor(Math.random() * 4)];
                particleArray.push(new particle(px, py, pvelx, pvely, pradius, pcolor));
            }
        }
        // Update the particles values and then redraw
        function animate() {
            requestAnimationFrame(animate);
            context.clearRect(0, 0, innerWidth, innerHeight);
            for (let i = 0; i < numParticles; i++) {
                particleArray[i].update();
                particleArray[i].draw();
            }
        }

        init();
        animate();
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("logo").style.fontSize = "30px";
            document.getElementById("signinText").style.fontSize = "20px";
            document.getElementById("about").style.fontSize = "17px";
            document.getElementById("contact").style.fontSize = "17px";
        } else {
            document.getElementById("logo").style.fontSize = "35px";
            document.getElementById("signinText").style.fontSize = "25px";
            document.getElementById("about").style.fontSize = "20px";
            document.getElementById("contact").style.fontSize = "20px";
        }
        }