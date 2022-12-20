function Date_get() {
    var dates = new Date();
    var years = dates.getFullYear();
    var months = dates.getMonth()+1;
    var days = dates.getDate();
    var today = years + "年" + months + "月" + days + "日";
    document.getElementById("Date_place").innerHTML = today;
    }
    setInterval('Date_get()',200);//hoge

function Time_get() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var clock = hours + ":" + minutes + ":" + seconds;
    document.getElementById("Time_place").innerHTML = clock;
    }
    setInterval('Time_get()',200);