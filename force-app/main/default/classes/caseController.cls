public with sharing class caseController {
    @AuraEnabled
    public static List<Case>getCases(){
        return [select caseNumber, EngineeringReqNumber__c from Case];
    }
	@AuraEnabled
    public static Case createCase(){
        Case caseObj = new Case(
    		EngineeringReqNumber__c='0001'
        );
		insert caseObj;
		caseObj = [select id, casenumber from case where EngineeringReqNumber__c = : caseObj.EngineeringReqNumber__c];
        return caseObj;
    }
}