/**
 * Created by gwb10 on 2018/4/23.
 */
//需要引入vue，以及vue-viewload，下面的axios是ajax库，如果不需要可以不引用
import Vue from 'vue'
import VueViewload from 'vue-viewload'
import axios from 'axios'
//使用VueViewload
Vue.use(VueViewload)

new Vue({
    el: '#app',
    data: {
        pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201701/bpic232.jpg',
        list: [
            'http://pics.sc.chinaz.com/files/pic/pic9/201702/zzpic1399.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201612/fpic9875.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201610/fpic8220.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201611/fpic8607.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201611/fpic8745.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201701/zzpic437.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201610/apic23881.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201608/fpic5949.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201608/fpic6419.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201609/fpic7403.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201609/fpic7317.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201605/fpic1376.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201606/apic21195.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201606/apic21465.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201604/apic20040.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201604/fpic914.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201604/fpic873.jpg',
            'http://pics.sc.chinaz.com/files/pic/pic9/201605/fpic1208.jpg'
        ]
    }
})