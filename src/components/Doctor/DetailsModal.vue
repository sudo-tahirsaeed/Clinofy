<template>
  <div class="maindiv">
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
              <input
                style="font-weight: 600; text-align: center"
                type="text"
                id="name"
                v-model="patient.name"
                required
                readonly
              />
            </div>
            <div class="field">
              <label for="patientId">Patient ID:</label>
              <input
                style="font-weight: 600; text-align: center"
                type="text"
                id="patientId"
                v-model="patient.patientId"
                readonly
              />
            </div>
            <div class="field">
              <label for="phoneNo">Phone No.:</label>
              <input
                style="font-weight: 600; text-align: center"
                type="tel"
                id="phoneNo"
                v-model="patient.phoneNo"
                readonly
              />
            </div>
            <div class="field">
              <label for="diabetes">Diabetes:</label>
              <input
                style="font-weight: 600; text-align: center"
                type="text"
                id="phoneNo"
                v-model="patient.diabetesStat"
                readonly
              />
            </div>
          </div>
          <div class="form-column">
            <div class="field">
              <label for="age">Age:</label>
              <input
                style="font-weight: 600; text-align: center"
                type="number"
                id="age"
                v-model.number="patient.age"
                min="0"
                readonly
              />
            </div>
            <div class="field">
              <label for="cnic">CNIC:</label>
              <input
                style="font-weight: 600; text-align: center"
                type="text"
                id="cnic"
                v-model="patient.cnic"
                readonly
              />
            </div>
            <div class="field">
              <label for="temperature">Temperature:</label>
              <input
                style="font-weight: 600; text-align: center"
                readonly
                type="number"
                id="temperature"
                v-model.number="patient.temperature"
              />
            </div>
            <div class="field">
              <label for="temperature">Blood Group:</label>
              <input
                style="font-weight: 600; text-align: center"
                type="text"
                id="bloodGroup"
                v-model.number="patient.bloodGroup"
                readonly
              />
            </div>
          </div>
        </div>
        <button @click="toggle" class="back">
          <span class="text">Back</span>
        </button>
        <button class="proceed">
          <span class="text">Proceed</span>
        </button>
      </section>
    </div>
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
  background-color: rgb(59, 59, 59);
  border-radius: 25px;
  padding: 20px;
  max-width: 85%;
}
.maindiv {
  margin-left: 250px;
  display: flex;
  justify-content: center;
}
@media (max-width: 600px) {
  .patient-form {
    justify-content: flex-start;
    background-color: #007bff;
    max-width: 60%;
  }
  .maindiv {
    margin-left: 15px;
    justify-content: left;
  }
  .form-columns {
    flex-direction: column;
    margin: 10px;
  }
  .section-1 {
    margin: 10px;
    display: flex;
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
label {
  margin-right: 10px;
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
  width: 20%;
  margin-left: 20%;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  justify-content: center;
  justify-self: center;

  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.back {
  background-color: #de294c;
}
.back:hover {
  background-color: #aa1634;
}
.proceed {
  background-color: #de294c;
}
.proceed:hover {
  background-color: #109632;
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
  name: "DoctorModal",
  props: {
    patientDetails: { Object, required: true },
  },
  setup() {
    return {};
  },
  data() {
    return {
      patient: {
        name: "Umair Arshad",
        temperature: "123",
        phoneNo: "123",
        cnic: "2315865656565565623",
        patientId: "123",
        age: "123",
        diabetesStat: "NO",
        bloodGroup: "A+",
      },
    };
  },
  methods: {
    kill() {
      // jani ye event bakchodi kar rha parent side
      this.$emit("kill");
    },
  },
};
</script>

<style lang="scss" scoped></style>
