const express = require('express')
const app = express();


const boyNames = ['Liam', 'Noah', 'James', 'Lucas', 'Benjamin']
const girlNames = ['Emma', 'Olivia', 'Sophia', 'Isabella', 'Mia']

app.use(express.json);


app.get('/boy', (request, response) => {
     const randomName = boyNames[Math.floor(Math.random() * boyNames.length)];
     res.status(200).json({name:randomName});
});

app.get('/girl', (request, response) => {
    const randomName = girlNames[Math.floor(Math.random() * girlNames.length)];
    res.status(200).json({name:randomName});
});

app.get('/generate', (request, response) => {
     const allNames = [...boyNames, ...girlNames];
     const randomName = allNames[Math.floor(Math.random() * allNames.length)]
     res.status(200).json({name:randomName})
})



 app.listen(8000, () => {
    console.log(`Server is Listening on 8000`)
})