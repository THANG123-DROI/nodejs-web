import express from 'express';

const router =express.Router();
router.get('/products',(req,res)=>{
    console.log('Product list');
    res.json({
        hello:"NguyenDucThang"
        
    })
})
module.exports=router;