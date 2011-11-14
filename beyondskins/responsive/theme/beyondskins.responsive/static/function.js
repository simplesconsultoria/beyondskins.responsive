jQuery(document).ready(function() {
    
jQuery(document).ready(function(jq) {

var buscalink = document.location.href + '/search'; 

jQuery("#searchbt a").attr({
          href:buscalink
        });

}); 
	 
jQuery('#searchbt a').prepOverlay({
                subtype: 'ajax',
                filter: '#content>*',
                });


				
				

});