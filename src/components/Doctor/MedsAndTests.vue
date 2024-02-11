<template>
  <DialogBox :states="errorvisible" @updateDB="toogleDialog" :msg="errormsg" />

  <RemarksModal :states="proceed" @doneRemarks="sendData" />
  <div class="container">
    <div
      class="first-column"
      style="
        background-color: #000000;
        background-image: linear-gradient(19deg, #000000 0%, #850000 100%);
        border-radius: 3px;
      "
    >
      <h3>
        <img
          src="../../assets/nambg.png"
          height="22"
          style="margin-right: 10px"
        />Patient Name: TAHIR
      </h3>
      <h3>
        <img
          src="../../assets/growing-up.png"
          height="20"
          style="margin-right: 10px"
        />Patient Age: 17
      </h3>
      <h3>
        <img
          src="../../assets/notfound.png"
          height="20"
          style="margin-right: 7px"
        />Patient ID: 1558
      </h3>
    </div>
    <div class="second">
      <div
        class="column"
        id="divide"
        style="
          background-color: rgb(255, 255, 255);
          border-bottom: 1px solid rgb(99, 99, 99);
          border-right: 1px solid rgb(99, 99, 99);
        "
      >
        <div
          style="
            background-color: rgb(247, 247, 247);
            border-bottom: 1px solid rgb(99, 99, 99);
            display: flex;
            justify-content: left;
            flex-direction: column;
          "
        >
          <div
            style="
              height: 100%;
              display: flex;
              justify-content: left;
              margin-left: 5px;
            "
          >
            <div class="dropdiv">
              <div style="width: 100%; justify-self: center">
                <h3 class="heading">Add Medicines</h3>
                <hr />
              </div>
              <Dropdown
                v-model="selectedmed"
                :options="meds"
                filter
                optionLabel="name"
                placeholder="Select a Medicine"
                class="w-full md:w-14rem"
                id="dd"
                style="align-items: center"
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
              <div class="customdiv">
                <label style="color: black; font-size: 14px" for="username">
                  Custom Medicine</label
                >
                <div style="display: flex; flex-direction: row">
                  <InputText
                    id="username"
                    v-model="custommed"
                    aria-describedby="username-help"
                    style="text-wrap: wrap"
                  />
                  <div style="margin-left: 5px">
                    <button
                      @click="addMedicine(custommed, 0)"
                      class="buttonx1"
                      style="
                        background-color: #de294c;
                        border: none;
                        padding-left: 15px;
                        padding-right: 15px;
                        border-radius: 11px;
                        font-size: larger;
                        font-weight: 600;
                        color: white;
                        cursor: pointer;
                      "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="listdiv">
          <h3 class="heading">Selected Medicines</h3>
          <div v-if="!selectedMedicines">
            <h3 style="text-align: center; margin-top: 10%; color: #de294c">
              <img
                src="../../assets/notfound.png"
                height="20"
                style="margin-right: 7px"
              />No Medicine Selected
            </h3>
          </div>
          <ul v-else>
            <li v-for="medicine in selectedMedicines" :key="medicine.id">
              {{ medicine.name }}
              <div>
                <button @click="removeMedicine(medicine.id)" class="buttonx">
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
        style="
          background-color: rgb(255, 255, 255);
          border-bottom: 1px solid rgb(99, 99, 99);
        "
      >
        <div
          style="
            background-color: rgb(247, 247, 247);
            border-bottom: 1px solid rgb(99, 99, 99);
            display: flex;
            justify-content: left;
            flex-direction: column;
          "
        >
          <div
            style="
              height: 100%;
              display: flex;
              justify-content: left;
              margin-left: 5px;
            "
          >
            <div class="dropdiv">
              <div style="width: 100%; justify-self: center">
                <h3 class="heading">Lab Tests</h3>
                <hr />
              </div>
              <Dropdown
                v-model="selectedtest"
                :options="tests"
                filter
                optionLabel="name"
                placeholder="Select a Medicine"
                class="w-full md:w-14rem"
                id="dd"
                style="align-items: center"
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
              <div class="customdiv">
                <label style="color: black; font-size: 14px" for="username">
                  Custom Tests</label
                >
                <div style="display: flex; flex-direction: row">
                  <InputText
                    id="username"
                    v-model="customtest"
                    aria-describedby="username-help"
                    style="text-wrap: wrap"
                  />
                  <div style="margin-left: 5px">
                    <button
                      @click="addLabTest(customtest, 0)"
                      class="buttonx1"
                      style="
                        background-color: #de294c;
                        border: none;
                        padding-left: 15px;
                        padding-right: 15px;
                        border-radius: 11px;
                        font-size: larger;
                        font-weight: 600;
                        color: white;
                        cursor: pointer;
                      "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="listdiv">
          <h3 class="heading">Selected Tests</h3>
          <div v-if="!selectedMedicines">
            <h3 style="text-align: center; margin-top: 10%; color: #de294c">
              <img
                src="../../assets/notfound.png"
                height="20"
                style="margin-right: 7px"
              />No Tests Selected
            </h3>
          </div>
          <ul v-else>
            <li v-for="test in selectedTests" :key="test.id">
              {{ test.name }}
              <div>
                <button @click="removeLabTest(test.id)" class="buttonx">
                  <img src="../../assets/dustbin.png" height="15" />Remove
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div style="display: flex; margin-top: 1%; justify-content: center">
      <button class="button1">Go Back</button>
      <button
        @click="
          () => {
            proceed = !proceed;
          }
        "
        class="button1"
      >
        Proceed
      </button>
    </div>
    <!-- Add more columns as needed -->
  </div>
</template>

<script>
import DialogBox from "./DialogBox.vue";
import RemarksModal from "./RemarksModal.vue";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

import { ref } from "vue";
const { v4: uuidv4 } = require("uuid");

export default {
  name: "MedsAndTests",
  components: {
    DialogBox,
    InputText,
    Dropdown,
    RemarksModal,
  },
  watch: {
    selectedmed: function (newValue) {
      this.addMedicine(newValue.name, 1);
    },
    selectedtest: function (newValue) {
      this.addLabTest(newValue.name, 1);
    },
  },

  setup() {
    var errorvisible = ref(false);
    var proceed = ref(false);
    var remarks = ref("");
    const selectedmed = ref();
    const selectedtest = ref();
    const errormsg = ref("");
    const meds = ref([
      { id: 1, name: "Panadol" },
      { id: 2, name: "Ibuprofen" },
      { id: 3, name: "Paracetamol" },
      { id: 4, name: "Aspirin" },
      { id: 5, name: "Amoxicillin" },
      { id: 6, name: "Ciprofloxacin" },
      { id: 7, name: "Diazepam" },
      { id: 8, name: "Omeprazole" },
      { id: 9, name: "Prednisone" },
      { id: 10, name: "Loratadine" },
    ]);
    const tests = ref([
      { id: 1, name: "Blood Glucose" },
      { id: 2, name: "Complete Blood Count (CBC)" },
      { id: 3, name: "Urinalysis" },
      { id: 4, name: "Electrolyte Panel" },
      { id: 5, name: "Liver Function Tests (LFTs)" },
      { id: 6, name: "Kidney Function Tests (KFTs)" },
      { id: 7, name: "Thyroid Function Tests" },
      { id: 8, name: "Lipid Profile" },
      { id: 9, name: "C-reactive Protein (CRP)" },
      { id: 10, name: "Hemoglobin A1c (HbA1c)" },
    ]);

    return {
      meds,
      tests,
      selectedmed,
      selectedtest,
      errorvisible,
      errormsg,
      proceed,
      remarks,
    };
  },
  data() {
    return {
      selectedMedicine: null,
      selectedMedicines: [
        { id: 1, name: "Medicine ABS " },
        { id: 2, name: "Panadol" },
        { id: 3, name: "Dispirin" },
      ],

      custommed: null,

      selectedTest: null,
      selectedTests: [
        { id: 1, name: "AOR " },
        { id: 2, name: "CP" },
        { id: 3, name: "AIDS" },
      ],

      customtest: null,
    };
  },
  methods: {
    sendData(val) {
      this.proceed = !this.proceed;

      this.remarks = val;
    },
    toogleDialog() {
      this.errorvisible = !this.errorvisible;

      console.log(this.errorvisible);
    },
    addMedicine(val, index) {
      if (val) {
        var ok;
        if (index == 0) {
          const uuid = uuidv4();

          ok = {
            id: uuid,
            name: val,
          };
        } else if (index == 1) {
          const id = this.meds.find(
            (test) =>
              test.name.trim().toLowerCase() === val.trim().toLowerCase()
          );
          if (id) {
            ok = {
              id: id,
              name: val,
            };
          } else {
            this.errormsg =
              "Medicine Cant be added Try Adding Custom! Medicine";
            this.errorvisible = true;

            return 0;
          }
        } else {
          this.errormsg =
            "Medicine Cant be added Try Adding Custom! Medicine 12";
          this.errorvisible = true;
          return 0;
        }
        this.selectedMedicines.push(ok);
        this.custommed = null;
      }
    },
    removeMedicine(medicineToRemove) {
      this.selectedMedicines = this.selectedMedicines.filter(
        (med) => med.id !== medicineToRemove
      );
    },
    addLabTest(val, index) {
      if (val) {
        var ok;
        if (index == 0) {
          const uuid = uuidv4();

          ok = {
            id: uuid,
            name: val,
          };
        } else if (index == 1) {
          const id = this.tests.find(
            (test) =>
              test.name.trim().toLowerCase() === val.trim().toLowerCase()
          );
          if (id) {
            ok = {
              id: id,
              name: val,
            };
          } else {
            this.errormsg = "Test Cant be added Try Adding Custom! Medicine";
            this.errorvisible = true;

            return 0;
          }
        } else {
          this.errormsg = "Test Cant be added Try Adding Custom! Medicine 12";
          this.errorvisible = true;
          return 0;
        }
        this.selectedTests.push(ok);
        this.customtest = null;
      }
    },
    removeLabTest(labTestToRemove) {
      console.log(labTestToRemove);
      this.selectedTests = this.selectedTests.filter(
        (test) => test.id !== labTestToRemove
      );
    },
  },
};
</script>
<style scoped>
ul {
  color: black;
  width: 80%;
}
li {
  display: flex;
  justify-content: space-between;
  background-color: #e0e0e0;
  width: 90%;
  border: 1px solid rgb(73, 73, 73);
  border-radius: 8px;
  padding: 5px;
  margin: 4px;
  font-weight: 600;
  font-size: 14;
  text-wrap: wrap;
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
  flex-direction: column;
}
#dd {
  width: 123%;
  height: 1.9rem;
  color: rebeccapurple;
}
.second {
  display: flex;
  flex: 0 0 80%;
  overflow: hidden;
}
.container {
  display: flex;
  flex-direction: column;
  height: 85%;
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
.dropdiv {
  display: flex;
  flex-direction: column;
  width: 96%;
  justify-content: left;
  align-items: left;
  max-height: 100%;
  overflow-y: scroll;
}
.customdiv {
  margin-top: 5%;
}
.heading {
  color: rgb(0, 60, 100);
  padding: 2px;
  margin: 4px;
  letter-spacing: 3px;
  max-width: 90%;
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  font-weight: 700;
}
hr {
  width: 50%;
  margin-top: 0px;
  margin-bottom: 0.7em;
  background-color: #1566c2; /* Background color */
  border-color: #1566c2; /* Border color */
  color: #1566c2; /* Text color */
  border-width: 1px;
  border-radius: 10px;
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
.buttonx1:hover {
  --edge-light: rgb(0, 141, 63);
  text-shadow: 0px 0px 10px var(--text-light);
  box-shadow: inset 0.4px 1px 4px var(--edge-light),
    2px 4px 8px hsla(0, 0%, 0%, 0.295);
  transform: scale(1);
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
.button1 {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  margin-left: 25px;
  margin-right: 25px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(
    to right bottom,
    #04274f,
    #022247,
    #011e3f,
    #001a37,
    #00152f
  );
  transition: all 0.2s ease;
}
.button1x {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #de294c;
  transition: all 0.2s ease;
}

.button1:active {
  transform: scale(0.96);
}

.button1:before,
.button1:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button1:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.8s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button1:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>
