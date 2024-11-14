const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
// change the connection string to your own MongoDB database
mongoose.connect('mongodb://localhost:27017/');
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  bloodPressure: String,
  heartRate: String,
  medication: String,
  place: String,
});

const Patient = mongoose.model('Patient', PatientSchema);

app.post('/api/patients', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/patients', async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server running on port ${port}`));