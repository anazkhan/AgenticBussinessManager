const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email address'
    }
  },
  partySize: { 
    type: Number, 
    required: [true, 'Party size is required'],
    min: [1, 'Party size must be at least 1'] 
  },
  date: { 
    type: Date, 
    required: [true, 'Date is required'],
    validate: {
      validator: function(v) {
        return !isNaN(Date.parse(v));
      },
      message: 'Please enter a valid date'
    }
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
    validate: {
      validator: function(v) {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
      },
      message: 'Please enter a valid time in HH:MM format (24-hour)' 
    }
  },
  specialRequests: { type: String }
});

reservationSchema.statics.bookReservation = function(data) {
  return this.create(data);
};

module.exports = mongoose.model('Reservation', reservationSchema);