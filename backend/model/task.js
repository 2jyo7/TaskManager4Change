const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
     status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Done'],
        default: 'To Do'  // optional: set a default value
    }
}, { timestamps: true });


const Task = mongoose.models.task || mongoose.model('Task', taskSchema);

module.exports = Task;