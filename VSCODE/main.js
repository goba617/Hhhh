alert("對戰時最後一擊敵人血量不會顯示成0我不知道怎麼用之後再做呵呵呵")
let peotime = 0;
let chName ="";
let race="";
let fsitfor=2;
let sitfor=0;
let cult=0;
//指修為//
let att=2;
//攻擊力//
let heal=20;
//血量//
let chaTier="";
let eneheal=0;
//戰鬥中設定//
let eneatt=0;
let enemyname="";
let bite=1;
let graywolfS=[bite,bite,bite,bite];
let DFE=0;
//對敵人總傷害//
let youhealth=0;
//戰鬥中的//
let eneSkill=0;
//敵人技能//
let backpack=[];
let ironswordT3=[6,"ironswordT3"];
//微損的鐵劍傷害//
//規律：第一項為傷害，第二項為名字//
function help(){
    document.getElementById("help").innerText="狐族：速度1.2\n人族：打坐修為+1";}
function decide(){
  chName=document.getElementById("nm").value;
  document.getElementById("firstImf").style.display="none";
  document.getElementById("chap1").style.display="block";
}
function people(){
  peotime=peotime+1;
  race="人族";
  if(peotime>1){
  alert("nope");
  peotime=peotime-1;
}
}
function chImf(){document.getElementById("characterName").innerText="名字："+ chName;
  document.getElementById("chType").innerText="種族："+race;
  document.getElementById("cultivation").innerText="修為："+cult;
  att=2+cult*0.05;
  heal=20+cult*0.1;
  document.getElementById("attack").innerText="攻擊力："+att;
  document.getElementById("health").innerText="生命值："+heal;
}
function fox(){peotime=peotime+1;
race="狐族";
if(peotime>1){alert("nope");
peotime=peotime-1;
}}
function start(){document.getElementById("chap1").style.display="block";
  document.getElementById("chap2").style.display="block";
  document.getElementById("start").style.display="none";
}
function contin1(){document.getElementById("chap3").style.display="block";
  document.getElementById("contin2").style.display="none";
}
function openSit(){document.getElementById("chap4").style.display="block";
  document.getElementById("openSit2").style.display="none";
}
function Iknow(){document.getElementById("sit").style.display="block";
  document.getElementById("iknow").style.display="none";
  document.getElementById("chap5").style.display="block";
}
function sitting(){
  if(race==="人族"){sitfor = fsitfor+1;}
  else if(race==="狐族"){sitfor=fsitfor;};
  cult = cult+sitfor;
  if(cult>=1500){
  alert("你已修煉到瓶頸，渡劫後才能再修煉");
  cult=1500;
}
}
function Wtier(){
  if(cult<200){chaTier="凡人";}
  else if(200<=cult,cult<500){chaTier="凝氣前期";}
  else if(500<=cult,cult<800){chaTier="凝氣中期";}
  else if(800<=cult,cult<1100){chaTier="凝氣後期";}
  else if(1100<=cult,cult<=1500){chaTier="凝氣圓滿";};
  document.getElementById("tier").innerText="境界："+chaTier;}
function firstbattle(){document.getElementById("normalscreen").style.display="none";
  document.getElementById("battlescreen").style.display="block";
  document.getElementById("enemyname").innerText="一隻被抓來當first blood的灰狼";
  eneheal=10;
  document.getElementById("enemyhealth").innerText="血量："+eneheal;
  youhealth=heal;
  document.getElementById("yourhealth").innerText="你的血量："+youhealth;
  document.getElementById("first").style.display="none"; 
}
function attack1(){
  if(eneheal>0){
    alert("吃我一拳啦！");
    eneSkill=graywolfS[Math.floor(Math.random()*graywolfS.length)];
    DFE=DFE+att;
    eneheal=eneheal-att;
    youhealth=youhealth-eneSkill;
    document.getElementById("enemyhealth").innerText="血量："+eneheal;
    document.getElementById("yourhealth").innerText="你的血量："+youhealth;
    if(eneheal<=0){
      alert("別打了他死了");
      alert("戰鬥結束了");
      document.getElementById("normalscreen").style.display="block";
      document.getElementById("battlescreen").style.display="none";
      document.getElementById("chap6").style.display="block";
    };
  };
}
document.getElementById("pickFirstWeapon").addEventListener("click",function(){
  let newBtn = document.createElement("button");
  newBtn.id="tier3IronGun";
  newBtn.textContent="微微受損的長槍";
  newBtn.addEventListener("click",function(){
    document.getElementById("tier3IronGun").style.display="none";
    att=att+4;
  })});
