({
	acao : function(component, event, helper) {
        alert("O lead foi criado");
        
		$A.get('e.force:refreshView').fire();
		
	}
})