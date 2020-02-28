
new Vue({

    el : "#app",
    data : {
        
       principal: "",
       rate: "",
       time : ""
       

    
    },
    computed : {
        calculate: function(){
            return (this.principal * this.rate * this.time)  /100 ;  
         }
             

    }

        
    
});

