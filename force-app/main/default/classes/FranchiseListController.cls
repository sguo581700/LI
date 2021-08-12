public with sharing class FranchiseListController {
	@AuraEnabled
    public static List<Franchise__c>getFranchises(){
        return [select Name, Franchise_Name__c, Franchise_country__c, Is_Spaghetti_Broken__c, Infrastructure_Issues__c from Franchise__c];
    }
    @AuraEnabled
    public static Franchise__c saveFranchiseRecord(Franchise__c f){
        upsert f;
        return f;
    }
    @AuraEnabled
    public static Map<String, String> getPicklist(){
        Map<String, String> options = new Map<String, String>();
        Schema.DescribeFieldResult fieldResult = Franchise__c.Franchise_Country__c.getDescribe();
        List<Schema.PicklistEntry> pList = fieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: pList) {
            options.put(p.getValue(), p.getLabel());
        }
        return options;
    }
    @AuraEnabled
    public static List<String>getMultiPL(){
        List<String>plValues = new List<String>();
        Schema.DescribeFieldResult objFieldInfo = Franchise__c.Infrastructure_Issues__c.getDescribe();
        List<Schema.PicklistEntry> picklistvalues = objFieldInfo.getPicklistValues();
        for(Schema.PicklistEntry plv: picklistvalues) {
            plValues.add(plv.getValue());
        }
        plValues.sort();
        return plValues;
    }
}