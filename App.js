const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

const apps = require('./play-data.js');

app.get('/apps', (req, res) => {
    const { genres , sort } = req.query;

    
    
    let results = apps;

    if (sort) {
        if (!['App', 'Rank'].includes(sort)) {
          return res
            .status(400)
            .send('Sort must be one of title or rank');
        }
      }

    if (genres) {
        results = apps.
            filter(app => 
                app
                    .Genres
                    .includes(genres));       
    } 
    
    if (sort) {
        results.sort((a, b) => {
            return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
          });
    }

        
    
    
    res
        .json(results);


} );



    



app.listen(8000, () => {
    console.log('Server started on PORT 8000');
});