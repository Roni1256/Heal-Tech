const express =require('express')
const router=express.Router();
const {getPatientInfo,sendPatientDetails,AllPatients}=require('../controllers/UserController')
const {showHospitals, showHospital}=require('../controllers/HospitalController')



router.get('/hospitals',showHospitals);
router.get('/hospitals/:hospitalId',showHospital);
router.get('/patients',AllPatients);
router.get('/patients/:id',getPatientInfo)
router.post('/patientdetails/:hospitalId',sendPatientDetails);

module.exports=router;