function getCurrentTime(type) {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  if(type=='date'){
  	keep = y + '-' + m + '-' + d;
  }else{
  	 keep = y + '-' + m + '-' + d + ' ' + h + ':' + f;
  }
  return keep; //20160614134947
}

//获取时间戳
function getTimeStamp(){
  var timeStamp = Date.parse(new Date());
  timeStamp = timeStamp/1000;
  return timeStamp;
}

module.exports = {
  getCurrentTime: getCurrentTime,
  getTimeStamp:getTimeStamp
}