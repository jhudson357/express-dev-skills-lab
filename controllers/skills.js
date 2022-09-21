//// import the Skill data
//// import { skills } from '../data/skill-data.js'

// import the Skill model file
import { Skill } from '../models/skill.js'

function index (req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => {
    console.log('error')
    res.redirect('/')
  })
}

export {
  index
}