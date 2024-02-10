<template>
  <div class="container">
    <div
      class="first-column"
      style="background-color: red; border: 1px solid black"
    >
      <h3>Patient Name: TAHIR</h3>
      <h3>Patient Age: 17</h3>
      <h3>Patient ID: 1558</h3>
    </div>
    <div class="second">
      <div
        class="column"
        id="divide"
        style="background-color: rgb(255, 255, 255); border: 1px solid black"
      >
        <div
          style="
            background-color: rgb(247, 247, 247);
            border: 1px solid rgb(243, 31, 31);
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          "
        >
          <div style="width: 100%; justify-self: center">
            <h3 class="heading">Medicines</h3>
          </div>
          <div>
            <div class="card flex justify-content-center">
              <Dropdown
                v-model="selectedCountry"
                :options="countries"
                filter
                optionLabel="name"
                placeholder="Select a Medicine"
                class="w-full md:w-14rem"
                id="dd"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex align-items-center">
                    <div>{{ slotProps.value.name }}</div>
                  </div>
                  <span v-else>
                    {{ slotProps.placeholder }}
                  </span>
                </template>
                <template #option="slotProps">
                  <div class="flex align-items-center">
                    <div>{{ slotProps.option.name }}</div>
                  </div>
                </template>
              </Dropdown>
            </div>
          </div>
        </div>
        <div class="listdiv">
          <ul>
            <li v-for="medicine in selectedMedicines" :key="medicine.id">
              {{ medicine.name }}
              <div>
                <button @click="removeMedicine" class="buttonx">
                  <img src="../../assets/dustbin.png" height="15" />Remove
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="column"
        id="divide"
        style="background-color: rgb(247, 247, 247); border: 1px solid black"
      >
        <div
          style="background-color: rgb(255, 255, 255); border: 1px solid black"
        >
          <h3 class="heading">Lab Tests</h3>
          <select v-model="selectedLabTest" @change="addLabTest">
            <option value="">Select Lab Test</option>
            <option
              v-for="labTest in labTests"
              :key="labTest.id"
              :value="labTest"
            >
              {{ labTest.name }}
            </option>
          </select>
        </div>
        <div>
          <ul style="color: black">
            <li v-for="labTest in selectedLabTests" :key="labTest.id">
              {{ labTest.name }}
              <button @click="removeLabTest(labTest)">Remove</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Add more columns as needed -->
  </div>
</template>
<script setup>
import Dropdown from "primevue/dropdown";

import "primevue/resources/themes/lara-light-green/theme.css";
import { ref, watch, getCurrentInstance } from "vue";
const { ctx } = getCurrentInstance();

const selectedCountry = ref();
const countries = ref([
  { name: "Australia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Egypt", code: "EG" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spain", code: "ES" },
  { name: "United States", code: "US" },
]);
watch(selectedCountry, (newValue, oldValue) => {
  ctx.addMedicine(newValue.name);
});
</script>
<script>
export default {
  name: "MedsAndTests",

  data() {
    return {
      medicines: [
        { id: 1, name: "Medicine A" },
        { id: 2, name: "Panadol" },
        { id: 3, name: "Dispirin" },
      ],
      labTests: [
        { id: 1, name: "Test A" },
        { id: 2, name: "Test B" },
        { id: 3, name: "Test C" },
      ],
      selectedMedicine: null,
      selectedMedicines: [
        { id: 1, name: "Medicine A" },
        { id: 2, name: "Panadol" },
        { id: 3, name: "Dispirin" },
      ],
      selectedLabTest: null,
      selectedLabTests: [],
    };
  },
  methods: {
    addMedicine(val) {
      if (val) {
        var ok = {
          id: "1231",
          name: val,
        };
        this.selectedMedicines.push(ok);
      }
    },
    removeMedicine(medicineToRemove) {
      this.selectedMedicines.splice(
        this.selectedMedicines.indexOf(medicineToRemove),
        1
      );
    },
    addLabTest() {
      if (this.selectedLabTest) {
        this.selectedLabTests.push(this.selectedLabTest);
        this.selectedLabTest = null; // Clear selection after adding
      }
    },
    removeLabTest(labTestToRemove) {
      this.selectedLabTests.splice(
        this.selectedLabTests.indexOf(labTestToRemove),
        1
      );
    },
  },
};
</script>

<style scoped>
ul {
  color: black;
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
  background-color: #b8b8b8;
  width: 100%;

  border-radius: 8px;
  padding: 5px;
  margin: 4px;
  font-weight: 600;
  font-size: 14;
}
button {
  margin-right: 10px;
}
.listdiv {
  display: flex;
  justify-content: left;
  margin-left: 5%;
  margin-top: 2%;
  overflow-y: scroll;
}
#dd {
  width: 123%;
  height: 1.9rem;
  color: rebeccapurple;
}
.second {
  display: flex;
  flex: 0 0 80%;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.column {
  flex: 1;
}
#divide {
  display: grid;
  grid-template-rows: 35% 65%;
}

.first-column {
  display: flex;
  flex: 0 0 10%;
  justify-content: space-around;
  align-items: center;
}
.heading {
  color: rgb(255, 255, 255);
  padding: 5px;
  margin: 10px;
  max-width: 30%;
  text-align: center;
  border-radius: 8px;
  background-color: #de294c;
  font-weight: 400;
}
.buttonx {
  --bezier: cubic-bezier(0.22, 0.61, 0.36, 1);
  --edge-light: hsla(0, 0%, 50%, 0.8);
  --text-light: rgba(255, 255, 255, 0.4);
  --back-color: 240, 40%;

  cursor: pointer;
  padding: 0.7em 1em;
  border-radius: 0.5em;
  min-height: 1.4em;
  min-width: 2em;
  display: flex;
  align-items: center;
  gap: 0.5em;

  font-size: 10px;
  letter-spacing: 0.05em;
  line-height: 1;
  font-weight: bold;

  background-color: #de294c;

  color: hsla(0, 0%, 90%);
  border: 0;
  box-shadow: inset 0.4px 1px 4px var(--edge-light);

  transition: all 0.1s var(--bezier);
}

.buttonx:hover {
  --edge-light: hsla(0, 0%, 50%, 1);
  text-shadow: 0px 0px 10px var(--text-light);
  box-shadow: inset 0.4px 1px 4px var(--edge-light),
    2px 4px 8px hsla(0, 0%, 0%, 0.295);
  transform: scale(1.1);
}

.buttonx:active {
  --text-light: rgba(255, 255, 255, 1);

  background: linear-gradient(
    140deg,
    hsla(var(--back-color), 50%, 1) min(2em, 20%),
    hsla(var(--back-color), 50%, 0.6) min(8em, 100%)
  );
  box-shadow: inset 0.4px 1px 8px var(--edge-light),
    0px 0px 8px hsla(var(--back-color), 50%, 0.6);
  text-shadow: 0px 0px 20px var(--text-light);
  color: hsla(0, 0%, 100%, 1);
  letter-spacing: 0.1em;
  transform: scale(1);
}
</style>
