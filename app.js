const express = require('express'); 
const app = express();              
const PORT = 3000;                  


app.get('*', function (req, res) {    
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;

    const fullUrl = `${protocol}://${host}:${port}${url}`
    
    const responseString = `Your  URL is: ${fullUrl}`;                       
    res.send(responseString);  
})
app.listen(PORT, (error) => {       
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);