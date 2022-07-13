const express = require ('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const foodsList = {
    'apple': {
        'calories': 100, 
        'serving': '1 apple', 
        'carbs': 32,
        'fat': 0,
        'protein': 2,
    },
    'pizza': {
        'calories': 900, 
        'serving': '1 medium', 
        'carbs': 320,
        'fat': 100,
        'protein': 42, 
    },
    'banana': {
        'calories': 130, 
        'serving': '1 banana', 
        'carbs': 45,
        'fat': 0,
        'protein': 5
    },
    'applez':{
        'calories': 10000, 
        'serving': '3 apple', 
        'carbs': 3200,
        'fat': 0,
        'protein': 2 
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(foodsList)
})

app.get('/api/:food', (request, response) => {
    const foodItem = request.params.food.toLowerCase();
    if (foodsList[foodItem]){
       response.json((foodsList[foodItem].calories))
    }else {
        response.json(foodsList)
    }
})

app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})