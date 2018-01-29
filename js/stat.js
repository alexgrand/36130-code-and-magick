var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_SHADOW_COL = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var FONT_SIZE = 16;
var FONT_FAMILY = 'PT Mono';
var HISTOGRAM_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color = "#fff") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var renderText = function (ctx, x, y, text, color = '#000') {
  ctx.fillStyle = color;
  ctx.font = FONT_SIZE + 'px ' + FONT_FAMILY;
  ctx.fillText(text, x, y);
  console.log(ctx);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COL);
   renderCloud(ctx, CLOUD_X, CLOUD_Y);

   renderText(ctx, CLOUD_X + 2*GAP, CLOUD_Y + 3*GAP, 'Ура вы победили!');
   renderText(ctx, CLOUD_X + 2*GAP, CLOUD_Y + 3*GAP + FONT_SIZE, 'Список результатов:')
}
