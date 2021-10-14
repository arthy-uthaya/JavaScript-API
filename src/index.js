import openingHours from "./openingHours.js";
import express from "express";
import cors from "cors";
const app = express();
const port = 4000;
 
var corsOptions = {
 origin: ["http://localhost:3000"],
 optionsSuccessStatus: 200,
};
 
app.use(cors(corsOptions));
 
app.get("/openingHours", (req, res) => {
 res.send(openingHours);
});
 
app.listen(port, () => {
 console.log(`api listening at http://localhost:${port}`);
});

//:::::::::: EXO1

//const apiData = {name: 'tom'}
const wait = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("example")
},2000)
})
wait.then((value)=>{ //then est utilisable que quand il y a une promesse
  console.log(value)
})

//:::::::::: EXO2
app.get("/openingHoursWithDelay", (req, res) => {
  const i = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(openingHours)
    }, 2000)
  })
  i.then((value)=>{ 
    res.send(value)
  })
 });


 //:::::::::: EXO3

 //openingHours  est un objet --> pointeur par let et non par const
 //openingHours = nouveau objet
 //openingHours import dans index.js



 app.get("/addHours", (req, res) => {
  const paramObject = JSON.parse(req.query.param)
  console.log(paramObject)
  res.send(openingHours);
});

const addHours = ({from, to, days}) => {
  const tableau2 =  openingHours.map(e1 => {
    const tab = {} ;
    tab[e1.days] = 
    //condition boolean --> includes
    
    });

    // console.log(e1);
  }
    
  )}
    
    //condition booléen  
    // e2= openingHours.map(openingHours.days.hours.from);
    // e3= openingHours.map(openingHours.hours.days.hours.to);

    //.map --> sur les jours existant  

addHours({ from: "8:30", to: "12:00", days: ["MONDAY", "TUESDAY"] });