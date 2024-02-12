<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close-modal" @click="closeModal">&times;</span>
      <h2>Add New Medicine</h2>
      <form @submit.prevent="addNewMedicine" class="medicine-form">
        <label for="medicineName">Medicine Name:</label>
        <input v-model="newMedicine.name" type="text" id="medicineName" required />

        <label for="pricePerPacket">Price per Packet:</label>
        <input v-model="newMedicine.pricePerPacket" type="number" id="pricePerPacket" required />

        <label for="pricePerSachet">Price per Sachet:</label>
        <input v-model="newMedicine.pricePerSachet" type="number" id="pricePerSachet" required />

        <label for="pricePerTablet">Price per Tablet:</label>
        <input v-model="newMedicine.pricePerTablet" type="number" id="pricePerTablet" required />

        <label for="availableStock">Available Stock:</label>
        <input v-model="newMedicine.availableStock" type="number" id="availableStock" required />

        <button type="submit">Add Medicine</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newMedicine = ref({
  name: "",
  pricePerPacket: 0,
  pricePerSachet: 0,
  pricePerTablet: 0,
  availableStock: 0,
});

const closeModal = () => {
  // You can emit an event or call a method in the parent component to close the modal
};

const addNewMedicine = () => {
  // You can emit an event or call a method in the parent component to add the new medicine
  console.log("New Medicine:", newMedicine.value);
  // Reset the form or close the modal after adding the medicine
};
</script>

<style scoped>
/* Attractive styles for the modal */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}

/* Attractive styles for the form */
.medicine-form {
  display: grid;
  gap: 10px;
}

label {
  font-size: 16px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  background-color: #2ecc71;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #27ae60;
}
</style>
