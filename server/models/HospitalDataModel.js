const mongoose=require('mongoose')
const Patient=require('./PatientModel')

const TokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    available:{
        type:Boolean
    }
})
const DoctorSchema=new mongoose.Schema({
    doctorname:{
        type:String,
        required:true
    },
    specilization:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:false
    },
    role:{
        type:String,
        required:true
    },
    tokens:{
        type:[TokenSchema],
        required:true
    }
})

const BedsSchema=new mongoose.Schema({
    bedtype:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true
    }
})


const HospitalDataSchema = new mongoose.Schema({
    hospitalname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    helpline: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    hospitaltype: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    uploadedImage: {
        type: Buffer,
        required: false
    },
    imageContentType: {
        type: String,
        required: false
    }, 
    doctors: {
        type: [DoctorSchema],
        required: true
    },
    beds: {
        type: [BedsSchema],
        required: true
    },
    patients: {
        type: [Patient.schema],
        required: false
    }
})

const HospitalDataModel=mongoose.model('hospitaldata',HospitalDataSchema)

module.exports=HospitalDataModel