const nam=document.getElementById("name");
const email=document.getElementById("email");
const website=document.getElementById("website");
const image=document.getElementById("image");
const html=document.getElementById("html");
const css=document.getElementById("css");
const java=document.getElementById("java");
const form = document.getElementById('form');
const gender= document.getElementsByName('gender');
const table=document.getElementById("table");
showstudent();
function showstudent(){
    let temptask=localStorage.getItem("Student");
    if(temptask==null){
        arr=[];
    }
    else{
        arr=JSON.parse(temptask);
    }
    let newstudent=`<tr>
            <th style="height:10px">Desciption</th>
            <th  style="height:10px">Image</th>
            </tr>`;
    for(let i=0;i<arr.length;i++){
        newstudent+= `<tr>
                    <td>Name: ${arr[i][0]}<br>
                    ${arr[i][1]}<br>
                    ${arr[i][2]}<br>
                    ${arr[i][3]}<br>
                    ${arr[i][4]}</td>
                    <td><img src=${arr[i][5]} alt="kane" style="width:200px"></td>
                    </tr>`
    }
    table.innerHTML=newstudent;
    form.reset();
}
submit.onclick=()=>{
    let temptask=localStorage.getItem("Student");
    if(temptask==null){
        arr=[];
   }
   else{
        arr=JSON.parse(temptask);
   }
   let arr1=[];
   let skill="";
   if(java.checked==true){
    skill+="java ";
   }
   if(html.checked==true){
    skill+="html ";
   }
   if(css.checked==true){
    skill+="css ";
   }
   let gen=null;
   for (i = 0; i < gender.length; i++) {
    if (gender[i].checked)
        gen=gender[i].value;
}
   arr1.push(nam.value);
   arr1.push(email.value);
   arr1.push(website.value);
   arr1.push(gen);
   arr1.push(skill);
   arr1.push(image.value);
   arr.unshift(arr1);
   localStorage.setItem("Student",JSON.stringify(arr));
   showstudent();
}
