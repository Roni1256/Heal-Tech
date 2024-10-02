const mongoose=require('mongoose')

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },
  email:{
    type: String,
    required: true
  },
  sickness: {
    type: String,
    required: true
  },
  bookingtime: {
    type: Date,
    default: Date.now
  },
  bed:{
    type:Boolean,
    require:true
  },
  bedtype:{
    type:String,
  },
  doctor:{
    type:String,
    required:true
  },
  location:{
        type: String,
        required: true
  },
  date:{
    type: String,
    required: true
    
  },
  visitingtime:{
    type:String,
    required:true
  },
  token:{
    type:String,
    required:true
  }
});

const Patient = mongoose.model('patient', PatientSchema);

module.exports = Patient;
