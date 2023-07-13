const express = require('express');
const app = express();
app.use(express.json()); //Parse JSON body 
var dao = require("./mongo-dao");

const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);

app.get("/orders", function(req, res) {
    dao.findAllOrders(function(data){
        res.send(data)
    })
});

app.get("/orders/:id", (req, res) => {
    dao.findOrder( req.params.id,
        (order) => {
            if (!order) {
                res.status(404).end();
            } else {
                res.send(order);
            }
        })
});

// add a single book
app.post("/orders", (req, res) => {
    console.log(req.body);
    dao.addOrder( req.body,
        (order) => {
            if (!order) {
                res.status(500).end();
            } else {
                res.send(order);
            }
        }
    )
});