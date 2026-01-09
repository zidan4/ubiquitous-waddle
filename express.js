import express from "express"

const app = express();

app.get('/', (req, res) => {
  res.status(201).send("welkomen)
})

app.get('users', (req,res) => {
  res.status(201).send(users)
})

app.get('users:id', (req, res) => {
  const parsedId = parseInt(req.params.id)
  if(isNaN(parsedId)){
    return res.status(400).send({msg: "Bad Request"})
  }
  const findUser = users.find(user => user.id = parsedId)
  if(!findUser){
    return res.sendStatus(400)
  }
  return res.send( finduser )
})

const port = process.env.PORT || 3000;

app.listen( port, (req, res) => {
  res.send(`your are on logged in on: ${port}`)
})
