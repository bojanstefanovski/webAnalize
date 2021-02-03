<template>
<div class="area mt-3   w-5/6 rounded">
    <div class=" buttons grid grid-rows-4 p-6 ">
        <button :style="beetweenness ? { 'background-color': 'rgba(17, 24, 39)' } : null" class="bt p-2 hover:text-red-800 outline-none" @click="chooseTable('beetweenness')"> Betweeness </button>
        <button :style="closeness ? { 'background-color': 'rgba(17, 24, 39)' } : null" class="bt p-2  hover:text-red-800 outline-none " @click="chooseTable('closeness')"> Closseness  </button>
        <button :style="degree? { 'background-color': 'rgb(17, 24, 39)' } : null" class="bt p-2  hover:text-red-800 outline-none" @click="chooseTable('degree')"> Degree </button>
        <button :style="pagerank? { 'background-color': 'rgb(17, 24, 39)' } : null" class="bt p-2  hover:text-red-800 outline-none" @click="chooseTable('pagerank')"> PageRank </button>
    </div>   
    
        <Table  class="table" v-if="selected" :key="tableData" :tableData="tableData"> </Table>
        <div class="text-4xl choose" v-else> - Choose the different calculation - </div> 
</div>
</template>

<script>
import Table from './Table.vue'
import store from '../store'
import jsonData from '@/assets/data.json' //Ova gospod znae dali raboti


export default {
  name: 'Calcarea',
  store,
  components: {
    Table
  },
  data() {
      return{
          graph: 0,
          jsonData : jsonData,
          tableData: [],
          selected: false,
          beetweenness: false,
          closeness: false,
          degree: false,
          pagerank: false
      }

  },
  methods: {
      //Different data for different type of calculation
      chooseTable(calculation){
            let selectedSite = store.state. websiteName
          for(let i=0; i<this.jsonData.data.length; i++){
              if(this.jsonData.data[i]["name"]=== selectedSite){
               this.tableData = this.jsonData.data[i][calculation]
               this.selected = true
              }
          }
          this.darkenBackground(calculation)
        
      },
      darkenBackground(calculation) {
          console.log(calculation)
           switch (calculation) {
                case "beetweenness":
                    this.beetweenness=true
                    this.closeness=false
                    this.degree=false
                    this.pagerank = false
                    break;
                case "closeness":
                    this.beetweenness=false
                    this.closeness=true
                    this.degree=false
                    this.pagerank = false
                    break;
                case "degree":
                    this.beetweenness=false
                    this.closeness=false
                    this.degree=true
                    this.pagerank = false
                    break;
                default:
                    this.beetweenness=false
                    this.closeness=false
                    this.degree=false
                    this.pagerank = true
}
      }
      }
  }

</script>

<style scooped>
.area{
     background-color:rgb(26, 29, 36);
    margin:auto;
    display: grid;
    grid-template-columns: 1fr 4fr;
    color: #51525f;
    min-height: 300px;
    margin-bottom: 20px;
    
   
}
.buttons {
    max-height: 400px;
    border-right: 1px solid  #384859;
    border-bottom: 1px solid #384859
}
.bt:hover, .bt:focus {
  outline: none;
}   
.choose {
    position: relative;
    top: 40%;
    left: 20%
}

</style>
