({
	getFranchisesHelper : function(component) {
		
        let getFranchises = component.get("c.getExistingFranchises");
       
        getFranchises.setCallback(this, function(response){
            console.log(response);
            if(response.getState()=="SUCCESS"){
                component.set("v.franchises", response.getReturnValue());
            }
        }); 
        
        $A.enqueueAction(getFranchises);
	}
})