<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close-modal" @click="closeModal">&times;</span>
        <h2>Add New Medicine</h2>
        <form @submit.prevent="addNewTest" class="test-form">
          <label for="testName">Test Name:</label>
          <input v-model="newTest.name" type="text" id="testName" required />
  
          <label for="test_ID">Test ID:</label>
          <input v-model="newTest.id" type="text" id="test_ID" required />
  
          <label for="price">Price:</label>
          <input v-model="newTest.price" type="number" id="price" required />
  
          <label for="exp_result">Expected result time:</label>
          <input placeholder="2 Days" v-model="newTest.result" type="number" id="exp_result" required />
  
          <!-- <label for="pricePerTablet">Price per Tablet:</label>
          <input v-model="newTest.pricePerTablet" type="number" id="pricePerTablet" required />
  
          <label for="availableStock">Available Stock:</label>
          <input v-model="newTest.availableStock" type="number" id="availableStock" required /> -->
  
          <button type="submit">Add Test</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const newTest = ref({
    id:"",
    name: "",
    result:"",
    price: 0,
  });
  
  const closeModal = () => {
    // You can emit an event or call a method in the parent component to close the modal
  };
  
  const addNewTest = () => {
    // You can emit an event or call a method in the parent component to add the new medicine
    console.log("New Medicine:", newTest.value);
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
  .test-form {
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
  