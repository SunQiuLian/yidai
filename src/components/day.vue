//css
.dp {
    margin-top:5px;
    width: 213px;
    height: 240px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    position: absolute;
    top: 28px;
    background: #fff;
    z-index: 10;
    font-size: 12px;
    color: #666;
}

.dp-table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
}

.dp-table th {
    padding: 6px 0;
    border: 0;
}

.dp-table td {
    padding: 4px 0;
    line-height: 18px;
    border: 0;
}

.dp-table th span {
    display: block;
    font-weight: normal;
}

.dp-table td span {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid transparent;
    margin: 0 auto;
    transition: background 0.3s ease;
    border-radius: 4px;
    padding: 0;
    box-sizing: border-box;
}

.dp-table td span:hover {
    background: #eaf8fe;
    cursor: pointer;
}

.dp-table .dp-last span {
    color: #ccc;
}

.dp-table .dp-today span {
    border-color: #2db7f5;
    font-weight: bold;
    color: #2db7f5;
}

.dp-table .dp-select span {
    background: #2db7f5;
    color: #fff;
    border: 1px solid transparent;
}

.dp-table .dp-select span:hover {
    background: #2db7f5;
}

.dp-header {
    position: relative;
    text-align: center;
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #e9e9e9;
}

.dp-header .dp-ym {
    font-weight: bold;
}

.dp-header a {
    color: #999;
    line-height: 34px;
    height: 34px;
    font-size: 16px;
    display: inline-block;
    padding: 0 5px;
    position: absolute;
}

.dp-header a:hover {
    color: #2db7f5;
    cursor: pointer;
}

.dp-header .dp-h-1 {
    left: 7px;
}

.dp-header .dp-h-2 {
    left: 29px;
}

.dp-header .dp-h-3 {
    right: 29px;
}

.dp-header .dp-h-4 {
    right: 7px;
}

.dp-footer {
    height: 34px;
    border-top: 1px solid #e9e9e9;
    text-align: center;
    position: relative;
}

.dp-footer a {
    display: inline-block;
    line-height: 34px;
    height: 34px;
    cursor: pointer;
}

.dp-footer span {
    position: absolute;
    right: 16px;
    top: 7px;
}

.dp .btn {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    white-space: nowrap;
    line-height: 1.5;
    padding: 1px 6px;
    font-size: 12px;
    border-radius: 6px;
    background-color: #2db7f5;
    outline: 0;
    opacity: 1;
    color: #fff;
}
//html及js
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>日历</title>
    <link rel="stylesheet" href="css/app.css"/>
</head>

<body>
<div id="date">
    <vue-calendar :date="time"></vue-calendar>
</div>
<script type="text/x-template" id="tpl">
    <div>
        <div class="input-wrap">
            <input type="text" class="input middle-input" @focus="show=true" v-model="sel">
        </div>
        <div class="dp" v-show="show">
            <div class="dp-header">
                <a class="dp-h-1" @click="pickYear(-1)">«</a>
                <a class="dp-h-2" @click="pickMonth(-1)">‹</a>
                <span class="dp-ym">{{y}}年 {{m}}月</span>
                <a class="dp-h-3" @click="pickMonth(1)">›</a>
                <a class="dp-h-4" @click="pickYear(1)">»</a>
            </div>
            <table class="dp-table">
                <thead>
                <tr>
                    <th v-for="day in days"><span>{{day}}</span></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="cell in data">
                    <td v-for="item in cell"
                        :class="{'dp-last': m!== item.month, 'dp-today': cur === item.data, 'dp-select': sel === item.data}">
                        <span @click="pickConform(item)">{{ item.day }}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="dp-footer">
                <a href="javascript:">{{sel}}</a>
                <span class="btn btn-ok" @click="show=false">确定</span>
            </div>
        </div>
    </div>
</script>
<script src="js/vue.js"></script>
<script>
    (function (w) {
        var calendar = Vue.component('vue-calendar', {
            props: ['date'],
            template: '#tpl',
            data() {
                var days = ['一', '二', '三', '四', '五', '六', '日'];
                var d = '',sel = '';
                var len = ('' + this.date).length;
                if (!this.date || (len != 13 && len != 10)) {
                    d = new Date()
                } else {
                    d = len == 13 ? new Date(parseInt(this.date)) : new Date(this.date * 1000)
                }
                if (Object.prototype.toString.call(d) === "[object Date]") {
                    if (isNaN(d.getTime())) {
                        d = new Date()
                    } else {
                        sel = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
                    }
                } else {
                    d = new Date()
                }
                if (!this.date) {
                    sel = ''
                }
                var curTime = new Date();
                var cur = "" + curTime.getFullYear() + '-' + (curTime.getMonth() + 1) + '-' + curTime.getDate();//当前日期
                var y = d.getFullYear();
                var m = d.getMonth() + 1;
                var data = getCalendar(d.getFullYear(), d.getMonth() + 1);
                return {
                    days,
                    cur,
                    sel,
                    y,
                    m,
                    data,
                    show: false
                }
            },
            methods: {
                pickMonth(flag) {
                    if (flag == -1) {
                        this.data = (this.m === 1) ?
                                getCalendar(parseInt(this.y --), this.m=12) :
                                getCalendar(parseInt(this.y), parseInt(this.m += flag));
                    } else {
                        this.data = (this.m === 12) ?
                                getCalendar(parseInt(this.y ++), this.m=1) :
                                getCalendar(parseInt(this.y), parseInt(this.m += flag));
                    }
                },
                pickYear(flag) {
                    this.data = getCalendar(parseInt(this.y += flag), parseInt(this.m));
                },
                pickConform(item){
                    this.sel = item.data
                }
            },
        });
        new Vue({
            el: '#date',
            data: {
                time: new Date().getTime()
            },
        });
        function getCalendar(y, m) {
            y = parseInt(y);
            m = parseInt(m);
            var time = new Date(y, m - 1, 1);
            var lastDate, nextDate;
            var lastMonth = m - 1;
            var nextMonth = m + 1;
            if (m === 1) {
                lastDate = "" + (y - 1) + '-' + +12 + '-';
                nextDate = "" + y + '-' + 2 + '-';
                lastMonth = 12
            } else if (m == 12) {
                lastDate = "" + y + '-' + 11 + '-';
                nextDate = "" + (y + 1) + '-' + 1 + '-';
                nextMonth = 1
            } else {
                lastDate = "" + y + '-' + (m - 1) + '-';
                nextDate = "" + y + '-' + (m + 1) + '-';
            }
            var maxNumber = 35;
            var r1 = [], r2 = [], r3 = [];
            var lastFix = time.getDay() - 1;
            lastFix = lastFix < 0 ? lastFix + 7 : lastFix;
            var lastMaxDate = new Date(y, m - 1, 0).getDate(); //上个月份最大天数
            var maxDate = new Date(y, m, 0).getDate();//当前月份的
            var i, t;
            var nextFix = maxNumber - maxDate - lastFix;
            for (i = 0; i < lastFix; i++) {
                t = lastMaxDate - lastFix + i + 1;
                r1[i] = {
                    month: lastMonth,
                    day: t,
                    data: lastDate + t
                }
            }
            for (i = 0; i < maxDate; i++) {
                t = i + 1;
                r2[i] = {
                    month: m,
                    day: t,
                    data: "" + y + '-' + +m + '-' + t
                }
            }
            for (i = 0; i < nextFix; i++) {
                t = i + 1;
                r3[i] = {
                    month: nextMonth,
                    day: t,
                    data: nextDate + t
                }
            }
            var result = r1.concat(r2, r3);
            var ar = [];
            for (i = 0; i < 5; i++) {
                ar.push(result.splice(0, 7))
            }
            return ar
        }
    })(window)

</script>
</body>
</html>