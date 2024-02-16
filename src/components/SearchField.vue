<template>
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Search patient..." class="search-input">
      <button @click="searchPatient" class="search-button">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        searchResults: [] // Added to store search results
      };
    },
    methods: {
      searchPatient() {
        console.log('Searching for patient:', this.searchQuery);
  
        // Make a request to your backend
        fetch(`http://localhost:3000/patients?searchQuery=${this.searchQuery}`)
          .then(response => response.json())
          .then(data => {
            console.log('Search results:', data);
            this.searchResults = data; // Store the search results
          })
          .catch(error => {
            console.error('Error searching for patient:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  .search-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
  }
  
  .search-input {
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .search-button {
    padding: 8px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  </style>
  