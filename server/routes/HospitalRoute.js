const express = require('express');
const router = express.Router();
const {  postData,editData,doctorStatus,deleteDoctor,bedCount,allDoctors,allBeds,showHospital,setTokens,getToken} = require('../controllers/HospitalController');

router.get('/hospitals/:hospitalId',showHospital);
router.post('/sendhospital',postData);
router.put('/edithospital/:id',editData);
router.get('/:hospitalId/doctors',allDoctors)
router.put('/:hospitalId/doctor/:doctorId/:tokenId',setTokens)

router.post('/:hospitalId/doctor/doctorstatus/:doctorId',doctorStatus);
router.get('/:hospitalId/beds',allBeds)
router.put('/bed/:hospitalId/bedCount/:bedId',bedCount)
router.delete('/:hospitalId/doctor/:doctorId',deleteDoctor)
router.get('/:hospitalId/:doctorId/:tokenId',getToken)

module.exports = router;
