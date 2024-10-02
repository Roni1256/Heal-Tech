
const Patient = require('../models/PatientModel')
const Hospital=require('../models/HospitalDataModel')
const axios=require('axios')


const getPatientInfo = async (req, res) => {

    
    try {
        const id = req.params.id;
        const patient = await Patient.findById(id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        
        res.status(201).json(patient);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const sendPatientDetails=async(req,res)=>{
    try {
        const {hospitalId}=req.params;

        const findHospital=await Hospital.findById(hospitalId)
        if(!findHospital)
            return res.status(404).json({message:"NO Hospital Exists"})
        
                const patient = new Patient(req.body);
                const body=req.body;
                if (body.bed) {
                    const bedtype=body.bedtype;
                    findHospital.beds.forEach((bed)=>{
                        if(bedtype===bed.bedtype)
                        {
                            bed.count-=1;
                        }
                    })
                }

                await patient.save();
                findHospital.patients.push(patient);
                await findHospital.save();
                return res.status(200).json({message:"Saved Successfully",id:patient._id,patient:patient});
    } catch (err) {
       return  res.status(500).json({ message: err.message });
    }
}
const AllPatients=async(req,res)=>{
    try {
        const allPatients=await Patient.find();
        if(!allPatients)
            return res.status(404).json({message:"No patients"})
        res.status(200).json(allPatients);

    } catch (error) {
        res.status(500).json({error:error})
    }
}
module.exports = {
    getPatientInfo,
    sendPatientDetails,
    AllPatients
};



