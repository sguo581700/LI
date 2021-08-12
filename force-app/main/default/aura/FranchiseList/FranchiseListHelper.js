({
    createFranchise: function(component, franchise) {
        let action = component.get("c.saveFranchiseRecord");
        action.setParams({"f":franchise});
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state==="SUCCESS"){
                let items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
        $A.enqueueAction(action);
    }
})