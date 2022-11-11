//let codesinDb=[100,101,102,103,201,202,203,204,205,206,207,208,218,226,300,301,302,303,304,305,306,307,308,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,428,429,430,431,450,451,460,463,464,466,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,520,521,522,523,524,525,526,527,528,529,530,561,598,599,999];

//creating a div element
let div=document.createElement("div");
div.setAttribute("class","form");

//Creation of Input text box to get the data from the user
let code=document.createElement('input');
code.setAttribute("type","text");
code.setAttribute("class","form-control");
code.setAttribute("id","searchcode")
code.setAttribute("placeholder","Enter three digit HTTP response code number");

//Search button for performing Search operation includes onclick function call to fetch data from API
let button=document.createElement("button");
button.setAttribute("class","btn btn-info");
button.setAttribute("id","searchbutton");
button.innerHTML="Search";
button.addEventListener("click",search);

//creation of Card and Display of HTTP response codes available in DOG Api Database
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

// Linked list created for display of availabile Codes in API
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

//appending list
unorderedlist.append(li1,li2,li3,li4,li5,li6);
//appending elements(title,text & List) inside the body of the card(div3)
div3.append(head,para,unorderedlist);

//appending body of the card to card(div2)
div2.append(div3);

//Appending textinput, button and card to main div element(form)
div.append(code,button,div2);

//appending the entire dom to HTML body
document.body.append(div);

//Onclicking submit button function definition
function search()
{
    let codetosearch=document.getElementById('searchcode').value;   //getting the input enterted inside the text box.
    try
    {
    if( codetosearch >= 100 && codetosearch <600 )
    {
        //Creation of div element for display purpose and redirection link to new page as per the code which user entered.
        let codediv=document.createElement("div");
        codediv.setAttribute("class","codeentered");
        codediv.innerHTML=`HTTP Code which you have entered is : ${codetosearch}`;
        let display=document.createElement("a");
        display.setAttribute("href",`https://http.dog/${codetosearch}.jpg`);
        display.setAttribute("target","_blank")
        display.innerHTML=`Click here to open...!`;
        codediv.append(display);
        //appending it to main div element(.form)
        div.append(codediv);
    }
    else {throw codetosearch;}   
    }
    //Catch is used to display invalid or blank HTTP code entered 
    catch (error) 
    {
        alert("HTTP Code value cannot be invalid or null. Please refer below card for the codes...!");    
    }

    //Resetting the input once Search button is clicked
    let inputs=document.querySelectorAll('input');
    inputs.forEach(input => input.value='' );
}