<template>
  <div class="container">
          <h1>Gifting to Humans for Squirrels</h1>          
          <p class="description">Humans for Squirrels would not exist without the many generous donations that we receive from all over the country. Please feel free to fill out  the below form to pledge a donation and one of our staff will reach out to you.
             Or if you feel more comfortable, you can always visit our <a href="https://www.amazon.com/gp/aw/ls/ref=?ie=UTF8&fbclid=IwAR3RUJ1hoOQstR6PBaMi-qvPcV-KQrqnWJyZ-oxl2zt9YEI9I9dIId67ecg&lid=MTWHF0HEZNE2&ty=wishlist" target="_blank">Amazon Wishlist</a>. You can feel comfortable choosing what to purchase and it will be sent directly to us! </p>
          <form>
           <p><label>First Name:</label>
            <input type="text" name="firstname" id="firstname"/>
           </p>     
           <p><label>Last Name:</label>
            <input type="text" name="lastname" id="lastname"/>
           </p>  
           <p><label>Phone:</label>
            <input type="tel" id="number" name="phone"/>
           </p>
           <p><label>Email:</label>
             <input type="email"/>
           </p>
          </form>
            <button type="submit" v-on:click="submitForm">pledge now!</button>
                 
  </div>
</template>
 <script>
 
export default {
  name: 'Gifting',
   methods: {
      submitForm() {
          alert('Thank you for your pledge!');
   }
   }
}
 
 </script>
 

<style lang="scss" scoped>
  .description {
    margin-top: 50px;
  }
</style>