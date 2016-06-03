//评分默认配置展示
$('#J_Demo1').rate();

//评分自定义展示1
$('#J_Demo2').rate({
  arrayData: ['1分', '2分', '3分', '4分', '5分', '6分', '7分', '8分', '9分', '10分'],
  icon: 'am-icon-check',
  init: 5
});

//评分自定义展示2
$('#J_Demo3').rate({
  arrayData: ['不心动', '较心动', '非常心动'],
  icon: 'am-icon-heart',
  init: 3
});