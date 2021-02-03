<template>

<div :key="depth" class="flex flex-col table">
            <div class="grid grid-cols-2 ">
            <button :style="index==0 ? null: { 'background-color': ' #212832' }"  class="bt outline-none" @click="changeDepth('depth2', 0)">P2</button>
            <button :style="index==1 ? null: { 'background-color': ' #212832' }"  class="bt outline-none" @click="changeDepth('depth3', 1)"> P3 </button>
            </div>
        
           
            <div class="p-2 " v-for="s in tableData[index][depth]" :key="s">
                
                <div class="border-b p-2 " v-for="(score, name) in s" :key="name">
                    
                    <div class="text-sm hover:text-red-800 "> <a :href="name"> {{name}} </a> </div>
                    <span class="text-xs p-0. 5 rounded bg-red-800 text-white"> {{convertScore(score)}} </span>
                
                </div>
            </div>
           
        
    
   
</div>
</template>

<script>


export default {
  name: 'Table',
  props: ['tableData'],
  data(){
      return{
          depth: "depth2",
          index: 0

      }
  },
  methods: {
      convertScore(score){
          console.log("vleze tuka")
          return parseFloat(score).toFixed(5)
      },
      changeDepth(depth, index){
          this.depth=depth
          this.index = index
          
      }
  },
  created(){
      console.log(this.tableData)
  }
  
}
</script>

<style scoped>
    .bt:focus {
        outline:none
    }
    .table {
        color:#CE5318
    }
</style>
