/**
 * @author  sparkHou
 * @date 2021-04-01 16:31
 * @Description:
 */
const fs = require('fs');
const path = require('path');

function copy() {
  fs.writeFileSync(path.join(__dirname, `/${process.env.VUE_APP_OUTPUT}/CNAME`), fs.readFileSync(path.join(__dirname, './CNAME')));
}

function CreateCNAME(options) {
  // 使用 options 设置插件实例……
  // 把目录下的CNAME移到打包目录
  console.log(options);
}

CreateCNAME.prototype.apply = function (compiler) {
  compiler.plugin('done', () => {
    console.log('Hello World!');
    copy();
  });
};

module.exports = CreateCNAME;
