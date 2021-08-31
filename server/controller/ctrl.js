const houses = require('../db.json')
const id = 4
module.exports = {
  getAllHouses: (req, res) => {
    res.status(200).send(houses)
  },
  createHouse: (req,res)=> {
    let {address, price, imgURL} = req.body
    const newHouse = {id,address,price,imgURL}
    houses.push(newHouse)
    id++;
    res.status(200).send(houses)
  },
  deleteHouse: (req,res)=> {
    const{id} = req.params
    const index = houses.findIndex(house => {
      return house.id === +id;
    })
    if(index === -1){
      res.status(400).send('unable to find house')
    }else{
      houses.splice(index,1)
      res.status(200).send(houses)
    }
  },
  updateHouse: (req,res)=> {
    let {type} = req.body;
    let{id} = req.params;
    const index = houses.findIndex(house => {
      return house.id === +id;
    })
    if(type === 'plus'){
      houses[index].price += 10000
      console.log(houses[index].price)
      res.status(200).send(houses)
    }else if(type ==='minus' && houses[index].price>10000 ){
      houses[index].price -= 10000
      console.log('hit')
      res.status(200).send(houses)
    }else{
      res.status(400).send('something went wrong')
    }
  }
}