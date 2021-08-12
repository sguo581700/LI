({
     doInitList : function(component, event, helper){
    	helper.getPicklistValues(component, event);
 	},
    doInitMList : function(component, event, helper){
    	helper.getMListValues(component, event);
 	},
	clickCreateFranchise : function(component, event, helper) {
            let newItem = component.get("v.newItem");
            helper.createFranchise(component, newItem);
	},
     handleOnChange : function(component, event, helper){
    	//var myValues= component.get("v.fieldMap");
            //value = component.find("franchisepicklist").get("v.value");
            //index = myValues.findIndex(item => item.key == value),
            //selectedName = index >= 0? myValues[index].value: null;
	},
    handleIssueChange :function(component, event, helper){
       var selectedOptionValue = event.getParam("value");
        event.getSource().get("v.selectedList");
        component.set("v.selectedList", selectedOptionValue);
        alert("Option selected with value: '" + selectedOptionValue.toString() + "'");
    },
   
    handleAddFranchise : function(component, event, helper){
        let newItem = event.getParam("item");
        helper.createFranchise(component, newItem);
    }
})