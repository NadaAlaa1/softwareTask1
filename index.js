import express from 'express' 
import { engine } from 'express-handlebars'

import students from './database/studentsArray.js'

const task = express()
task.engine('handlebars', engine())
task.set('view engine', 'handlebars')
task.set('views', './templates')


task.get('/students', (request, response) =>{
    response.render('students', {layout: false, students: students})
})

task.listen(5050)