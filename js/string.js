/** 文字列を Unicode 番号の配列に変換する */
String.prototype.toCodePoints = function() {
  var i = 0, len = this.length, points = [];
  while (i < len) {
    var x = this.charCodeAt(i++);
    if (0xD800 <= x && x < 0xDC00) {
      var y = this.charCodeAt(i++);
      points.push(0x10000 + ((x & 0x3FF) << 10) | (y & 0x3FF));
    } else {
      points.push(x);
    }
  }
  return points;
};