<template>
    <div class="mt-3 img w-5/6 rounded graph ">
        <div class="p-2">   
            <img id="logo" class="mt-2  " :src="getImgUrl()" alt="Smiley face" height="100px">
            <p class="mt-6">
                {{siteDescription}}
            </p>


        </div>
        <img class="mt-2 mb-2" src="@/assets/unnamed.png" alt="Smiley face" height="620" width="620">
    </div>
  
</template>

<script>
import store from "../store"

export default {
  name: 'Graph',
  props: ["name"],
  data() {
      return {
          sitelogo: '',
          siteDescription: ''
      }
  },
  methods: {
      getImgUrl() {
        
        var images = require.context('../assets/logos/', false, /\.png$/)
        return images('./' + this.sitelogo + ".png")
        
  }
  },
  created(){
      this.sitelogo= this.name.replace(".com","")
      this.siteDescription = store.state.siteDescription[this.sitelogo]

      console.log(this.siteDescription[this.sitelogo])
  }


  
}
</script>

<style scoped>
    .img, img{
        margin: auto;
        background-color:rgb(26, 29, 36)
    }
    .graph {
        display: grid;
        grid-template-columns: 1fr 2fr;
        color: #F5FFFA;
    }

</style>
