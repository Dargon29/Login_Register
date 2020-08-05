
  var register = document.getElementById('register');

  // 1. 获取三个模块的边框 及 各模块的提示信息
  var user = document.querySelector('.user');
  var userTips = document.querySelector('.userTips');

  var pwp = document.querySelector('.pwp');
  var pwpTips = document.querySelector('.pwpTips');

  var repwp = document.querySelector('.repwp');
  /* 获取确认模块的 提示元素标签 */
  var repwpTips = document.querySelector('.repwpTips');
  console.log(repwpTips);

  /* console.log(user);
  console.log(pwp);
  console.log(repwp); */

  // 2. 获取元素 （ userIcon userIpt  pwpIcon pwpIpt ）
  var userIcon = document.getElementById('userIcon');
  var userIpt = document.getElementById('userIpt');
  var userTipsIcon = document.getElementById('userTipsIcon');

  var pwpIcon = document.getElementById('pwpIcon');
  var pwpIpt = document.getElementById('pwpIpt');
  var tipsIcon = document.getElementById('tipsIcon');

  var pwpReIpt = document.getElementById('pwpReIpt')
  /* 获德 确认密码的 icon  */
  var repwpTipsIcon = document.getElementById('repwpTipsIcon');
  /* console.log(repwpTipsIcon); */

  /* console.log(userIcon);
  console.log(userIpt);
  console.log(pwpIcon);
  console.log(pwpIpt); */
  /* 未输入数据无法提交表单 */
  register.style.cursor = 'text';
  register.type = 'text';
  // 注册和处理事件
  // userIpt 的 获得 与 失去焦点事件
  userIpt.onfocus = function () {
      if (this.value == '') {
          userTips.innerHTML = '';
          userTipsIcon.src = '';
      }
      user.style.borderColor = 'blue';
      userIcon.src = 'images/userOn.png';
  }
  userIpt.onblur = function () {
      if (this.value != '') {
          /* 有正确可以提交表单 */
          register.style.cursor = 'pointer';
          register.type = 'submit';
          userTipsIcon.src = 'images/right.png';
          userTips.innerHTML = '该用户名有效';
      } else {
          /* 有错误无法提交表单 */
          register.style.cursor = 'text';
          register.type = 'text';
          userTips.className = "userTips error";
          userTips.innerHTML = '用户名不能为空！';
          userTipsIcon.src = 'images/error.png';
      }
      user.style.borderColor = 'rgba(161, 158, 158, 0.7)';
      userIcon.src = 'images/userOff.png';
  }
  // pwpIpt 的 获得 与 失去焦点事件
  pwpIpt.onfocus = function () {
      pwpIcon.src = 'images/pwpOn.png';
      tipsIcon.src = 'images/tips.png';
      pwpTips.className = 'pwpTips';
      pwpTips.innerHTML = '请输入6~16位字符';
      pwp.style.borderColor = 'blue';
  }
  pwpIpt.onblur = function () {
      if (this.value == '') {
          /* 有错误无法提交表单 */
          register.style.cursor = 'text';
          register.type = 'text';

          tipsIcon.src = 'images/error.png';
          pwpTips.className = 'pwpTips error';
          pwpTips.innerHTML = '密码不能为空！';
      } else if (this.value.length < 6 || this.value.length > 16) {
          /* 有错误无法提交表单 */
          register.style.cursor = 'text';
          register.type = 'text';
          tipsIcon.src = 'images/error.png';
          pwpTips.className = 'pwpTips error';
          pwpTips.innerHTML = '密码位数不对！';
      } else {
          /* 有正确可以提交表单 */
          register.style.cursor = 'pointer';
          register.type = 'submit';
          /* 密码有效后做再次输入密码操作 */
          repwpTipsIcon.src = 'images/tips.png';
          repwpTips.innerHTML = '再次输入密码';
          /* 确认密码框的 获得和失去焦点 */
          pwpReIpt.onfocus = function () {
              if (this.value != '') {
                  repwpTipsIcon.src = 'images/tips.png';
                  repwpTips.innerHTML = '重新输入或修改密码';
              }
          }
          pwpReIpt.onblur = function () {
              if (this.value === pwpIpt.value) {

                  repwpTipsIcon.src = 'images/right.png';
                  repwpTips.innerHTML = '两次密码一样';
              } else {
                  /* 有错误无法提交表单 */
                  register.style.cursor = 'text';
                  register.type = 'text';
                  repwpTipsIcon.src = 'images/error.png';
                  repwpTipsIcon.className = 'repwpIcon error';
                  repwpTips.innerHTML = '两次密码不一样！';
              }
          }
          /* 有正确可以提交表单 */
          register.style.cursor = 'pointer';
          register.type = 'submit';
          /* 密码有效后做再次输入密码操作 */
          tipsIcon.src = 'images/right.png';
          pwpTips.className = 'pwpTips';
          pwpTips.innerHTML = '该密码有效';
      }
      pwp.style.borderColor = 'rgba(161, 158, 158, 0.7)';
      pwpIcon.src = 'images/pwpOff.png';
  }

  // pwpReIPt 的 获得 与 失去焦点事件
  pwpReIpt.onfocus = function () {
      if (this.value == '') {
      }
      repwp.style.borderColor = 'blue';
  }
  pwpReIpt.onblur = function () {
      repwp.style.borderColor = 'rgba(161, 158, 158, 0.7)';
  }