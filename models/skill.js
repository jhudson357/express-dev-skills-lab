import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  type: String,
  unit: Number,
  completed: Boolean,
})

// compile the schema into a model
const Skill = mongoose.model('Skill', skillSchema)

// export the model
export {
  Skill
}