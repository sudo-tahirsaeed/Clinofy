<template>
  <div class="home">
    <div class="search-container">
      <img src="@/assets/search.png" alt="Search Icon" class="search-icon" />
      <input v-model="searchQuery" placeholder="Search by Medicine Name" class="search-bar" />
    </div>
    <h1>Pharmacy</h1>

    <table class="medicine-table">
      <thead class="name-table">
        <tr>
          <th>Medicine Name</th>
          <th>Price per Packet</th>
          <th>Price per Sachet</th>
          <th>Price per Tablet</th>
          <th>Available Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="medicine-table">
        <!-- Filtered and paginated medicine list -->
        <tr v-for="(medicine, index) in filteredMedicines" :key="index">
          <td>{{ medicine.name }}</td>
          <td>{{ medicine.pricePerPacket }}</td>
          <td>{{ medicine.pricePerSachet }}</td>
          <td>{{ medicine.pricePerTablet }}</td>
          <td>{{ medicine.availableStock }}</td>
          <td>
            <img src="../assets/check.png" alt="" height="20" width="20">
            Add
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
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
        // Add more medicine entries as needed
      ],
      searchQuery: "",
      itemsPerPage: 30,
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

.name-table{
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

@media only screen and (max-width: 768px) {
  .medicine-table {
    font-size: 14px;
  }
}

</style>
