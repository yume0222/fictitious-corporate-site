// 円グラフ
var pieData = {
  labels: ['piyo1', 'piyo2', 'piyo3', 'piyo4'],
  series: [14, 9, 8, 6]
};
var pieOptions = {
  width: '100%',
  height: '440px'
};
new Chartist.Pie('.pie-chart', pieData, pieOptions);

// 棒グラフ
var barData = {
  labels: ['piyo1', 'piyo2', 'piyo3'],
  series: [[10, 16, 29]]
};
var barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpeace: 50,
    labelInterpolationFnc: function(value) {
      return value + ' 人'
    }
  },
  width: '100%',
  height: '400px'
};
new Chartist.Bar('.bar-chart', barData, barOptions);