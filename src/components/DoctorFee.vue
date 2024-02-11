<template>
    <div class="Main-Div">
      <hr /><hr /><hr />
      <div class="Title">
        <h2>Doctor Fee Form</h2>
      </div>
      <div class="Doc_Field">
        <label for="doctor">Doctor *</label>
        <select id="doctor" v-model="selectedDoctor" required>
          <option value="">Select Doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Johnson">Dr. Johnson</option>
        </select>
      </div>
      <div class="fee_fields">
        <div class="input-row">
          <label>Doctor Fee :</label>
          <input type="text" id="fee" class="small-input" v-model="doctorFee">
          <label>Discount :</label>
          <input type="text" id="discount" class="small-input" v-model="discount">
        </div>
        <div class="input-row">
          <button id="FeeSubmit" @click="submitFee">Submit Fee</button>
        </div>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search patient" v-model="searchQuery">
        <button @click="searchPatient">Search</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedpatient: "",
        doctorFee: "",
        discount: "",
        searchQuery: ""
      };
    },
    methods: {
      submitFee() {
        // Send data to backend endpoint
        const data = {
          doctor: this. selectedpatient,
          fee: this.doctorFee,
          discount: this.discount
        };
        console.log("Sending data to backend:", data);
        
        // You can send data to backend using an HTTP request here
        // Example using Axios library:
        // axios.post('/your-backend-endpoint', data)
        //   .then(response => {
        //     console.log(response.data);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      },
      searchDoctors() {
        // Send search query to backend endpoint
        console.log("Searching for Patient:", this.searchQuery);
        
        // You can send search query to backend using an HTTP request here
        // Example using Axios library:
        // axios.get(`/search- selectedpatient?query=${this.searchQuery}`)
        //   .then(response => {
        //     console.log(response.data);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      }
    }
  };
  </script>
  
  <style scoped>
  .Title {
    text-align: center;
    margin-top: 5px;
    margin-left: 100px;
    padding-left: 50px;
  }
  .Main-Div {
    color: black;
    position: relative;
  }
  .Doc_Field {
    margin-left: 250px;
    padding: 20px;
  }
  .fee_fields {
    margin-left: 250px;
    padding: 20px;
  }
  .input-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .input-row label {
    margin-right: 10px;
  }
  .small-input {
    width: 100px; /* Adjust width as needed */
    padding: 4px;
  }
  button {
    padding: 10px 20px;
    background-color: #801004;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 15px;
  }
  button:hover {
    background-color: #b35c00;
  }
  /* CSS for Doctor select field */
  .Doc_Field select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
  }
  /* CSS for search bar */
  .search-bar {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 20px;
    margin-right: 20px;
  }
  .search-bar input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
  }
  .search-bar button {
    padding: 8px 15px;
    background-color: #801004;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 8px;
  }
  .search-bar button:hover {
    background-color: #b35c00;
  }
  </style>
  