const express = require('express')
var cors = require('cors')
const app = express();
const port = 80;
app.use(express.json());
app.use(cors())

app.get("/getlist", (req, res) => {
    res.send({sensor_suhu:[{suhu: 35, waktu:16.45}, {suhu: 23, waktu:17.30}, {suhu: 20, waktu:18.15}]})
});
app.post("/sensorpost", (req, res) => {
    res.send(
        "suhu yang diterima adalah " +
        req.body.suhu + "\n" +
        "kelembapan yang diterima adalah " +
        req.body.kelembapan
    )
});
app.get("/sensor2", (req, res) => {
    res.send("sensor2")
});
app.get("/sensor3", (req, res) => {
    res.send({ sensor3: 100 })
})
app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});