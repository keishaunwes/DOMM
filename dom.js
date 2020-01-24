document.addEventListener("DOMContentLoaded", function() {
  //the counter so li++
    let itemNumber = 1;


  var colors = [
    "orange",
    "yellow",
    "purple",
    "blue",
    "grey",
    "red",
    "green",
    "black"
  ];
  
//us making the div
  let div = document.createElement("div");
  div.className = "header";
  //the header
  let h1 = document.createElement("h1");
  h1.className = "h1";
  //the text
  let h1Text = document.createTextNode("this is an h1");
  //now added that text to h1
  h1.appendChild(h1Text);
  //and added h1 now to the div
  div.appendChild(h1);
  //now adding the div to the html body
  document.body.appendChild(div);
  
//the second header and so on 
  let h2 = document.createElement("h2");
  //
  let h2Text = document.createTextNode("this is an h2");
  //
  h2.appendChild(h2Text);
  //
  div.appendChild(h2);
  //
  h2.className = "h2";
  document.body.appendChild(div);

//h3
  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode("this is an h3");
  h3.appendChild(h3Text);
  div.appendChild(h3);
  document.body.appendChild(div);
  h3.className = "h3";
//h4
  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode("this is an h4");
  h4.appendChild(h4Text);
  div.appendChild(h4);
  document.body.appendChild(div);
  h4.className = "h4";
//h5
  let h5 = document.createElement("h5");
  let h5Text = document.createTextNode("this is an h5");
  h5.appendChild(h5Text);
  div.appendChild(h5);
  document.body.appendChild(div);
  h5.className = "h5";
//h6
  let h6 = document.createElement("h6");
  let h6Text = document.createTextNode("this is an h6");
  h6.appendChild(h6Text);
  div.appendChild(h6);
  document.body.appendChild(div);
  h6.className = "h6";
//the buttom
  let button = document.createElement("button");
  let btnText = document.createTextNode("my button");
  button.appendChild(btnText);
  button.className = "buttonClass";
  document.body.appendChild(button);

  
//this has array has all the heading by their class name
  let headers = [h1, h2, h3, h4, h5, h6];
// ugh the hard part the for each 
  headers.forEach(function(element) {
    element.addEventListener("dblclick", function() {
      element.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
  });
  
  
  
  button.addEventListener("click", function() {
    //to add all the list with a dot just there it had to be in the function for button
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    div.appendChild(ul);
    ul.appendChild(li);
    li.className = "liItems";
    liText = document.createTextNode("this is an item " + itemNumber++);
    li.appendChild(liText);
    

    li.addEventListener("click", listfunction)
    
    
    function listfunction(){
    li.style.color = colors[Math.floor(Math.random() * colors.length)];
}

li.addEventListener("dblclick", function(){
    li.parentNode.removeChild(li)

})

});
       

  

    
  });








   







  


//   let button2 = document.createElement("button");
//   let btnText2 = document.createTextNode("Wanna change some colors?");
//   button2.appendChild(btnText2);
//   button2.className = "buttonClass2";
//   document.body.appendChild(button2);

  

