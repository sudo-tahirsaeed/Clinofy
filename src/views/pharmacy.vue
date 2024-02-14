<template>
  <div class="home">
    <div class="header">
      <div class="search-container">
        <img src="@/assets/search.png" alt="Search Icon" class="search-icon" />
        <input
          v-model="searchQuery"
          placeholder="Search by Medicine Name"
          class="search-bar"
        />
        <button class="floating-button" @click="openModal">+</button>
        <MedicineModal v-if="isModalOpen" @closeModal="() => closeModal()" />
      </div>
      <div class="counter">In Queue: {{ filteredMedicines.length }}</div>
    </div>
    <h1>Pharmacy</h1>
    <div class="responsive-table">
    <table class="medicine-table">
      <thead class="name-table">
        <tr>
          <th>Medicine Name</th>
          <th>Price per Packetssssss</th>
          <th>Price per Sachetss</th>
          <th>Price per Tabletss</th>
          <th>Available Stockss</th>
        </tr>
      </thead>
      <tbody class="medicine-table">
        <tr
          v-for="(medicine, index) in filteredMedicines"
          :key="index"
          @click="addToBill(medicine)"
          class="clickable-row"
        >
          <td>{{ medicine.name }}</td>
          <td>{{ medicine.pricePerPacket }}</td>
          <td>{{ medicine.pricePerSachet }}</td>
          <td>{{ medicine.pricePerTablet }}</td>
          <td>{{ medicine.availableStock }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="responsive-table">
    <div class="patient-section">
      <h2>Current Patients and Medicines</h2>
      <table class="patient-table">
        <thead>
          <tr>
            <th>Appointment Number</th>
            <th>Patient Name</th>
            <th>Patient ID</th>
            <th>Medicines</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(patient, index) in currentPatients"
            :key="index"
            @click="addToBillFromPatient(patient, index)"
            class="clickable-row"
          >
            <td>{{ patient.appointmentNumber }}</td>
            <td>{{ patient.patientName }}</td>
            <td>{{ patient.patientId }}</td>
            <td>
              <ul>
                <li v-for="(medicine, mIndex) in patient.medicines" :key="mIndex">
                  {{ medicine }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  

    <div class="bill-section">
      <h2>Your Bill</h2>
      <ul class="bill-list">
        <li v-for="(item, index) in billItems" :key="index">
          <span>{{ item.name }} - ${{ item.price.toFixed(2) }}</span>
          <button @click="removeFromBill(index)">Remove</button>
        </li>
      </ul>
      <div class="bill-summary">
        <div class="total">
          <strong>Total:</strong> ${{ calculateTotal().toFixed(2) }}
        </div>
        <button class="checkout-button" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import MedicineModal from "@/components/MedicineModal.vue";
export default {
  components: {
    MedicineModal,
  },
  name: "HomePage",
  data() {
    return {
      isModalOpen: false,
      medicines: [
        {
          name: "Medicine 1",
          pricePerPacket: 10.99,
          pricePerSachet: 5.99,
          pricePerTablet: 1.99,
          availableStock: 50,
        },
        {
          name: "Medicine 2",
          pricePerPacket: 12.99,
          pricePerSachet: 6.99,
          pricePerTablet: 2.99,
          availableStock: 30,
        },
        {
          name: "Medicine 2",
          pricePerPacket: 12.99,
          pricePerSachet: 6.99,
          pricePerTablet: 2.99,
          availableStock: 30,
        },
        {
          name: "Medicine 2",
          pricePerPacket: 12.99,
          pricePerSachet: 6.99,
          pricePerTablet: 2.99,
          availableStock: 30,
        },
      ],
      searchQuery: "",
      itemsPerPage: 30,
      billItems: [],
      currentPatients: [
        {
          appointmentNumber: 101,
          patientName: "John Doe",
          patientId: "P001",
          medicines: ["Medicine 1", "Medicine 2"],
        },
        {
          appointmentNumber: 102,
          patientName: "Jane Doe",
          patientId: "P002",
          medicines: ["Medicine 3", "Medicine 4"],
        },
      ],
    };
  },
  computed: {
    filteredMedicines() {
      // Filter medicines based on the search query
      const filtered = this.medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      // Return the first 'itemsPerPage' medicines
      return filtered.slice(0, this.itemsPerPage);
    },
  },
  methods: {
    addToBillFromPatient(patient, index) {
      // Add medicines from the patient to the bill
      patient.medicines.forEach((medicine) => {
        this.billItems.push({
          name: medicine,
          price:
            this.medicines.find((m) => m.name === medicine)?.pricePerPacket ||
            0,
        });
      });

      // Remove the patient from the currentPatients array
      this.removePatient(index);
    },

    removePatient(index) {
      // Remove the selected patient from the currentPatients array
      this.currentPatients.splice(index, 1);
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      console.log("Closing modal...");
      this.isModalOpen = false;
    },
    removeFromBill(index) {
      // Remove the selected item from the billItems array
      this.billItems.splice(index, 1);
    },
    calculateTotal() {
      // Calculate the total bill based on the prices of items in billItems
      return this.billItems.reduce((total, item) => total + item.price, 0);
    },
    addToBill(medicine) {
      // Add the selected medicine to the bill
      this.billItems.push({
        name: medicine.name,
        price: medicine.pricePerPacket, // You can customize this based on your requirements
      });
    },
    checkout() {
      // Implement checkout logic here, e.g., display a message or proceed with payment
      console.log("Checkout clicked! Bill items:", this.billItems);
    },
  },
};
</script>

<style>
.home {
  background-color: rgb(255, 255, 255);
  flex: 1;
  width: 100%;
  height: 100%;
  color: black;
  text-align: left;
  padding: 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search-container {
  position: relative;
  display: flex;
  border-radius: 20px;
  width: 30%; /* Adjust the width of the search bar */
  padding: 10px 30px 10px 10px; /* Adjust the padding to place the search icon on the right */
  margin-bottom: 20px;
  font-size: 16px;
  background-color: #ececeb;
  border: none;
  outline: none;
}
.counter {
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  width: 12%; /* Adjust the width of the search bar */
  padding: 10px 10px 10px 10px; /* Adjust the padding to place the search icon on the right */
  margin-bottom: 20px;
  font-size: 16px;
  background-color: #346cfc;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
}

.search-icon {
  position: absolute;
  right: 15px; /* Align to the far right */
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
}

.search-bar {
  font-size: 16px;
  background-color: #ececeb;
  border: none;
  outline: none;
}

.name-table {
  font-size: 16px;
  background-color: #ececeb;
  border: none;
  outline: none;
}

.medicine-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow-y: auto;
  max-height: 500px;
}

.medicine-table th,
.medicine-table td {
  /* border: 1px solid #ddd; */
  padding: 8px;
  text-align: left;
}
.medicine-table tbody tr:hover {
  background-color: #f2f2f2; /* Change background color on hover */
  cursor: pointer; /* Change cursor to pointer on hover */
  transform: scale(1.02); /* Scale the row on hover */
  transition: transform 0.2s ease-in-out; /* Add a smooth transition effect */
}
.bill-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total {
  font-size: 18px;
}

/* Style for the "Add" button in the last column on hover */
.medicine-table tbody tr:hover td:last-child {
  background-color: #2ecc71; /* Change background color on hover */
  color: #fff; /* Change text color on hover */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.clickable-row {
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.clickable-row:hover {
  background-color: #f2f2f2;
}

.bill-section {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.bill-section h2 {
  margin-bottom: 10px;
}

.bill-list {
  list-style-type: none;
  padding: 0;
}

.bill-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
}

.bill-list li button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.checkout-button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.checkout-button:hover {
  background-color: #27ae60;
}

.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px; /* Set the width and height to the same value */
  height: 50px; /* Set the width and height to the same value */
  padding: 15px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal h2 {
  margin-top: 20px;
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}

.patient-section {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.patient-section h2 {
  margin-bottom: 10px;
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow-y: auto;
  max-height: 300px; /* Adjust the max height as needed */
}

.patient-table th,
.patient-table td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

.patient-table ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.patient-table li {
  margin-bottom: 5px;
}

.patient-table tbody tr:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow on hover */
  transition: box-shadow 0.3s ease-in-out; /* Add a smooth transition effect */
}

.clickable-row:hover {
  background-color: #f2f2f2; /* Change background color on hover */
  cursor: pointer; /* Change cursor to pointer on hover */
  /* transform: scale(1.02); Scale the row on hover */
  transition: transform 0.2s ease-in-out; /* Add a smooth transition effect */
}

@media only screen and (max-width: 768px) {
  .search-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .counter {
    width: 100%;
    margin-bottom: 20px;
  }

  .floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 15px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .medicine-table {
    font-size: 14px;
  }
 
  .header {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap; /* Allow items to wrap onto the next line */
  justify-content: center;
  align-items: center;
}

.search-container {
  flex: 1; /* Take up remaining space */
  margin-bottom: 10px;
}

.search-bar {
  width: 100%; /* Take up full width */
}

.button-container {
  margin-top: 10px;
}

.counter {
  width: 100%; /* Take up full width */
  text-align: center;
}


}
</style>
