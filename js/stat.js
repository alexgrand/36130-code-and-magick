'use strict';
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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, text) {
  var color = '#000';
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
  for (var i = 0; i < totalPlayers; i++) {
    var currentScore = Math.floor(times[i]);
    var currentPlayer = names[i];
    var colColor = getColColor(currentPlayer);
    var colHeight = getColHeight(times, currentScore);

    renderCol(ctx, COL_WIDTH + (COL_WIDTH + COL_DIST) * i, colHeight, {name: names[i], score: times[i]}, colColor);
  }
};

var getBiggestScore = function (scores) {
  var maxScore = 0;
  for (var i = 0; i < scores.length; i++) {
    maxScore = (scores[i] > maxScore) ? scores[i] : maxScore;
  }
  return Math.floor(maxScore);
};

var getColHeight = function (times, checkedScore) {
  var biggestScore = getBiggestScore(times);
  return (checkedScore === biggestScore) ? HISTM_HEIGHT : HISTM_HEIGHT * (checkedScore / biggestScore);
};

var getColColor = function (curPlayer) {
  var userColor = 'rgba(255, 0, 0, 1)';
  var otherColor = 'rgba(0, 0, 255, ' + Math.random() + ')';
  return (curPlayer === 'Вы') ? userColor : otherColor;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COL);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP + FONT_SIZE, 'Список результатов:');

  renderAllCols(ctx, names, times);
};
