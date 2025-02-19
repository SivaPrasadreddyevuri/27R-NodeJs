// // const http=require("http");
// // const server=http.createServer((req,res)=>{
// // res.write("hello world");
// // res.end("")
// // })
// // server.listen("3101",()=>{
// //     console.log("Server is running")
// // })





// let obj={name:"siva",city:"Hyd"}


const http=require("http")
//  const server =http.createServer((req,res)=>{
//     res.writeHead(201,"response message",{"content-type":"plain/text"})
//     res.write(JSON.stringify(obj))
//     res.end()
//  })
//  server.listen("3101",()=>{
//     console.log("serevr running")
//  })



// 
const server=http.createServer((req,res)=>{
    if(req.method=="GET"){
        if(req.url=="one"){
        res.write(JSON.stringify({movie:"one-nenokadine",hero:"GMB"}))
        res.end()
        }
    }
    res.end()
    //    else{
    //     res.end()
    //    } 
       
    // }
    // else{
    //     res.end()
    // }

    // else if(req.method=="POST"){}

    // else if(req.method=="PUT"){}

    // else if(req.method=="DELETE"){}
})
server.listen("3101",()=>{})