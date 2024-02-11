<template>
  <div class="input-container">
    <div class="input-row-checkbox">
      <label for="new-patient">New Patient</label>
      <input type="checkbox" id="new-patient" v-model="isNewPatient" @change="handlePatientTypeChange"/>
    </div>
    <div class="input-row-checkbox">
      <label for="old-patient">Old Patient</label>
      <input type="checkbox" id="old-patient" v-model="isOldPatient" @change="handlePatientTypeChange"/>
    </div>
    <div class="input-row" v-if="!isOldPatient">
      <label for="full-name">Full Name *</label>
      <input type="text" id="full-name" required :disabled="isOldPatient" />
    </div>
    <div class="input-row" v-if="!isOldPatient">
      <label for="cnic">CNIC *</label>
      <input type="text" id="cnic" required :disabled="isOldPatient" />
      <label for="address">Address</label>
      <input type="text" id="address" :disabled="isOldPatient" />
    </div>
    <div class="input-row" v-if="!isOldPatient">
      <label for="gender">Gender *</label>
      <input type="text" id="gender" required :disabled="isOldPatient" />
      <label for="age">Age *</label>
      <input type="text" id="age" required :disabled="isOldPatient" />
    </div>
    <div class="input-row" v-if="!isOldPatient">
      <label for="phone-no">Phone No</label>
      <input type="text" id="phone-no" :disabled="isOldPatient" />
      <label for="blood-group">Blood Group</label>
      <select id="blood-group" :disabled="isOldPatient">
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>
    <div class="input-row" v-if="!isOldPatient">
      <label for="temperature">Temperature</label>
      <input type="text" id="temperature" :disabled="isOldPatient" />
      <label for="blood-pressure">Blood Pressure</label>
      <input type="text" id="blood-pressure" :disabled="isOldPatient" />
    </div>
    <div class="input-row" v-if="!isOldPatient">
      <label for="heart-rate">Heart Rate</label>
      <input type="text" id="heart-rate" :disabled="isOldPatient" />
      <label for="doctor">Doctor *</label>
      <select id="doctor" required :disabled="isOldPatient">
        <option value="">Select Doctor</option>
        <option value="Dr. Smith">Dr. Smith</option>
        <option value="Dr. Johnson">Dr. Johnson</option>
        <!-- Add more options as needed -->
      </select>
    </div>
    <div class="input-row-checkbox" v-if="!isOldPatient">
      <label for="dialysis">Dialysis</label>
      <input type="checkbox" id="dialysis" :disabled="isOldPatient" />
    </div>
    <div class="input-row-checkbox" v-if="!isOldPatient">
      <label for="diabetes">Diabetes</label>
      <input type="checkbox" id="diabetes" :disabled="isOldPatient" />
    </div>
    <div class="input-row">
      <button class="NewButton" @click="submitForm">Submit</button>
    </div>
    <div v-if="requiredFieldsEmpty" class="error-message">
      Required fields are empty
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      requiredFieldsEmpty: false,
      isNewPatient: false,
      isOldPatient: false,
      formData: {}, // Add formData object to store form data
    };
  },
  methods: {
    handlePatientTypeChange() {
      if (this.isOldPatient) {
        // If patient is old, clear form data
        this.formData = {};
      }
    },
    submitForm() {
      const allFields = document.querySelectorAll("input, select"); // Get all input and select fields
      let emptyFields = false;
      allFields.forEach((field) => {
        // Check if the field has an ID and is not a checkbox (checkboxes are handled differently)
        if (field.id && field.type !== 'checkbox') {
          if (!field.value) {
            emptyFields = true;
            field.style.borderColor = "red"; // Turn required fields border red
          } else {
            field.style.borderColor = ""; // Reset border color
            // Store field value in formData
            this.formData[field.id] = field.value;
          }
        } else if (field.id && field.type === 'checkbox') {
          // For checkboxes, store their state (checked or not) in formData
          this.formData[field.id] = field.checked;
        }
      });
      if (emptyFields) {
        this.requiredFieldsEmpty = true;
      } else {
        // Log formData to console
        console.log("Form Data:", this.formData);
        
        // Potential AJAX request to send formData to backend
        // Example using Axios library
        axios.post('/your-backend-endpoint', this.formData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
        
        // Reset formData
        this.formData = {};
        this.requiredFieldsEmpty = false;
      }
    },
  },
};
</script>

<style scoped>
.input-container {
  margin-left: 250px; /* Adjust according to your sidebar width */
  padding: 20px; /* Add padding for spacing */
}
.input-row {
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Align items vertically */
  margin-bottom: 15px; /* Add spacing between input rows */
}
.input-row label {
  font-weight: bold;
  margin-right: 10px; /* Add margin between label and input */
  margin-left: 15px;
  color: black; /* Set text color to black */
  width: 120px; /* Set width of labels */
}
.input-row select,
.input-row input[type="text"] {
  flex: 1; /* Make input take up remaining space */
  padding: 8px; /* Adjust padding as needed */
  box-sizing: border-box; /* Include padding in width calculation */
  width: 200px; /* Set width of inputs */
}
.input-row-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Add margin between checkbox rows */
  margin-left: 8px;
}
.input-row-checkbox label {
  font-weight: bold;
  margin-right: 10px;
  color: black;
  margin-left: 8px;
}
.input-row-checkbox input[type="checkbox"] {
  margin-right: 5px; /* Add some space between checkboxes */
}
.input-row button {
  padding: 10px 20px; /* Adjust button padding */
  background-color: #801004;
  color: white; /* Set button text color */
  border: none; /* Remove button border */
  cursor: pointer; /* Add cursor pointer on hover */
  border-radius: 15px;
  
}
.error-message {
  color: red;
  margin-top: 10px;
}

  button:hover {
    background-color: #b35c00;
  }
.input-row .button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  
}
</style>
