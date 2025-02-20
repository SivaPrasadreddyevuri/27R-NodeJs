// // // const http=require("http");
// // // const server=http.createServer((req,res)=>{
// // // res.write("hello world");
// // // res.end("")
// // // })
// // // server.listen("3101",()=>{
// // //     console.log("Server is running")
// // // })

// // let obj={name:"siva",city:"Hyd"}

// // const http=require("http")
// //  const server =http.createServer((req,res)=>{
// //     res.writeHead(201,"response message",{"content-type":"plain/text"})
// //     res.write(JSON.stringify(obj))
// //     res.end()
// //  })
// //  server.listen("3101",()=>{
// //     console.log("serevr running")
// //  })

// //
// // const server=http.createServer((req,res)=>{
// //     if(req.method=="GET"){
// //         if(req.url=="one"){
// //         res.write(JSON.stringify({movie:"one-nenokadine",hero:"GMB"}))
// //         res.end()
// //         }
// //     }
// //     res.end()
//     //    else{
//     //     res.end()
//     //    }

//     // }
//     // else{
//     //     res.end()
//     // }

//     // else if(req.method=="POST"){}

//     // else if(req.method=="PUT"){}

//     // else if(req.method=="DELETE"){}
// // })
// // server.listen("3101",()=>{})

//     const http=require("http");

//     const url=require("url")

//     let non_Veg={item:"Chicken",price:"2*150",GST:"8%",message:"Thank you Visit Again",Quantity:qua}

//     const server=http.createServer((req,res)=>{
//         const parsedURl=url.parse(req.url,true);
//         //  console.log(parsedURl)
//         const qua=(parsedURl.query.quantity);
//         if(req.method=="GET")
//             if(parsedURl.pathname="/names"){
//                 { res.write(JSON.stringify(non_Veg))
//                     res.end("")}
//             }
//             else{
//                 res.end()
//             }

//         else{
//             res.write("not found")
//             res.end()
//         }

//     })
//     server.listen("5000",()=>{
//         console.log("server is running")
//     })

// task
const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);

  if (req.method == "GET") {
    if (parsedUrl.pathname == "/menu") {
      res.writeHead(200, "ok", { "content-type": "application/json" });

      // res.end()
    } 
    else if (parsedUrl.pathname == "/menu/veg") {
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(
        JSON.stringify({ item1: "panner", item2: "pastha", item3: "Gobi" })
      );
      res.end();
    } 
    else if (parsedUrl.pathname == "/menu/veg/paneer") {
        
      res.writeHead(200, "ok", { "content-type": "application/json" });
      const MRP=180;
      const GST=MRP*0.18
      res.write(
        JSON.stringify({
          catgy: "veg",
          item: "paneer",
          MRP: MRP,
          GST: GST ,
          quantity: parsedUrl.query.quantity,
          price: parsedUrl.query.quantity * MRP + GST  ,
          message:"Order Placed Thank You!"
        })
      );
      res.end()
    }
    else if (parsedUrl.pathname == "/menu/veg/pastha") {
        res.writeHead(200, "ok", { "content-type": "application/json" });
        const MRP=140;
      const GST=MRP*0.18
        res.write(
          JSON.stringify({
            catgy: "veg",
            item: "pastha",
            MRP: MRP,
            GST:GST,
            quantity: parsedUrl.query.quantity,
            price: parsedUrl.query.quantity * MRP + GST,
            message:"Order Placed Thank You!"
          })
        );
        res.end()
      }
      else if (parsedUrl.pathname == "/menu/veg/Gobi") {
        res.writeHead(200, "ok", { "content-type": "application/json" });
        const MRP=120;
        const GST=MRP*0.18;
        res.write(
          JSON.stringify({
            catgy: "veg",
            item: "Gobi",
            MRP: MRP,
            GST:GST,
            quantity: parsedUrl.query.quantity,
            price: parsedUrl.query.quantity *MRP + GST,
            message:"Order Placed Thank You!"
          })
        );
        res.end()
      }
      else if (parsedUrl.pathname == "/menu/nonveg") {
        res.writeHead(200, "ok", { "content-type": "application/json" });
        res.write(
          JSON.stringify({ item1: "chicken", item2: "mutton"})
        );
        res.end();
      } 
    res.end();
  } else if (req.method == "POST") {
  } else {
    res.write("NO Data to Found");
    res.end();
  }
});
server.listen("1431", () => {
  console.log("server runing");
});
