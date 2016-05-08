/**
 * Created by Administrator on 2016/5/2.
 */
var audioDemo = document.querySelector("#audioDemo"), musicBtn = document.querySelector("#musicBtn");
//->1s后在开始播放音乐加载音频文件,在此期间我们先加载其他的内容
window.setTimeout(function () {
    audioDemo.play();//->开始播放:此时需要先加载音频文件
    audioDemo.addEventListener("canplay", function () {
        //->canplay:当前可以播放音乐了
        musicBtn.style.display = "block";
        musicBtn.className = "musicMove";
    }, false);

    //->这一块应该写一个完正的单击行为,我此时先用touchend代替(不是正常的写法)
    musicBtn.addEventListener("touchend", function () {
        if (audioDemo.paused) {//->当前处于暂停状态
            audioDemo.play();
            musicBtn.className = "musicMove";
            return;
        }
        audioDemo.pause();
        musicBtn.className = "";
    }, false);
}, 1000);