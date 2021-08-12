({
    doInit : function(component, event, helper){
 	let action = component.get("c.getFranchises");
        action.setCallback(this, function(response){
        		let state = response.getState();
        		if(state==="SUCCESS"){
            			component.set("v.items", response.getReturnValue());
                }else{
                    console.log("Failed with state " + state);
                }
        });
    	$A.enqueueAction(action);
 	},
    handleAddFranchise : function(component, event, helper){
        let newItem = event.getParam("item");
        helper.createFranchise(component, newItem);
    }
   
})