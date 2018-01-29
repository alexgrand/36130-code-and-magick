var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_SHADOW_COL = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var FONT_SIZE = 16;
var FONT_FAMILY = 'PT Mono';
var HISTM_HEIGHT = 150;
var COL_WIDTH = 40;
var COL_DIST = 50;
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color = "#fff") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, text, color = '#000') {
  ctx.fillStyle = color;
  ctx.font = FONT_SIZE + 'px ' + FONT_FAMILY;
  ctx.fillText(text, x, y);
};

var renderCol = function (ctx, x, colHeight, player, color) {
  var colX = CLOUD_X + x;
  var colY = CLOUD_Y + CLOUD_HEIGHT - colHeight - 2 * FONT_SIZE;
  ctx.fillStyle = color;
  ctx.fillRect(colX, colY, COL_WIDTH, colHeight);
  renderText(ctx, colX, colY - FONT_SIZE, Math.floor(player.score));
  renderText(ctx, colX, colY + colHeight + FONT_SIZE, player.name);
};

var renderAllCols = function (ctx, names, times) {
  var totalPlayers = names.length;
  var bestPlayer = getBiggestScore(names, times);
  for (var i = 0; i < totalPlayers; i++) {
    var colColor = 'rgba(255, 0, 0, 1)';
    var colHeight = HISTM_HEIGHT;
    if (names[i] === 'Вы') {

    } else {
      colColor = 'rgba(0, 0, 255, ' + Math.random() + ')';
      colHeight = 100;
    }
    renderCol(ctx, COL_WIDTH + (COL_WIDTH + COL_DIST) * i, colHeight, {name: names[i], score: times[i]}, colColor);
  }
};

var getBiggestScore = function (players, scores) {
  var maxScore = 0;
  var playerName = '';
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      playerName = players[i];
    }
  }
  return {name: playerName, score: Math.floor(maxScore)};
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COL);
   renderCloud(ctx, CLOUD_X, CLOUD_Y);

   renderText(ctx, CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP, 'Ура вы победили!');
   renderText(ctx, CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP + FONT_SIZE, 'Список результатов:');

   renderAllCols(ctx, names, times);
};
