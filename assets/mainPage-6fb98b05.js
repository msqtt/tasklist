import{_,r as Y,o as u,c as v,a as e,t as r,u as B,b as H,d as a,e as L,n as d,f as j,g as O,h as V,i as D,p as R,j as z}from"./index-9b5845e6.js";const F="/assets/settings-e8dc7da5.png",G="/assets/Profile-73cae3ab.jpg";const J={class:"clockmain"},U={class:"smallTime"},q={class:"bigTime"},A={__name:"clock",setup(l){const o=Y({timeDate:0,timeMonth:0,timeYear:0,timeHour:0,timeMinute:0,timeSecond:0}),n=()=>{const s=new Date;o.timeDate=s.getDate(),o.timeMonth=s.getMonth()+1,o.timeYear=s.getFullYear(),o.timeHour=c(s.getHours()),o.timeMinute=c(s.getMinutes()),o.timeSecond=c(s.getSeconds())},c=s=>(s<10?"0":"")+s;return n(),setInterval(n,10),(s,h)=>(u(),v("div",J,[e("div",U,r(o.timeHour)+":"+r(o.timeMinute)+":"+r(o.timeSecond),1),e("div",q,r(o.timeYear)+" 年 "+r(o.timeMonth)+" 月 "+r(o.timeDate)+" 日",1)]))}},K=_(A,[["__scopeId","data-v-30bdda4d"]]),Q={};function W(l,o){return u(),v("div")}const X=_(Q,[["render",W]]);const f=l=>(R("data-v-f4d07979"),l=l(),z(),l),Z={class:"main"},ee={id:"setting"},te=f(()=>e("img",{src:F},null,-1)),oe=[te],se=f(()=>e("div",{id:"settingshow"},[e("span"),e("span")],-1)),ne=f(()=>e("div",{class:"flex justify-center"},[e("img",{src:G,alt:"头像",id:"Profile"})],-1)),re={style:{cursor:"auto"}},ce={class:"absolute bottom-[5px] left-[200px] text-[--theme-sidebar-text-color]"},le={__name:"mainPage",setup(l){B();const o=H(),n=m=>{o.push({name:m})};let c=JSON.parse(localStorage.getItem("mainData"));const s=c.time.userID,h=c.time.primeID,C=()=>{h!=8830300545?n("GetMore"):alert("您没有查看版本信息的权限")},M=new Date("04 09 2023").getTime(),I=new Date().getTime(),S=a(((m,t)=>Math.floor((m-t)/(24*3600*1e3)))(I,M)),g=a(""),b=a({color:"#969ba7"}),P=a({color:"#969ba7"});let p=0,k=0;const T=()=>{b.value.color=++p%2?"#1296db":"#969ba7",g.value=p%2?{width:"250px",opacity:1,visibility:"visible"}:""},$=()=>{P.value.color=++k%2?"#1296db":"#969ba7"},y=a(""),x=()=>{y.value={transform:"rotate(240deg)",transition:"all 0.5s ease-in-out"}},w=()=>{p%2==0&&(y.value={transform:"rotate(0deg)",transition:"all 1.5s ease-in-out"})},E=m=>{switch(m){case 0:document.documentElement.style.setProperty("--theme-color","#000000"),document.documentElement.style.setProperty("--theme-roloc","#ffffff"),document.documentElement.style.setProperty("--theme-main-color","#4698db"),document.documentElement.style.setProperty("--theme-sidebar-major-color","#161616"),document.documentElement.style.setProperty("--theme-sidebar-text-color","#959ba7"),document.documentElement.style.setProperty("--theme-background-major-color","#161616"),document.documentElement.style.setProperty("--theme-text-major-color","#959ba7"),document.documentElement.style.setProperty("--theme-text-major-color-active","#676b73"),document.documentElement.style.setProperty("--theme-text-major-color-tip","#5b5e66"),document.documentElement.style.setProperty("--theme-text-major-color-input","#252525"),document.documentElement.style.setProperty("--theme-class-major-color-hover","#353535");break;case 1:document.documentElement.style.setProperty("--theme-color","#e0e0e0"),document.documentElement.style.setProperty("--theme-roloc","#312520"),document.documentElement.style.setProperty("--theme-main-color","#4698db"),document.documentElement.style.setProperty("--theme-sidebar-major-color","#e9f1f6"),document.documentElement.style.setProperty("--theme-sidebar-text-color","#75664d"),document.documentElement.style.setProperty("--theme-background-major-color","#e9f1f6"),document.documentElement.style.setProperty("--theme-text-major-color","#75664d"),document.documentElement.style.setProperty("--theme-text-major-color-active","#5d513c"),document.documentElement.style.setProperty("--theme-text-major-color-tip","#bbcdc5"),document.documentElement.style.setProperty("--theme-text-major-color-input","#f3f9f1"),document.documentElement.style.setProperty("--theme-class-major-color-hover","#e0f0e9");break}};return E(c.time.theme),(m,t)=>{const N=L("router-view");return u(),v("div",Z,[e("div",ee,[e("div",{onMouseover:x,style:d(y.value),id:"settingico"},oe,36),e("div",{onMouseover:x,onMouseleave:w,id:"settingsidebar",style:d(g.value)},[e("div",{onClick:T,id:"settingtop"},[e("span",{style:d(b.value),class:"iconfont"},"",4)]),e("div",{onClick:$,id:"settingclock"},[e("span",{style:d(P.value),class:"iconfont"},"",4)]),se,e("ul",null,[e("li",null,[ne,e("div",{class:"signin",onClick:t[0]||(t[0]=i=>n("SignIn"))},r(j(s)),1),e("div",re,"已注册"+r(S.value)+"天",1)]),e("li",{onClick:t[1]||(t[1]=i=>n("List"))},"⏱️任务清单"),e("li",{onClick:t[2]||(t[2]=i=>n("DayList"))},"🧾每日任务"),e("li",{onClick:t[3]||(t[3]=i=>n("TaskCalendar"))},"📖任务日历"),e("li",{onClick:t[4]||(t[4]=i=>n("MainList"))},"📜杂项安排"),e("li",{onClick:t[5]||(t[5]=i=>n("DIY"))},"✨风格选择")]),e("div",ce,[e("p",{onClick:t[6]||(t[6]=i=>C())},"0.0.1")])],36),j(k)%2?(u(),O(K,{key:0,class:"clock"})):V("",!0)]),D(N,{onNewTheme:E}),D(X)])}}},ae=_(le,[["__scopeId","data-v-f4d07979"]]);export{ae as default};