import{_ as we,d as c,k as Ce,r as W,e as J,o as f,c as x,h as V,a as t,n as M,i as E,m as X,t as C,F as Z,l as ee,f as i,w as A,v as G,p as je,j as De}from"./index-9b5845e6.js";const h=R=>(je("data-v-4abd9274"),R=R(),De(),R),Te={class:"flex flex-col h-auto bg-[--theme-color]"},Se={key:0},$e={class:"flex w-auto mx-[10vw] mt-[30px]",id:"phoneshow"},Ve=["onClick"],ze={class:"font-black text-[26px] pb-[5px]"},Le={key:0},Me={key:0,class:"text-[14px]"},Fe={class:"mx-[30px] my-[25px] flex flex-col text-[--theme-text-major-color]"},Ie={class:"flex items-center justify-between"},Ue={class:"flex mb-[10px] text-[24px] font-black select-none transition-all"},Be=h(()=>t("div",{class:"flex h-full text-[12px] text-[--theme-text-major-color-tip]"},[t("p",{class:"text-left"},"任务请勿重名喔，保存的任务日历点击按钮更新到任务清单中哦")],-1)),Ee=h(()=>t("i",{class:"iconfont",style:{"font-size":"24px"}},"",-1)),Re=[Ee],Oe={class:"w-full"},Ne={class:"flex items-center"},Ye=["onClick"],Je={class:"h-full flex items-center"},Ae={class:"flex items-center h-full mx-[20px] text-[12px] text-[--theme-text-major-color-tip]"},Ge={class:"text-left"},Ke=["onClick"],qe=h(()=>t("i",{class:"iconfont"},"",-1)),He=[qe],Pe={class:"flex items-center justify-center my-[15px] select-none mx-[-15px] px-[15px] rounded-2xl"},Qe={class:"flex items-center"},We={class:"h-full bg-[--theme-text-major-color-input] rounded-2xl mx-[20px]"},Xe=h(()=>t("i",{class:"iconfont",style:{"font-size":"40px"}},"",-1)),Ze=[Xe],et={class:"h-full bg-[--theme-text-major-color-input] rounded-2xl mx-[20px]"},tt={key:1,id:"listdesc",class:"my-[30px] overflow-auto"},lt={key:0,class:"mx-[30px] flex flex-col"},ot={class:"flex justify-between items-center my-[25px]"},st={class:"text-[--theme-text-major-color] text-[24px] font-black"},nt=h(()=>t("i",{class:"iconfont",style:{"font-size":"24px"}},"",-1)),at=[nt],it={class:"flex text-[14px] font-black overflow-hidden cursor-pointer select-none"},rt={key:0,class:"w-full h-full flex justify-center items-center transition-all duration-1000 absolute pointer-events-none"},ct={class:"flex overflow-hidden"},ut={class:"flex text-[14px] mt-[15px] font-black overflow-hidden cursor-pointer select-none"},dt={class:"w-[150px] h-[40px] bg-[--theme-text-major-color-input] mr-[10px] flex justify-center items-center rounded-3xl text-[--theme-text-major-color] hover:bg-[--theme-class-major-color-hover] active:text-[--theme-text-major-color-active]"},vt={class:"flex items-center justify-center"},ft=h(()=>t("p",{class:"w-[30px] mt-[22px] mr-[5px] text-[--theme-text-major-color]"},"到",-1)),xt={class:"flex text-[14px] mt-[15px] font-black overflow-hidden cursor-pointer select-none"},pt={class:"w-[150px] h-[40px] bg-[--theme-text-major-color-input] mr-[10px] flex justify-center items-center rounded-3xl text-[--theme-text-major-color] hover:bg-[--theme-class-major-color-hover] active:text-[--theme-text-major-color-active]"},mt={class:"flex my-[25px] flex-col text-[--theme-text-major-color] select-none"},bt=h(()=>t("p",{class:"flex mb-[10px] text-[14px] select-none"},"备注",-1)),ht={class:"flex flex-col text-[--theme-text-major-color]"},gt={class:"w-full"},yt=["onUpdate:modelValue"],kt=["onClick"],_t={class:"flex items-center my-[5px] relative select-none bg-[--theme-text-major-color-input] mx-[-15px] px-[15px] rounded-2xl"},wt={class:"w-[22px] h-full"},Ct=h(()=>t("i",{class:"iconfont",style:{"font-size":"22px"}},"",-1)),jt=[Ct],Dt={class:"flex my-[25px] flex-col text-[--theme-text-major-color] select-none"},Tt=h(()=>t("p",{class:"flex mb-[10px] text-[14px] select-none"},"附件",-1)),St={class:"border-dotted border-2 border-[--theme-text-major-color] rounded"},$t=h(()=>t("p",{class:"text-[--theme-text-major-color]"},"点击此处上传文件",-1)),Vt={__name:"TaskCalendar",setup(R){const m=c(new Date);new Date().getDate();const g=c(0),O=c(0),j=c(0),y=c(),k=c();Ce(()=>{Q(),K(),q(),Y()});let s=JSON.parse(localStorage.getItem("mainData")),d,D=c(0),a=s.Calendar[D.value];const N=c(0),_=c(0),Y=()=>{let l=[],e=new Date().getTime();for(let n=0;n<s.Calendar.length;n++)e>=new Date(s.Calendar[n].startTime).getTime()&&e<=new Date(s.Calendar[n].endTime).getTime()+1e3*60*60*24-1&&l.push(s.Calendar[n]);if(l.length==0)for(let n=0;n<s.tableData.length;n++)s.tableData[n].taskclass=="Calendar"&&s.tableData.splice(n,1);else for(let n=0;n<l.length;n++)s.tableData.map(function(b){return b.name}).indexOf(l[n].name)!=-1?s.tableData[s.tableData.map(function(b){return b.name}).indexOf(l[n].name)]=l[n]:s.tableData.map(function(b){return b.name}).indexOf(l[n].name)==-1&&s.tableData.push(l[n]);q()},u=()=>{g.value=0,setTimeout(()=>{g.value=1},0),localStorage.setItem("mainData",JSON.stringify(s)),console.log("datas have updated")},F=c(1);let w=W([]);const T=()=>{let l=[],e="",n=m.value.getFullYear(),b=m.value.getMonth()+1;for(let B=0;B<32;B++){e=n+"-"+b+"-"+B;for(let S=0;S<s.Calendar.length;S++)new Date(e).getTime()+1e8>=new Date(s.Calendar[S].startTime).getTime()&&new Date(e)<=new Date(s.Calendar[S].endTime)&&l.push(s.Calendar[S].name);w.push(l),l=[]}F.value=0,setTimeout(()=>{F.value=1})};T();const te=l=>{if(l==1){if(_.value==1)return"width:300px";if(_.value==0&&N.value==1)return"width:700px";if(_.value==0&&N.value==0)return"width:1200px"}else if(l==0&&_.value==1)return"width:400px"},z=c(),ie=l=>{z.value=l},re=l=>{N.value=1,O.value=0,setTimeout(()=>{O.value=1},0),_.value=0,j.value=0,y.value=l,k.value=l,l==null&&(l=z.value),d=[];for(let e=0;e<s.Calendar.length;e++)new Date(l)>=new Date(s.Calendar[e].startTime)&&new Date(l)<=new Date(s.Calendar[e].endTime)&&(d.push(s.Calendar[e]),D.value=e);m.value=new Date(l),F.value=0,setTimeout(()=>{F.value=1}),w=[],T()},le=c("font-size:40px;rotate: 0deg"),oe=c(0),ce=()=>{oe.value++,le.value="font-size:40px;rotate:"+oe.value*180+"deg",Y(),w=[],T(),g.value=1,setTimeout(()=>{g.value=0})};let L=W([]);const K=()=>{if(a!=null)for(let l=0;L.length<a.subaim.length;l++)L.push({pointerStyle:"font-size:24px;opacity: 1;",deleteRound:"margin-left:0;opacity: 1"})};K();const ue=l=>{L.splice(l,1),a.subaim.splice(l,1)},I=c(""),se=()=>{I.value&&(L.push({pointerStyle:"font-size:24px;opacity: 1;",deleteRound:"margin-left:0;opacity: 1"}),a.subaim.push({text:I.value,remove:0})),I.value=""},U=W([]),q=()=>{for(let l=0;U.length<s.Calendar.length;l++)s.Calendar[l].remove?U.push({pointerStyle:"font-size:24px;opacity: 1;",deleteLine:"text-decoration:line-through",deleteRound:"margin-left:0;opacity: 1"}):U.push({pointerStyle:"font-size:0px;opacity: 0;",deleteLine:"text-decoration:none",deleteRound:"margin-left: 40px;opacity: 0"});w=[],T()};q();const de=l=>{_.value=0,j.value=0,U.splice(l,1),s.Calendar.splice(s.Calendar.findIndex(n=>n.name==d[l].name),1);let e=z.value;d=[];for(let n=0;n<s.Calendar.length;n++)new Date(e)>=new Date(s.Calendar[n].startTime)&&new Date(e)<=new Date(s.Calendar[n].endTime)&&(d.push(s.Calendar[n]),D.value=n);w=[],T()},ve=()=>{U.push({pointerStyle:"font-size:0px;opacity: 0;",deleteLine:"text-decoration:none",deleteRound:"margin-left: 40px;opacity: 0"}),s.Calendar.push({startTime:z.value,endTime:z.value,taskclass:"Calendar",name:"新增任务",class:"生活",index:5,note:"",subaim:[],document:{},remove:0});let l=z.value;d=[];for(let e=0;e<s.Calendar.length;e++)new Date(l)>=new Date(s.Calendar[e].startTime)&&new Date(l)<=new Date(s.Calendar[e].endTime)&&(d.push(s.Calendar[e]),D.value=e);w=[],T()},fe=l=>{j.value=0,setTimeout(()=>{j.value=1}),_.value=1,y.value=d[l].startTime,k.value=d[l].endTime,a=d[l],D.value=l,Q(),P(),L=[],K(),g.value=0,setTimeout(()=>{g.value=1}),w=[],T()},H=c(""),xe=()=>{a.class=="生活"?a.class="工作":a.class="生活"},P=()=>{a!=null&&(a.class=="生活"?H.value="🎉":H.value="👔")};P();const r=c(0),v=c(""),pe=c(1),me=()=>{v.value="visibility: hidden;"},Q=()=>{if(a!=null)switch(a.index){case 0:v.value="visibility: visible;background-color:#252525";break;case 1:v.value="visibility: visible;background-color:#00ff3c";break;case 2:v.value="visibility: visible;background-color:#39ff00";break;case 3:v.value="visibility: visible;background-color:#bbff00";break;case 4:v.value="visibility: visible;background-color:#ffed00";break;case 5:v.value="visibility: visible;background-color:#ffc700";break;case 6:v.value="visibility: visible;background-color:#ffb900";break;case 7:v.value="visibility: visible;background-color:#ff9200";break;case 8:v.value="visibility: visible;background-color:#ff5c00";break;case 9:v.value="visibility: visible;background-color:#ff2500";break;case 10:v.value="visibility: visible;background-color:#ff003d";break;default:v.value="visibility: visible;background-color:#252525";break}},be=l=>{switch(d[l].index){case 0:return"visibility: visible;background-color:#252525";case 1:return"visibility: visible;background-color:#00ff3c";case 2:return"visibility: visible;background-color:#39ff00";case 3:return"visibility: visible;background-color:#bbff00";case 4:return"visibility: visible;background-color:#ffed00";case 5:return"visibility: visible;background-color:#ffc700";case 6:return"visibility: visible;background-color:#ffb900";case 7:return"visibility: visible;background-color:#ff9200";case 8:return"visibility: visible;background-color:#ff5c00";case 9:return"visibility: visible;background-color:#ff2500";case 10:return"visibility: visible;background-color:#ff003d";default:return"visibility: visible;background-color:#252525"}},he=()=>{document.addEventListener("keyup",function(l){l.key=="Enter"&&se()})},ne=c(),ae=c(),ge=()=>{ne.value=y.value},ye=()=>{ae.value=k.value},ke=l=>{l>k.value?y.value=ne.value:(y.value=l,d[D.value].startTime=y.value,u()),Y()},_e=l=>{new Date(l.getTime()+1e3*60*60*24-1)<y.value?k.value=ae.value:(k.value=new Date(l.getTime()+1e3*60*60*24-1),d[D.value].endTime=k.value,u()),Y(),g.value=0,setTimeout(()=>{g.value=1})};return(l,e)=>{const n=J("el-calendar"),b=J("el-date-picker"),B=J("el-button"),S=J("el-upload");return f(),x("div",Te,[g.value?(f(),x("div",Se)):V("",!0),t("div",$e,[t("div",{id:"date",class:"my-[30px] select-none overflow-auto text-[--theme-text-major-color] transition-all",style:M(te(1))},[E(n,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=o=>m.value=o)},{"date-cell":X(({data:o})=>[t("div",{class:"flex flex-col w-full h-full overflow-auto",onClick:p=>(re(o.day),ie(o.day),u())},[t("p",ze,C(o.day.split("-").slice(2).join("-")),1),(f(!0),x(Z,null,ee(i(w)[parseInt(o.day.split("-").slice(2).join("-"))],(p,$)=>(f(),x("div",{key:$},[F.value?(f(),x("div",Le,[new Date(o.day).getMonth()==m.value.getMonth()?(f(),x("div",Me,C(p),1)):V("",!0)])):V("",!0)]))),128))],8,Ve)]),_:1},8,["modelValue"])],4),O.value%2==1?(f(),x("div",{key:0,id:"list",class:"my-[30px] overflow-auto relative",style:M(te(0))},[t("div",Fe,[t("div",Ie,[t("div",null,[t("p",Ue,C(m.value.getFullYear()+"年"+(m.value.getMonth()+1)+"月"+m.value.getDate()+"日"),1),Be]),t("div",{class:"text-[--theme-text-major-color] font-black flex items-center select-none hover:text-[#e42a28]",onClick:e[1]||(e[1]=o=>(O.value=0,j.value=0,N.value=0,_.value=0))},Re)]),t("div",Oe,[(f(!0),x(Z,null,ee(i(d),(o,p)=>(f(),x("div",{class:"flex justify-between w-full my-[5px] relative select-none transition-all",key:p},[t("div",Ne,[t("div",{class:"bg-[--theme-background-major-color] flex items-center h-[35px] focus:outline-0 rounded cursor-pointer",onClick:$=>(fe(p),u())},[t("div",{class:"w-[15px] h-[15px] ml-[2px] mr-[16px] rounded-3xl",style:M(be(p))},null,4),t("div",Je,C(o.name),1),t("div",Ae,[t("p",Ge,C(o.note),1)])],8,Ye)]),t("div",{class:"w-[24px] cursor-pointer text-[22px]",onClick:$=>(de(p),u())},He,8,Ke)]))),128)),t("div",Pe,[t("div",Qe,[t("div",We,[t("div",{class:"outline outline-2 w-[50px] h-[50px] z-10 select-none cursor-pointer rounded-3xl flex items-center justify-center",onClick:e[2]||(e[2]=o=>(ve(),u()))},Ze)]),t("div",et,[t("div",{class:"outline outline-2 w-[50px] h-[50px] z-10 select-none cursor-pointer rounded-3xl flex items-center justify-center",onClick:e[3]||(e[3]=o=>(ce(),u()))},[t("i",{class:"iconfont activeSpecial",style:M(le.value)},"",4)])])])])])])],4)):V("",!0),j.value%2==1?(f(),x("div",tt,[i(a)!=null?(f(),x("div",lt,[t("div",ot,[t("p",st,[A(t("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=o=>i(a).name=o),class:"bg-[--theme-background-major-color] focus:bg-[--theme-text-major-color-input] h-[35px] focus:outline-0 rounded px-[10px] ml-[-10px]",onBlur:e[5]||(e[5]=o=>u())},null,544),[[G,i(a).name]])]),t("div",{class:"text-[--theme-text-major-color] font-black mx-[10px] flex items-center select-none hover:text-[#e42a28]",onClick:e[6]||(e[6]=o=>(j.value=0,_.value=0))},at)]),t("div",it,[t("div",{class:"w-[100px] h-[40px] bg-[--theme-text-major-color-input] mr-[10px] flex justify-center items-center rounded-3xl text-[--theme-text-major-color] hover:bg-[--theme-class-major-color-hover] active:text-[--theme-text-major-color-active]",onClick:e[7]||(e[7]=o=>(xe(),P(),u()))},[t("p",null,C(H.value),1),t("p",null,C(i(a).class),1)]),t("div",{class:"w-[40px] h-[40px] bg-[--theme-text-major-color-input] flex justify-center items-center rounded-3xl text-[--theme-color] hover:w-[300px] transition-all duration-700 relative overflow-hidden",onMouseover:e[19]||(e[19]=o=>me()),onMouseleave:e[20]||(e[20]=o=>Q())},[t("div",{class:"w-full h-full z-10 rounded-3xl absolute opacity-100 hover:opacity-0 transition-all duration-700",style:M(v.value)},null,4),t("div",{class:"w-full h-full flex justify-start",onClick:e[18]||(e[18]=o=>u())},[t("div",{class:"h-full w-[10%] bg-[#00ff3c] active:bg-[#00cc2f]",style:{"border-radius":"50% 0 0 50%"},onClick:e[8]||(e[8]=o=>(r.value=1,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#39ff00] active:bg-[#2dcc00]",onClick:e[9]||(e[9]=o=>(r.value=2,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#bbff00] active:bg-[#95cc00]",onClick:e[10]||(e[10]=o=>(r.value=3,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#ffed00] active:bg-[#ccbd00]",onClick:e[11]||(e[11]=o=>(r.value=4,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#ffc700] active:bg-[#cc9f00]",onClick:e[12]||(e[12]=o=>(r.value=5,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#ffb900] active:bg-[#cc9300]",onClick:e[13]||(e[13]=o=>(r.value=6,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#ff9200] active:bg-[#cc7400]",onClick:e[14]||(e[14]=o=>(r.value=7,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#ff5c00] active:bg-[#cc4900]",onClick:e[15]||(e[15]=o=>(r.value=8,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#ff2500] active:bg-[#cc1d00]",onClick:e[16]||(e[16]=o=>(r.value=9,i(a).index=r.value))}),t("div",{class:"h-full w-[10%] bg-[#ff003d] active:bg-[#cc0030]",style:{"border-radius":"0 50% 50% 0"},onClick:e[17]||(e[17]=o=>(r.value=10,i(a).index=r.value))})]),pe.value?(f(),x("p",rt,"优先级："+C(i(a).index),1)):V("",!0)],32)]),t("div",ct,[t("div",ut,[t("div",dt,[t("div",vt,[E(b,{modelValue:y.value,"onUpdate:modelValue":e[21]||(e[21]=o=>y.value=o),type:"date",placeholder:"选择起始时间","prefix-icon":"none",clearable:!1,onFocus:ge,onChange:ke},null,8,["modelValue"])])])]),ft,t("div",xt,[t("div",pt,[t("div",null,[E(b,{modelValue:k.value,"onUpdate:modelValue":e[22]||(e[22]=o=>k.value=o),type:"date",placeholder:"选择结束时间","prefix-icon":"none",clearable:!1,onFocus:ye,onChange:_e},null,8,["modelValue"])])])])]),t("div",mt,[bt,A(t("input",{type:"text",placeholder:"➕在这里输入备注","onUpdate:modelValue":e[23]||(e[23]=o=>i(a).note=o),class:"bg-[--theme-background-major-color] focus:bg-[--theme-text-major-color-input] h-[35px] focus:outline-0 rounded px-[10px] mx-[-10px]",onBlur:e[24]||(e[24]=o=>u())},null,544),[[G,i(a).note]])]),t("div",ht,[t("p",{class:"flex mb-[10px] text-[14px] select-none",onClick:e[25]||(e[25]=o=>console.log(m.value))},"子任务"),t("div",gt,[(f(!0),x(Z,null,ee(i(a).subaim,(o,p)=>(f(),x("div",{class:"flex w-full items-center my-[5px] relative select-none",key:p},[A(t("input",{type:"text","onUpdate:modelValue":$=>o.text=$,class:"w-full bg-[--theme-background-major-color] h-[35px] focus:outline-0 rounded",onBlur:e[26]||(e[26]=$=>u())},null,40,yt),[[G,o.text]]),t("div",{class:"w-[24px] cursor-pointer text-[22px]",onClick:$=>(ue(p),u())},[t("i",{class:"iconfont",style:M(i(L)[p].deleteRound)},"",4)],8,kt)]))),128)),t("div",_t,[A(t("input",{type:"text","onUpdate:modelValue":e[27]||(e[27]=o=>I.value=o),placeholder:"添加新的子任务",class:"w-full bg-[--theme-text-major-color-input] h-[35px] focus:outline-0 rounded px-[2px]",onKeyup:e[28]||(e[28]=o=>(he(),u()))},null,544),[[G,I.value]]),t("div",wt,[t("div",{class:"outline outline-2 w-[18px] h-[18px] z-10 select-none cursor-pointer rounded-3xl flex items-center justify-center",onClick:e[29]||(e[29]=o=>(se(),u()))},jt)])])])]),t("div",Dt,[Tt,E(S,{class:"w-full min-w-[330px]",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:""},{default:X(()=>[t("div",St,[E(B,{color:"--theme-background-major-color",class:"w-full min-w-[330px]",type:"primary"},{default:X(()=>[$t]),_:1})])]),_:1})])])):V("",!0)])):V("",!0)])])}}},Lt=we(Vt,[["__scopeId","data-v-4abd9274"]]);export{Lt as default};