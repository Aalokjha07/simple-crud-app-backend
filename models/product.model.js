const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema(
    {
        subject: { type: String, required: true }, // Subject Title
        description: { type: String, required: true }, // Description
        address: { type: String, required: true }, // Location
        imageBefore: { type: String, required: false }, // Visual Evidence URL
        status: { 
            type: String, 
            default: 'pending', // Initial status for Admin Phase
            enum: ['pending', 'assigned', 'processed', 'fixed'] 
        },
        userId: { type: String, required: true }, // To show in User's MyReports
        assignedTo: { type: String, default: null }, // Staff ID for Admin Assignment
    },
    { timestamps: true } // Automatically adds createdAt/updatedAt
);

const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;