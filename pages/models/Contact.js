import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  designation: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  budget_range: { type: String, required: true },
  services: { type: String, required: true },
  project_details: { type: String },
  privacy_accepted: { type: Boolean, required: true }
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
