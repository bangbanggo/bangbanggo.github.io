/**
 * Created by gwb10 on 2018/4/23.
 */
function showsubmenu(obj){
    document.getElementById("menusub").className = "submenu";
    submenu.items = allbutton[obj.id];
}
function hidesubmenu(obj){
    document.getElementById("menusub").className = "sr-only";
}
function showsub(){
    document.getElementById("menusub").className = "submenu";
}
function hidesub(){
    document.getElementById("menusub").className = "sr-only";
}