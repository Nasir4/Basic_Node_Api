import {app} from './app.js'
import {dbConnection} from './utils/dbConnection.js'


dbConnection()
app.listen(process.env.PORT,()=>{
    console.log('Application Running on 4000...!')
})
