({
    getPicklistValues: function(component, event){
      	let action = component.get("c.getPicklist"); 
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let result = response.getReturnValue();
                let fieldMap = [];
                for(var key in result){
                    fieldMap.push({key:key, value:result[key]});
            	}
                component.set("v.fieldMap", fieldMap);
            }
        });
        $A.enqueueAction(action);
    },
    getMListValues : function(component, event){
        var action = component.get("c.getMultiPL");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                var result = response.getReturnValue();
                var plValues = [];
                for (var i = 0; i < result.length; i++) {
                    plValues.push({
                        label: result[i],
                        value: result[i]
                    });
                }
                component.set("v.issueList", plValues);
            }
        });
        $A.enqueueAction(action);
    },
    createFranchise : function(component, newFranchise){
        let createEvent = component.getEvent("addFranchise");
        createEvent.setParams({"item":newFranchise});
         createEvent.fire();
       component.set("v.newItem",{'sObjectType':'Franchise__c',
                                   'Franchise_Name__c':'', 'Franchise_country__c':'', 'Infrastructure_Issues__c':'',
                             'Is_Spaghetti_Broken__c':false});
       
    }
})