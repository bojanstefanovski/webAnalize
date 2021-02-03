<template>
    <div class="grid grid-cols-3  fixe ">
        <button :style="bbcclicked ? { 'background-color': ' rgb(186, 76, 49, 1)' } : { 'background-color': ' #212832' }" class="border-b border-r p-2 bt outline-none" @click="chooseSite('bbc.com')"> BBC </button>
        <button :style="skysports ? { 'background-color': ' rgb(186, 76, 49, 1)' } :  { 'background-color': ' #212832' }" class="border-b border-r bt outline-none"  @click="chooseSite('skysports.com')">  SKYSPORTS</button>
        <button :style="nbcclicked ? { 'background-color': ' rgb(186, 76, 49, 1)' } :  { 'background-color': ' #212832' }" class="border-b bt outline-none "  @click="chooseSite('nbcsports.com')"> NBCSPORTS</button> 
    </div>
    <div class="mt-12">
        <div v-if="siteselected" class="p-2">
            <Graph :key="sitename" :name="sitename" class="p-2"> </Graph>
            <Calcarea :key="sitename" ></Calcarea>
        </div>
        <div class="h1" v-else>
            <img src="@/assets/logos/up.png" alt="This is an animated gif image, but it does not move" height="82" width="82" />
            <h1 class="text-9xl"> Choose the site </h1>
        </div>
    </div>
</template>

<script>
import Graph from './Graph.vue'
import store from '../store'
import Calcarea from './Calcarea.vue'


export default {
  name: 'Choosesite',
  store,
  components: {
    Graph, Calcarea
  },
  data() {
      return{

          bbcclicked: false,
          nbcclicked: false,
          skysports: false,
          siteselected: false,
          sitename: ''

      }
  },
  methods: {
      chooseSite(name){
           store.commit('selectName', name);
        this.sitename = name
        this.siteselected = true
           switch (name) {
                case "bbc.com":
                    this.bbcclicked=true
                    this.nbcclicked=false
                    this.skysports=false
                    break;
                case "skysports.com":
                     this.bbcclicked=false
                    this.nbcclicked=false
                    this.skysports=true
                    break;
                default:
                     this.bbcclicked=false
                    this.nbcclicked=true
                    this.skysports=false
}
      }
  }
}
</script>

<style scoped>
.bt {
    color: #a8aba5;
    border-color:rgb(44, 64, 82)
}
    .bt:hover {
        background-color: rgb(186, 76, 49, 1);
        
    }
    .bt:active {
         background-color: rgb(186, 76, 49, 1);
        
    }
    .bt:focus{
        background-color: rgb(186, 76, 49, 1);
        outline:none
    }

   .h1 {
      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;

    }
    .fixe {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 23px;
    }

  

</style>
