/**
 * Created by gwb10 on 2018/4/24.
 */
Vue.component('my-footer',{
    template:" <div class='footer'><ul><li v-for='item in items'>" +
    "<a :href='item.url'>{{item.name}}</a>" +
    "</li>" +
    "</ul" +
    "><p>华佗商城web短版权归作者所有@2018 all right reserved</p>" +
    "</div>",
    data:function (){
        return {
            items:[
            {url:"#",name:"关于我们"},
            {url:"#",name:"联系我们"},
            {url:"#",name:"联系客服"},
            {url:"#",name:"合作招商"},
            {url:"#",name:"商家帮助"},
            {url:"#",name:"营销中心"},
            {url:"#",name:"社区中心"},
            {url:"#",name:"销售中心"}
        ]}
    }
})

new Vue({
    el:"#footer"
})
//<div id='footer' class='footer' >
//    <ul>
//    <li v-for='item in items'><a :href='item.url'>{{item.name}}</a></li>
//</ul>
//<p>web短版权归作者所有@2018 all right reserved</p>
//</div>