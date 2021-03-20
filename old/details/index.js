/**
 * @author  :spark Hou
 * @date  : 2019-11-26 11:18
 * @Description :
 */

window.onload = function () {
  let text = '';
  for (let i = 0; i < 150; i++) {
    text += '榆少的小店铺  ';
  }
  const covers = document.querySelectorAll('.cover');
  covers.forEach((item) => {
    item.innerHTML = text;
  });
};
