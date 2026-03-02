/* var http = require('http')
http 
.createServer(function(req,res){
    res.writeHead(200,{'content-Type':"text/plain"});
res.end('Hello World\n');
}
)
.listen(80);
console.log('Adresse de serveur : http://localhost:80/') */
const express= require ('express')
const app =express()
const port= 3001
const cors=require("cors")
app.use(cors())
app.use("/upload",express.static("storage"))//pour rendre l'image publique
app.use(express.json())
const mongoose=require ('mongoose')
mongoose.connect ("mongodb://localhost:27017/ecommerce")
.then(()=> console.log("Connection á mongoDB reussie"))
.catch(()=> console.log("Error de connection mongoDB"))
//Route express
const productroute=require("./Routes/ProductRoute")
app.use("/product",productroute)
const categoryroute=require("./Routes/categoryroute")
app.use("/category",categoryroute)
const userroute=require("./Routes/Userroute")
app.use("/user",userroute)
const dotenv=require('dotenv')
dotenv.config()
const cartroute=require("./Routes/cartroute")
app.use("/cart",cartroute)
const orderroute=require("./Routes/orderroute")
app.use("/order",orderroute)

app.listen(port) 
console.log(`The server is running,'+'please open at http://localhost:${port} `)
