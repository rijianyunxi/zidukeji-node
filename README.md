# 河南省职业技能提升平台网课秒刷

## 前言
室友们报了河南省职业技能提升平台的茶艺课，但是奈何时间又短，视频又长，特此写下此脚本，可秒看完。仅用于学习交流

## 思路
* 获取视频的id
* 传入接口（视频进度的接口）
* 修改进度接口duration时长，rate为进度百分比
* 循环遍历

## api接口
链接|方式|请求头|参数|响应
:--:|:--:|:--:|:--:|:--:
http://39.105.179.154:8090/app/gradevideo/details|POSt|Authorization|companyId,examId|{videoList:[]}
http://39.105.179.154:8090/app/gradevideo/player|POSt|Authorization|cid,eid,rate,duration,stopFlag,vid|{info:"ok}
## 其他
如有问题详看代码

* ajax为其平台自带
* 要在链接中含有companyId和examId的网页中打开控制台输入代码即可
* 自测完全可以 
* 仅用于学习交流