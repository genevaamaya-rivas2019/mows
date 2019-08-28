// basic functionalities
var btnConnect = document.getElementById("btn-connect");
var btnDisconnect = document.getElementById("btn-disconnect");

//disconnect
btnDisconnect.addEventListener("click", function(e){
  e.preventDefault();
  let status = document.getElementById("inpStatus");
  status.value = "Disconnected!"
})

//connect
btnConnect.addEventListener("click", function(e){
  e.preventDefault();

  let status = document.getElementById("inpStatus");
  console.log("working Connect Button");
  client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt") // connect to broker
  client.subscribe("mqtt/demo") //subscribe sa topic

  client.on("connect", function(){
    console.log("Successfully connected");
    status.value = "Connected!"
  })

  client.on("message", function (topic, payload) { //triggered and display the message
    console.log([topic, payload].join(": "));
    //client.end();//equals disconnect
  })

  client.publish("mqtt/demo", "hello world!")
})

var payload1 = document.getElementById("pubPayload").value;
//publish
document.getElementById("btn-publish").addEventListener("click", function(e){
  e.preventDefault();
  client.on("message", function (topic, payload) { //triggered and display the message
    console.log([topic, payload].join(": "));
    //client.end();//equals disconnect
  })
  client.publish("mqtt/demo", payload1)
})

document.getElementById("btn-subscribe").addEventListener("click",function(e){
  e.preventDefault();
  client.on("message", function (topic, payload) { //triggered and display the message
    console.log([topic, payload].join(": "));
    //client.end();//equals disconnect
  })
  client.subscribe("mqtt/demo")
})



// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
