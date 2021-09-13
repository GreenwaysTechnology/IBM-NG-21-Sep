let firstName = "Subramanian";
let lastName = 'Murugan'
//string concatnation :  + ,
console.log("Name " + firstName  + " " + lastName);
console.log("Name " , firstName  , " " , lastName);
//string interplolation ; for string concentation.
//Template literals and string interpolation
console.log(`Name ${firstName} ${lastName}`);

//string interpolation in multi line strings
let title = 'IBM'
let htmlPage =`
    <html>
      <head>
       <title>
          ${title}
       </title>
     </head>
     <body>
      <h1>Welcome</h1>
     </body>
     </html>
`;
console.log(htmlPage);