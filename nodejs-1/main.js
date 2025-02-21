// console.log("hello world")
// require("./module1")
// const obj=require("./module2")
// console.log(obj.key())


// const {cal}=require("./module3")
//   let a=5
//   let b=6
//   console.log(cal(a,b))

 

// posting data through API:
const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
  const data={name:"siva"}
 if(req.method=="POST")
 {
  let body="";
  req.on("data",(chunk)=>{
    body+=chunk.toString()
  console.log(body)
  res.end()
  })
  req.on("error",()=>{
    console.log("error")
    res.end()
  })
  req.on("end",()=>{
    console.log("data received")
  })
  res.end()
 }
 else{
  res.end()
 }
})
server.listen("1431",()=>{
  console.log("server running")
})

// const http=require("http")
// const fs=require("fs")
// const server=http.createServer((req,res)=>{
// //  if (req.method=="GET")
// // {
// // fs.readFile("./sample.txt",(err,data)=>{
// //   if(err){
// //     console.log(err)
// //     res.write(err)
// //     res.end()
// //   }
// //   else{
// //     // res.write(data)
// //     console.log(data)
// //     res.end()
// //   }
// // })
// //  }
// //  res.end()
// // })
// // server.listen("1431",()=>{})


  

// if(req.method=="POST"){

//   // for adding data to the file by this process existing data will be replaced by new:

//   //  let data="ndbmndvmnv"
//   //  fs.writeFile("./info.txt",data,(err)=>{
//   //    if(err){
//   //     res.write(err)
//   //     res.end()
//   //    }
//   //    else{
//   //     res.write(data)
//   //     console.log(data)
//   //     res.end()
//   //    }
//   //  })

//   // for adding data to the file by this process adding new data to existing data:
// let data="Siva ,vwvdmnvmb"
// fs.appendFile("./info.txt",data,(err)=>{
//   if(err){
//     res.write(err)
//     res.end()
//   }
//   else
//   {
//     res.write("data received")
//     res.end(
//       console.log(data)
//     )
//   }
// })


// }





// })
// server.listen("1432",()=>{

// })




