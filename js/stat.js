var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_SHADOW_COL = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var CTX_FONT = '16px PT Mono';

var renderCloud = function (ctx, x, y, color = "#fff") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COL);
   renderCloud(ctx, CLOUD_X, CLOUD_Y);
}
