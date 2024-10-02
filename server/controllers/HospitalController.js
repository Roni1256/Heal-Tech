const Hospital=require('../models/HospitalDataModel');


const postData=async(req,res)=>{
    try{
        const newData=new Hospital(req.body);
        const exisitingData=await Hospital.findOne({email:newData.email})
        if(exisitingData){
            return res.status(404).json({ error: 'Already used' });
        }
        await newData.save();
        return res.status(200).json({message:"Hospital Added Successfully",id:newData._id,hospital:newData});
    }catch(err){
        return res.status(500).json({error:err});
    }
}
const setTokens=async(req,res)=>{
    try{
        const {hospitalId,doctorId,tokenId}=req.params;
        const reqAvail=req.body;
        const existance=await Hospital.findById(hospitalId);
        if(!existance)
            return res.status(404).json({message:"No Hospital Found"})
        const doctorsExistance=existance.doctors.id(doctorId);
        if(!doctorsExistance)
            return res.status(404).json({message:"Doctor not found"});
        const existingToken=await doctorsExistance.tokens.id(tokenId);
        if(!existingToken)
            return res.status(404).json({message:"Token not exist"});
        existingToken.available=reqAvail;
        await existance.save();
        res.status(200).json({message:"Status Saved successfully"})
    }catch(err){
        return res.status(500).json({error:err});
    }
}

const editData=async(req,res)=>{
    try{
        const id=req.params.id;
        const exisitingData=await Hospital.findById(id)
        if(!exisitingData){
            return res.status(404).json({ error: 'Not Exists' });
        }
        await Hospital.findByIdAndUpdate(id,req.body,{new:true});
        return res.status(200).json({message:"Hospital Updated Successfully"});
    }catch(err){
        return res.status(500).json({error:err});
    }
}

const showHospitals=async(req,res)=>{
    try{
        const hospitals=await Hospital.find();
        if(!hospitals){
            return res.status(404).json({message:"No Hospitals Found"})
        }
        return res.status(200).json(hospitals)
    }catch(err){
        return res.status(500).json({error:err});
    }
}
const showHospital=async(req,res)=>{
    try{
        const {hospitalId}=req.params
        const hospital=await Hospital.findOne({_id:hospitalId});
        if(!hospital){
            return res.status(404).json({message:"No Hospitals Found"})
        }
        return res.status(200).json(hospital)
    }catch(err){
        return res.status(500).json({error:err});
    }
}


const doctorStatus=async(req,res)=>{
    try{
            const { hospitalId, doctorId } = req.params;
            const { status } = req.body;
            const hospital = await Hospital.findById(hospitalId);
            if (!hospital) {
                return res.status(404).json({ message: "No Hospital Found" });
            }
            const doctor = hospital.doctors.id(doctorId);
            
            if (!doctor) {
                return res.status(404).json(doctor);
            }

            doctor.status = status;
            await hospital.save();
            res.status(200).json({ message: "Status Saved successfully" });
        } catch (err) {
        return res.status(500).json({error:err});
    }
}

const bedCount=async(req,res)=>{
    try{
        const {hospitalId,bedId}=req.params
        const {count}=req.body;
        const existance=await Hospital.findById(hospitalId);
        if(!existance)
            return res.status(404).json({message:"No Hospital Found"})
        const bedExistance=existance.beds.id(bedId)
        if(!bedExistance)
            return res.status(404).json({message:"No bed found"});
        bedExistance.count=count
        await existance.save();
        res.status(200).json({message:"Successfully updated"})
    }catch(err){
        return res.status(500).json({error:err});
    }
}

const deleteDoctor=async(req,res)=>{
    try {
        const {hospitalId,doctorId}=req.params;
        if(!hospitalId || !doctorId){
            return res.status(404).json({message:"NO data found"})
        }
         await Hospital.findByIdAndUpdate(
            hospitalId,
            { $pull: { doctors: { _id: doctorId } } },
            { new: true }
          );
          res.status(200).json({message:"Deleted successfully"})
    } catch (error) {
        res.status(500).json({error:error})
    }
}

const allDoctors=async(req,res)=>{
    try {
        const {hospitalId}=req.params
        const hospital=await Hospital.findById(hospitalId)
        if(!hospital)
            return res.status(404).json({message:"Hospital not found"});

        const doctors=hospital.doctors;
        res.status(200).json(doctors)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

const allBeds=async(req,res)=>{
    try {
        const {hospitalId}=req.params
        const hospital=await Hospital.findById(hospitalId)
        if(!hospital)
            return res.status(404).json({message:"Hospital not found"});
        const beds=hospital.beds;
        res.status(200).json(beds)
    } catch (error) {
        res.status(500).json({error:error})
    }
}
const getToken=async(req,res)=>{
    try{
        const {hospitalId,doctorId,tokenId}=req.params;
        const existance=await Hospital.findById(hospitalId);
        if(!existance)
            return res.status(404).json({message:"No Hospital Found"})
        const doctorsExistance=existance.doctors.id(doctorId);
        if(!doctorsExistance)
            return res.status(404).json({message:"Doctor not found"});
        const existingToken=await doctorsExistance.tokens.id(tokenId);
        if(!existingToken)
            return res.status(404).json({message:"Token not exist"});
        
        res.status(200).json(existingToken)
    }catch(err){
        return res.status(500).json({error:err});
    }
}
module.exports={
    postData,
    showHospitals,
    showHospital,
    editData,
    doctorStatus,
    deleteDoctor,
    bedCount,
    allDoctors,
    allBeds,
    setTokens,
    getToken
}