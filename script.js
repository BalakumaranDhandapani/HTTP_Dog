//let codesinDb=[100,101,102,103,201,202,203,204,205,206,207,208,218,226,300,301,302,303,304,305,306,307,308,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,428,429,430,431,450,451,460,463,464,466,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,520,521,522,523,524,525,526,527,528,529,530,561,598,599,999];

let div=document.createElement("div");
div.setAttribute("class","form");

let code=document.createElement('input');
code.setAttribute("type","text");
code.setAttribute("class","form-control");
code.setAttribute("id","searchcode")
code.setAttribute("placeholder","Enter three digit HTTP response code number");

let button=document.createElement("button");
button.setAttribute("class","btn btn-info");
button.setAttribute("id","searchbutton");
button.innerHTML="Search";
button.addEventListener("click",search);

let div2=document.createElement("div");
div2.setAttribute("class","card text-center w-50");

let div3=document.createElement("div");
div3.setAttribute("class","card-body");

let head=document.createElement("h5");
head.setAttribute("class","card-title");
head.innerHTML="HTML Codes available in DB for Reference";

let para=document.createElement("p");
para.setAttribute("class","card-text");
para.innerHTML="List of Dogs images that are available for below mentioned HTTP response status codes";

let unorderedlist=document.createElement('ul');
unorderedlist.setAttribute("class","myul");

var li1=document.createElement('li');
li1.setAttribute("class","list1");
li1.innerHTML="<b>Informational Responses :</b> 100-103";

var li2=document.createElement('li');
li2.setAttribute("class","list2");
li2.innerHTML="<b>Successful responses :</b> 201-208,218,226";

var li3=document.createElement('li');
li3.setAttribute("class","list3");
li3.innerHTML="<b>Redirection messages :</b> 300-308";

var li4=document.createElement('li');
li4.setAttribute("class","list4");
li4.innerHTML="<b>Client error responses :</b> 400-426,428-431,450,451,460,463,464,466,494-499";

var li5=document.createElement('li');
li5.setAttribute("class","list5");
li5.innerHTML="<b>Server error responses :</b> 500-511,520-530,561,598,599";

var li6=document.createElement('li');
li6.setAttribute("class","list6");
li6.innerHTML="<b>Request Denied : 999";

unorderedlist.append(li1,li2,li3,li4,li5,li6);

div3.append(head,para,unorderedlist);

div2.append(div3);

div.append(code,button,div2);

document.body.append(div);

function search()
{
    let codetosearch=document.getElementById('searchcode').value;
    console.log(codetosearch);
    try
    {
    if( codetosearch >= 100 && codetosearch <600 )
    {
        let codediv=document.createElement("div");
        codediv.setAttribute("class","codeentered");
        codediv.innerHTML=`HTTP Code which you have entered is : ${codetosearch}`;
        let display=document.createElement("a");
        display.setAttribute("href",`https://http.dog/${codetosearch}.jpg`);
        display.setAttribute("target","_blank")
        display.innerHTML=`Click here to open...!`;
        //document.body.append(display);
        codediv.append(display);
        div.append(codediv);
    }
     else {throw codetosearch;}   
    } 
    catch (error) 
    {
        alert("HTTP Code value cannot be invalid or null. Please refer below card for the codes...!");    
    }
    let inputs=document.querySelectorAll('input');
    inputs.forEach(input => input.value='' );
    
}