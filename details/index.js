/**
 * @author  :spark Hou
 * @date  : 2019-11-26 11:18
 * @Description :
 */



window.onload = function () {
  var text = ''
  for (var i = 0; i < 150; i++) {
    text += '榆少的小店铺  '
  }
  var covers = document.querySelectorAll('.cover')
  covers.forEach(function (item) {
    item.innerHTML = text
  })
}
