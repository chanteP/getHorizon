//水平线与屏幕水平线夹角
module.exports = function(callback, cfg){
    window.addEventListener('devicemotion', function(e){
        var x = e.accelerationIncludingGravity.x;
        var y = e.accelerationIncludingGravity.y;

        var g1 = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var deg = Math.acos(y / g1) * 360 / 2 / Math.PI;

        if(x < 0){
            deg = -deg; 
        }
        deg = 180 - deg;

        callback(deg);
    });
};