let valueCounter= 0;
let valueCounter2 = 0;
var storemsg=[];
var senderid;
var input1 = document.getElementById('value');
var myMsg = document.getElementById('send_msg1');
var input2 = document.getElementById('value1');
var myMsg2 = document.getElementById('send_msg2')
function updateList(inputId,senderId){
  let val = document.getElementById(inputId);
  let textMsg = val.value;
  senderid=senderId;
  senderid=senderId;
  storemsg[valueCounter] = {id:valueCounter+1,msg:textMsg,sender:senderId};
  valueCounter++;
  myMsg.innerHTML = '';
  myMsg2.innerHTML = '';
  let printMsg = '';
  for(i=0;i<valueCounter;i++)
  {
    myMsg.innerHTML +='<div class="m1_sender_'+storemsg[i].sender+'">'+storemsg[i].msg+'</div>';
    myMsg2.innerHTML +='<div class="m2_sender_'+storemsg[i].sender+'">'+storemsg[i].msg+'</div>';
  }
  val.value="";
}