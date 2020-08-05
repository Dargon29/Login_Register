 // 1. 获取元素
 var user = document.getElementById('user');
 var pwp = document.getElementById('pwp');
 var userIcon = document.querySelector('.usericon').querySelector('img');
 var pwpIcon = document.querySelector('.pwpicon').querySelector('img');
 var eyeIcon = document.querySelector('.eyeicon').querySelector('img');
/*  console.log(user);
 console.log(pwp);
 console.log(userIcon);
 console.log(pwpIcon);
 console.log(eyeIcon); */

 // 2.注册事件，及处理事件
 // 表单文本 获得/失去焦点 事件
 // 账户框
 user.onfocus = function() {
     userIcon.src = 'images/userOn.png';
 }
 user.onblur = function() {
     userIcon.src = 'images/userOff.png';
 }
 // 密码框
 pwp.onfocus = function() {
     pwpIcon.src = 'images/pwpOn.png';
 }
 pwp.onblur = function() {
     pwpIcon.src = 'images/pwpOff.png';
 }

 // eye 点击事件
 var flag = -1;
 eyeIcon.onclick = function() {
     flag = -flag;
     if(flag == 1) {
         this.src = 'images/eyeOn.png';
         pwp.type = 'text';
     }else {
         this.src = 'images/eyeOff.png';
         pwp.type = 'password';
     }
     
 }