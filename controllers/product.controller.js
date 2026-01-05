const Product = require('../models/product.model.js');




const getReports = async (req, res) => {
    try {
        const reports = await Report.find({});
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// for my_reports fetch only 
const getReport = async (req, res) => {
    try {
        const { id } = req.params;
        const report = await Report.findById(id);
        
        if (!report) {
            return res.status(404).json({ message: "Report not found" });
        }

        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addReport = async (req, res) => {
    try {
        const reportData = {
            subject: req.body.subject,        
            description: req.body.description, 
            address: req.body.address,         
            imageBefore: req.body.imageBefore, 
            userId: req.body.userId,           
            status: "pending"                  
        };

        const report = await Report.create(reportData);
        res.status(201).json(report); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// const updateProduct = async (req, res)=>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!Product){
//             return res.status(400).json({message : "Product not found"})
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json({updatedProduct});
//     }catch(error){
//         res.status(500).json({message : error.message});
//     }
// }

const deleteReport = async (req, res) => {
    try {
        const { id } = req.params;
        const report = await Report.findByIdAndDelete(id);

        if (!report) {
            return res.status(404).json({ message: "Report not found" });
        }

        res.status(200).json({ message: "Report deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getReports,
    getReport,
    addReport,
    // updateProduct, 
    deleteReport
};