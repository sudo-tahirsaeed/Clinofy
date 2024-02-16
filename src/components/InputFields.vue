<template>
  <div class="input-container">
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
      <label for="fee">Doctor Fee *</label>
      <input
        type="text"
        id="fee"
        class="small-input"
        v-model="formData.fee"
        required
        :disabled="isOldPatient"
      />
      <label for="discount">Discount *</label>
      <input
        type="text"
        id="discount"
        class="small-input"
        v-model="formData.discount"
        required
        :disabled="isOldPatient"
      />
    </div>
    <div class="input-row">
      <button class="NewButton" @click="submitForm">Submit</button>
    </div>
    <div v-if="requiredFieldsEmpty" class="error-message">
      Required fields are empty
    </div>
    <button  @click="generatePDF">BDF</button>
  </div>
</template>

<script>
// import axios from "axios";
import jsPDF from "jspdf";

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
    submitForm() {
      const requiredFields = document.querySelectorAll(
        ".input-row input[required], .input-row select[required]"
      );
      let emptyFields = false;
      let validData = true;

      requiredFields.forEach((field) => {
        if (!field.value) {
          emptyFields = true;
          field.style.borderColor = "red"; // Turn required fields border red
        } else {
          field.style.borderColor = ""; // Reset border color
          this.formData[field.id] = field.value; // Store field value in formData

          // Check if CNIC, Phone number, and Age are digits
          if (
            field.id === "cnic" ||
            field.id === "phone-no" ||
            field.id === "age" ||
            field.id === "fee" ||
            field.id === "discount"
          ) {
            if (!/^\d+$/.test(field.value)) {
              validData = false;
              field.style.borderColor = "red"; // Turn border red for invalid data
            }
          }

          // Check if CNIC is 13 digits
          if (field.id === "cnic" && field.value.length !== 13) {
            validData = false;
            field.style.borderColor = "red"; // Turn border red for invalid data
          }

          // Check if Phone number is 11 digits
          if (field.id === "phone-no" && field.value.length !== 11) {
            validData = false;
            field.style.borderColor = "red"; // Turn border red for invalid data
          }
        }
      });

      if (emptyFields) {
        this.requiredFieldsEmpty = true;
      } else if (!validData) {
        // Show error message for invalid data
        alert(
          "Invalid data. Please check CNIC, phone number, age, fee, and discount fields."
        );
      } else {
        console.log("Form Data:", this.formData);
        // Potential AJAX request to send formData to backend
        this.generatePDF(this.formData);

        // ENDPOINT
        //   axios
        // .post("/your-backend-endpoint", this.formData)
        // .then((response) => {
        //   console.log(response.data);
        // // Pass response data to generatePDF method
        // })
        // .catch((error) => {
        //   console.error(error);
        // });

        this.formData = {}; // Reset formData
        this.requiredFieldsEmpty = false;
      }
    },

    generatePDF(data) {
      const doc = new jsPDF();
      doc.text(20, 20, `Name: ${data.name}`);
      doc.text(20, 30, `CNIC: ${data.cnic}`);
      doc.text(20, 40, `Fee: ${data.fee}`);
      doc.text(20, 50, `Doctor Name: ${data.doctor}`);
      // Add more details as needed

      // Save the PDF to a Blob object
      const pdfBlob = doc.output("blob");

      // Create a URL for the Blob object
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Open the PDF in a new window for printing
      const printWindow = window.open(pdfUrl, "_blank");
      if (!printWindow) {
        alert("Popup blocked. Please allow popups for this website.");
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

/* Existing styles for other input fields */
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
