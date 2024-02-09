<template>
  <div class="patient-form">
    <img
      src="../../assets/patients.png"
      height="100"
      style="margin-bottom: 15px"
    />
    <section class="section-1">
      <h2>Patient Details</h2>
      <div class="form-columns">
        <div class="form-column">
          <div class="field">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="patient.name" required />
          </div>
          <div class="field">
            <label for="patientId">Patient ID:</label>
            <input
              type="text"
              id="patientId"
              v-model="patient.patientId"
              required
            />
          </div>
          <div class="field">
            <label for="phoneNo">Phone No.:</label>
            <input type="tel" id="phoneNo" v-model="patient.phoneNo" required />
          </div>
          <div class="field">
            <label for="diabetes">Diabetes:</label>
            <select id="diabetes" v-model="patient.diabetes">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div class="form-column">
          <div class="field">
            <label for="age">Age:</label>
            <input
              type="number"
              id="age"
              v-model.number="patient.age"
              min="0"
              required
            />
          </div>
          <div class="field">
            <label for="cnic">CNIC:</label>
            <input type="text" id="cnic" v-model="patient.cnic" required />
          </div>
          <div class="field">
            <label for="temperature">Temperature:</label>
            <input
              type="number"
              id="temperature"
              v-model.number="patient.temperature"
            />
          </div>
          <div class="field">
            <label for="temperature">Blood Group:</label>
            <input
              type="text"
              id="bloodGroup"
              v-model.number="patient.temperature"
            />
          </div>
        </div>
        <button>
          <span class="text">Button</span>
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.patient-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: rgb(151, 151, 150);
  border-radius: 25px;
  padding: 15px;
}
@media (max-width: 690px) {
  .form-columns {
    flex-direction: column;
    margin: 10px;
  }
  .section-1 {
    margin: 10px;
  }
  .patient-form {
    margin-left: 10px;
    margin-right: 40px;
  }
}

.section-1 {
  max-width: 800px;

  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-columns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Wrap columns on smaller screens */
}

.form-column {
  width: 100%; /* Full width on small screens */
  max-width: 45%; /* Limit column width on larger screens */
  margin-bottom: 20px; /* Add space between columns */
}

.field {
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center; /* Vertically center label and input */
}

label {
  width: 200px; /* Fixed width for labels */
  font-weight: bold;
}

input,
select {
  flex: 1; /* Take up remaining space */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Media queries for responsiveness */
@media (min-width: 768px) {
  .form-column {
    max-width: 48%; /* Adjust column width for larger screens */
  }
}

@media (min-width: 992px) {
  .form-column {
    max-width: 45%; /* Adjust column width for even larger screens */
  }
}
</style>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      patient: {
        name: "tahir",

        temperature: "123",
        phoneNo: "123",
        cnic: "23123",
        patientId: "123",
        age: "123",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
