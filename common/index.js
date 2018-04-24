/**
 * Created by gwb10 on 2018/4/23.
 */
var dhul = new Vue({
    el:"#dh",
    data:{
        items:[
            {url:"#",message:"保健"},
            {url:"#",message:"医药"},
            {url:"#",message:"器材"},
            {url:"#",message:"护肤"},
            {url:"#",message:"卫生"},
            {url:"#",message:"保健"},
            {url:"#",message:"养胃"}
        ]
    }
});
var menu = new Vue({
    el:"#menu",
    data:{
        items:[
            {url:'#',name:'花生',id:"id1"},
            {url:'#',name:'花生',id:"id2"},
            {url:'#',name:'花生',id:"id3"},
            {url:'#',name:'花生',id:"id4"},
            {url:'#',name:'花生',id:"id1"},
            {url:'#',name:'花生',id:"id1"},
            {url:'#',name:'花生',id:"id1"},
            {url:'#',name:'花生',id:"id1"},
            {url:'#',name:'花生',id:"id1"},
            {url:'#',name:'花生'}
        ]
    }
});
var images = [
    {id:'1',url:'#',value:'./img/1.jpg'},
    {id:'2',url:'#',value:'./img/2.jpg'},
    {id:'3',url:'#',value:'./img/2.jpg'},
    {id:'3',url:'#',value:'./img/2.jpg'},
    {id:'3',url:'#',value:'./img/2.jpg'},
    {id:'4',url:'#',value:'./img/1.jpg'}
];

var tuijian = new Vue({
    el:"#tuijian",
    data:{
        items:images
    }
});

var saleshops=[
    {url:"#",price:"99.00",oldprice:"130.00",title:"活血化瘀",image:"./img/1.jpg"},
    {url:"#",price:"99.00",oldprice:"130.00",title:"活血化瘀",image:"./img/1.jpg"},
    {url:"#",price:"99.00",oldprice:"130.00",title:"活血化瘀",image:"./img/1.jpg"},
    {url:"#",price:"99.00",oldprice:"130.00",title:"活血化瘀",image:"./img/1.jpg"},
    {url:"#",price:"99.00",oldprice:"130.00",title:"活血化瘀",image:"./img/1.jpg"}
];
var sale = new Vue({
    el:"#sale",
    data:{
        items:saleshops
    }
});

var fs = [
    {
        floor:"1F",
        name:"保健医药",
        first:{url:"#",image:"./img/1.jpg"},
        second:{url:"#",image:"./img/1.jpg"},
        third:[
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"}
        ],
        fourth:[
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"}
        ]
    },
    {
        floor:"2F",
        name:"养颜美容",
        first:{url:"#",image:"./img/1.jpg"},
        second:{url:"#",image:"./img/1.jpg"},
        third:[
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"}
        ],
        fourth:[
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"}
        ]
    },
    {
        floor:"2F",
        name:"医药专科",
        first:{url:"#",image:"./img/1.jpg"},
        second:{url:"#",image:"./img/1.jpg"},
        third:[
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"}
        ],
        fourth:[
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"},
            {url:"#",image:"./img/1.jpg"}
        ]
    },
]
var floors = new Vue({
    el:"#floors",
    data:{
        items:fs
    }
});
var allbutton = {
    "id1": [
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"}
    ],"id2": [
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"}
    ],"id3": [
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"}
    ],"id4": [
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"}
    ],"id5": [
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"},
        {url:"#",name:"按钮1"}
    ]
}

var viwwbutton =allbutton["id4"];

var submenu = new Vue({
    el:"#menusub",
    data: {
        items:viwwbutton
    }
});
