import{_ as D,r as Z,o as v,c as w,a as o,t as d,u as A,b as ee,d as l,w as te,e as se,f as Y,n as g,g as O,h as oe,i as H,p as ne,j as ie}from"./index-430f7254.js";import{e as ae}from"./EventBus-e5c1ebb2.js";const ce="/assets/settings-e8dc7da5.png",re="/assets/Profile-73cae3ab.jpg";const le={class:"clockmain"},me={class:"smallTime"},de={class:"bigTime"},he={__name:"clock",setup(f){const c=Z({timeDate:0,timeMonth:0,timeYear:0,timeHour:0,timeMinute:0,timeSecond:0}),r=()=>{const a=new Date;c.timeDate=a.getDate(),c.timeMonth=a.getMonth()+1,c.timeYear=a.getFullYear(),c.timeHour=h(a.getHours()),c.timeMinute=h(a.getMinutes()),c.timeSecond=h(a.getSeconds())},h=a=>(a<10?"0":"")+a;return r(),setInterval(r,10),(a,E)=>(v(),w("div",le,[o("div",me,d(c.timeHour)+":"+d(c.timeMinute)+":"+d(c.timeSecond),1),o("div",de,d(c.timeYear)+" 年 "+d(c.timeMonth)+" 月 "+d(c.timeDate)+" 日",1)]))}},ue=D(he,[["__scopeId","data-v-30bdda4d"]]),fe={};function pe(f,c){return v(),w("div")}const _e=D(fe,[["render",pe]]);const S=f=>(ne("data-v-2a468688"),f=f(),ie(),f),ve={class:"main"},ye={key:0},ge=["width","height"],we={id:"setting"},be=S(()=>o("img",{src:ce},null,-1)),ke=[be],Pe=S(()=>o("div",{id:"settingshow"},[o("span"),o("span")],-1)),Me=S(()=>o("div",{class:"flex justify-center"},[o("img",{src:re,alt:"头像",id:"Profile"})],-1)),xe={style:{cursor:"auto"}},Ie={class:"absolute bottom-[5px] left-[200px] text-[--theme-sidebar-text-color]"},De={__name:"mainPage",setup(f){A();const c=ee(),r=t=>{c.push({name:t})};l(0);const h=l(0);let a=JSON.parse(localStorage.getItem("mainData"));setInterval(()=>{a=JSON.parse(localStorage.getItem("mainData")),h.value=a.time.theme});const E=a.time.userID,V=a.time.primeID,B=()=>{V!=8830300545?r("GetMore"):alert("您没有查看版本信息的权限")},F=new Date("04 09 2023").getTime(),J=new Date().getTime(),X=l(((t,e)=>Math.floor((t-e)/(24*3600*1e3)))(J,F)),z=l(""),C=l({color:"#969ba7"}),L=l({color:"#969ba7"});let b=0,T=0;const R=()=>{C.value.color=++b%2?"#1296db":"#969ba7",z.value=b%2?{width:"250px",opacity:1,visibility:"visible"}:""},q=()=>{L.value.color=++T%2?"#1296db":"#969ba7"},k=l(""),$=()=>{k.value={transform:"rotate(240deg)",transition:"all 0.5s ease-in-out"}},G=()=>{b%2==0&&(k.value={transform:"rotate(0deg)",transition:"all 1.5s ease-in-out"})},y=t=>{document.documentElement.style.setProperty("--theme-color",t[0]),document.documentElement.style.setProperty("--theme-roloc",t[1]),document.documentElement.style.setProperty("--theme-main-color",t[2]),document.documentElement.style.setProperty("--theme-sidebar-major-color",t[3]),document.documentElement.style.setProperty("--theme-sidebar-text-color",t[4]),document.documentElement.style.setProperty("--theme-background-major-color",t[5]),document.documentElement.style.setProperty("--theme-text-major-color",t[6]),document.documentElement.style.setProperty("--theme-text-major-color-active",t[7]),document.documentElement.style.setProperty("--theme-text-major-color-tip",t[8]),document.documentElement.style.setProperty("--theme-text-major-color-input",t[9]),document.documentElement.style.setProperty("--theme-class-major-color-hover",t[10])},_=window.matchMedia("(prefers-color-scheme: dark)");_.addEventListener("change",t=>{u(a.time.theme)});const u=t=>{switch(t){case 0:y(["#000000","#ffffff","#4698db","#161616","#959ba7","#161616","#959ba7","#676b73","#5b5e66","#252525","#353535"]);break;case 1:y(["#e0e0e0","#312520","#4698db","#e9f1f6","#75664d","#e9f1f6","#75664d","#5d513c","#bbcdc5","#f3f9f1","#e0f0e9"]);break;case 2:y(["#000000","#ffffff","#4698db","#161616","#959ba7","#161616","#959ba7","#676b73","#5b5e66","#252525","#353535"]);break;case 3:y(["#e0e0e0","#312520","#4698db","#e9f1f6","#75664d","#e9f1f6","#75664d","#5d513c","#bbcdc5","#f3f9f1","#e0f0e9"]);break}let e=JSON.parse(localStorage.getItem("mainData"));e.time.bindTheme&&(_.matches&&t==1?(e.time.theme=0,u(e.time.theme)):_.matches&&t==3?(e.time.theme=2,u(e.time.theme)):!_.matches&&t==0?(e.time.theme=1,u(e.time.theme)):!_.matches&&t==2&&(e.time.theme=3,u(e.time.theme)),localStorage.setItem("mainData",JSON.stringify(e)))};u(a.time.theme),(()=>{ae.on("theme",t=>{u(t)})})();const P=l(""),M=l(1920),x=l(790);class n{constructor(e,i,s,m,p,W,K,Q){this.a=e,this.b=i,this.c=s,this.d=m,this.z=p,this.start=W,this.end=K,this.gap=Q,this.pointList=[],this.computePointList()}computePointList(){this.pointList=[];for(let e=this.start;e<=this.end;e=e+this.gap){let i=e,s=this.a*Math.sin((this.b*i+this.c)/180*Math.PI)+this.d,m=e;this.pointList.push({x:i,y:s,z:this.z,originX:i,offset:m})}}}const I=[new n(20,2,0,0,-390,-300,300,10),new n(20,2,0,0,-360,-300,300,10),new n(20,2,0,0,-330,-300,300,10),new n(20,2,0,0,-300,-300,300,10),new n(20,2,0,0,-270,-300,300,10),new n(20,2,0,0,-240,-300,300,10),new n(20,2,0,0,-210,-300,300,10),new n(20,2,0,0,-180,-300,300,10),new n(20,2,0,0,-150,-300,300,10),new n(20,2,0,0,-120,-300,300,10),new n(20,2,0,0,-90,-300,300,10),new n(20,2,0,0,-60,-300,300,10),new n(20,2,0,0,-30,-300,300,10),new n(20,2,0,0,0,-300,300,10),new n(20,2,0,0,30,-300,300,10),new n(20,2,0,0,60,-300,300,10),new n(20,2,0,0,90,-300,300,10),new n(20,2,0,0,120,-300,300,10),new n(20,2,0,0,150,-300,300,10),new n(20,2,0,0,180,-300,300,10),new n(20,2,0,0,210,-300,300,10),new n(20,2,0,0,240,-300,300,10),new n(20,2,0,0,270,-300,300,10),new n(20,2,0,0,300,-300,300,10)],j=t=>{const e=P.value.getContext("2d");e.clearRect(0,0,M.value,x.value),I.forEach(i=>{i.pointList.forEach(s=>{const m=1.5*t.z/(t.z-s.z);e.beginPath(),a.time.theme==2?e.fillStyle="#ffffff":a.time.theme==3&&(e.fillStyle="#000000"),e.arc(s.canvasX+M.value/2,s.canvasY+x.value/2,m,0,2*Math.PI),e.closePath(),e.fill()})})},U=(t,e)=>{I.forEach(i=>{i.pointList.forEach(s=>{let m=s.x,p=s.z;s.x=m*Math.cos(t/180*Math.PI)-p*Math.sin(t/180*Math.PI),s.z=p*Math.cos(t/180*Math.PI)+m*Math.sin(t/180*Math.PI),s.y=i.a*Math.sin((i.b*s.originX+i.c+s.offset)/180*Math.PI)+i.d,s.canvasX=(s.x-e.x)*e.z/(e.z-p),s.canvasY=(s.y-e.y)*e.z/(e.z-p)})})},N=t=>{window.requestAnimationFrame(()=>{I.forEach((e,i)=>{e.pointList.forEach(s=>{e.c=s.offset+i*30,s.offset=s.offset+1}),U(.003,t)}),j(t),N(t)})};return te(P,(t,e)=>{const i={x:70,y:-70,z:500};j(i),N(i)}),(t,e)=>{const i=se("router-view");return v(),w("div",ve,[h.value==2||h.value==3?(v(),w("div",ye,[o("canvas",{class:"absolute left-[0] z-[0]",ref_key:"wave",ref:P,width:M.value,height:x.value},null,8,ge)])):Y("",!0),o("div",we,[o("div",{onMouseover:$,style:g(k.value),id:"settingico"},ke,36),o("div",{onMouseover:$,onMouseleave:G,id:"settingsidebar",style:g(z.value)},[o("div",{onClick:R,id:"settingtop"},[o("span",{style:g(C.value),class:"iconfont"},"",4)]),o("div",{onClick:q,id:"settingclock"},[o("span",{style:g(L.value),class:"iconfont"},"",4)]),Pe,o("ul",null,[o("li",null,[Me,o("div",{class:"signin",onClick:e[0]||(e[0]=s=>r("SignIn"))},d(O(E)),1),o("div",xe,"已注册"+d(X.value)+"天",1)]),o("li",{onClick:e[1]||(e[1]=s=>r("List"))},"⏱️任务清单"),o("li",{onClick:e[2]||(e[2]=s=>r("DayList"))},"🧾每日任务"),o("li",{onClick:e[3]||(e[3]=s=>r("TaskCalendar"))},"📖任务日历"),o("li",{onClick:e[4]||(e[4]=s=>r("MainList"))},"📜杂项安排"),o("li",{onClick:e[5]||(e[5]=s=>r("DIY"))},"✨风格选择")]),o("div",Ie,[o("p",{onClick:e[6]||(e[6]=s=>B())},"0.1.1")])],36),O(T)%2?(v(),oe(ue,{key:0,class:"clock"})):Y("",!0)]),H(i),H(_e)])}}},Le=D(De,[["__scopeId","data-v-2a468688"]]);export{Le as default};