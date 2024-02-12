<template>
  <div class="topdiv">
    <h1
      style="
        text-align: center;
        margin-bottom: 3%;
        color: #000000;
        background-color: yellow;
        padding: 10px;
        border-radius: 15px;
        border: 1px solid gray;
      "
    >
      Patient History
    </h1>
    <div style="border: 1px solid gray; padding: 10px">
      <div class="card">
        <DataTable
          v-model:selection="selectedProduct"
          :value="values"
          selectionMode="single"
          :metaKeySelection="metaKey"
          dataKey="id"
          tableStyle="min-width: 50rem"
        >
          <Column style="padding: 12px" field="code" header="Date"></Column>
          <Column field="name" header="Patient Name"></Column>
          <Column field="category" header="CNIC"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>
<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
</script>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      DataTable,
      Column,
      ColumnGroup,
      Row,
    };
  },
  data() {
    const values = ref([
      {
        id: "1000",
        code: "12-02-2023",
        name: "Bamboo Watched",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "13101445952225",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1001",
        code: "12-01-2023",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "13101445952225",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
    ]);
    const selectedProduct = ref("");
    return {
      selectedProduct,
      values,
    };
  },
  watch: {
    selectedProduct: function (newVal) {
      // watch it
      console.log("HERE " + JSON.stringify(newVal));
    },
  },
});
</script>

<style lang="css" scoped>
.topdiv {
  display: flex;
  margin-top: 5%;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: scroll;
}
</style>
