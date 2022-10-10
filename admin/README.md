## 鐵人挑戰後台介面樣式，認識Ts與Tailwindcss的開發專案
![](https://i.imgur.com/uvO4pwH.png)
![](https://i.imgur.com/bY97Kx0.jpg)
## javaScript master
這邊採用了javaScript master大大的後台專案
https://www.youtube.com/watch?v=jx5hdo50a2M&t=12s
並作為修改，如果對後台UI這邊附上製作的連結，剛好裡面也完整介紹了如何用Js與Tailwindcss去做各種功能，而這邊因為覺得javaScript master的忠實粉，所以參考了他的UI形式，將js的開發方式修改成Ts的版本，並加入一些自己的元素去致意，並在其中新增了我們需要的飯店管理、人員管理等頁面，連結附在下方，因是參考javaScript master大大的東西，UI介面上就不會多加解釋，整體設計風格，等優秀的UI設計推薦大家去看原片，或是也可以使用自己的後台介面，在後面幾天也將會注重在如何把我們至今所做好的Api套用在後台上來方便管理，拉回主題為訂房網的訂房流程做管理。
## 操作使用說明
下載完後，client side與api side都跟以前一樣，除了要注意先各自`npm i`外，`npm start`前也要先注意Api要先啟動，並確實把.env中的JWT_TOKEN換成自己的secret key與自身的mongoDB要先連上自己的權限，把自己建立的資料連上去，同時確定一下package.json中的proxy是否是自己的Api測試地址。
