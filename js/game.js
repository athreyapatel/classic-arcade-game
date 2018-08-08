var Enemy = function () {
    this.sprite = "images/enemy-bug.png", this.x = -101, this.y = 62 + 85.5 * Math.floor(3 * Math.random()), this.speed = 800 * Math.random() + 100
};
Enemy.prototype.update = function (t) {
    this.x >= 505 ? (this.x = -101, this.y = 62 + 85.5 * Math.floor(3 * Math.random()), this.speed = 800 * Math.random() + 100) : this.x += t * this.speed
}, Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
};
var Player = function (t, e, i) {
    this.sprite = t || "", this.x = e || 202, this.y = i || 404, this.score = 0
};
Player.prototype.update = function () {
    this.y <= 0 && (this.score += 1, this.y = 404, bonus = new Bonus), this.x <= 0 && (this.x = 0), this.x >= 404 && (this.x = 404), this.y >= 404 && (this.y = 404)
}, Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}, Player.prototype.handleInput = function (t) {
    var e = {
        left: [-101, 0],
        up: [0, -85.5],
        right: [101, 0],
        down: [0, 85.5],
        enter: [0, 0]
    };
    this.x += e[t][0], this.y += e[t][1]
};
var Bonus = function () {
    var t = ["images/Gem Blue.png", "images/Gem Green.png", "images/Gem Orange.png"];
    this.value = Math.floor(3 * Math.random()), this.sprite = t[this.value], this.multiplier = 5 * (this.value + 1), this.x = 0 + 101 * Math.floor(5 * Math.random()), this.y = 62 + 85.5 * Math.floor(3 * Math.random())
};
Bonus.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
};
var Selector = function () {
    this.sprite = "images/Star.png", this.x = 0, this.y = 202
};
Selector.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}, Selector.prototype.update = function () {
    this.x <= 0 && (this.x = 0), this.x >= 404 && (this.x = 404), this.y >= 404 && (this.y = 404)
}, Selector.prototype.handleInput = function (t) {
    var e = {
        left: [-101, 0],
        up: [0, -85.5],
        right: [101, 0],
        down: [0, 85.5],
        enter: [0, 0]
    };
    this.x += e[t][0]
};
var selector = new Selector;
document.addEventListener("keyup", function (t) {
    var e = {
        13: "enter",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    player.handleInput(e[t.keyCode]), selector.handleInput(e[t.keyCode])
});