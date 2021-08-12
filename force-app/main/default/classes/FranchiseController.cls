public with sharing class FranchiseController {
	@AuraEnabled
    public static List<Franchise__c>getExistingFranchises(){
        if(!Schema.SObjectType.Franchise__c.isAccessible()){
            throw new AuraHandledException('you cannot access the Franchise object');
        }
        List<Franchise__c> fList = [select Name, Franchise_Name__c, Franchise_country__c, Is_Spaghetti_Broken__c, Infrastructure_Issues__c from Franchise__c];
        List<Franchise__c> fids = new List<Franchise__c>();
         for(Franchise__c f: fList){
            fids.add(f);
        }
        return fids;
    }
}