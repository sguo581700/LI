({
    
	reportBroken : function(component, event, helper) {
		component.set("v.item.Is_Spaghetti_Broken__c", true);
        event.getSource().set("v.disabled", true);
	}
   
})