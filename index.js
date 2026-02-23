import express from "express";
import axios from "axios";
import body_Parser from "body-parser";

const app= express();
var home;
var jokesArray=[];
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/",function(req,res){
    res.render("index.ejs",{customized_joke:"",home:true});
})


app.post("/get-joke",async (req,res)=>{
 try {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/" +
        req.body.category +
        "?blacklistFlags=" + req.body.blacklist +
        "&type=" + req.body.joke_type +
        "&amount=" + req.body.amount
    );

    const result = response.data;
    console.log(result)
    if (result.jokes) {
  jokesArray = result.jokes.map(joke => 
    joke.type === "single" ? joke.joke : joke.setup + "," + joke.delivery
  );
} else {
  jokesArray.push(
    result.type === "single" ? result.joke : result.setup + "," + result.delivery
  );
}
res.render("index.ejs",{customized_joke:jokesArray,home:false});
  } catch (error) {
    console.log(error.message);
  }
})


app.listen(port, function(){
    console.log("Server running on port 3000");
})