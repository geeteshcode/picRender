import React from "react";
 import ReactDOM from "react-dom";

 function App() {
   try{return (

     <img width="100"
      src=" https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg"
      alt="new"
      />
   );}
catch(e){
try {
   return (

     <img width="200"
      src=" https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg"
      alt="new"
      />
   );
} catch (err) {
  try {
   return (

     <img width="400"
      src=" https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg"
      alt="new"
      />
   );
} catch (err) {
 
   return (

     <img
      src=" https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg"
      alt="new"
      />
   );
}
}
}
}

 const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement);