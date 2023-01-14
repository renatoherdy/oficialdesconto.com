(function($) {
    $.fn.replacetext = function(target, replacement,mx_replaces) {
         // Get all text nodes:
         var $textNodes = this
                 .find("*")
                 .andSelf()
                 .contents()
                 .filter(function() {
                     return this.nodeType === 3 &&
                         !$(this).parent("a").length;
                 });

         // Iterate through the text nodes, replacing the content
         // with the link:
		 total_substitu = 0;
         $textNodes.each(function(index, element) {
             var contents = $(element).text();
             content = contents.replace(target, replacement);
			 if(contents != content){
				  total_substitu++;
				  if(total_substitu >mx_replaces) return;
			 }
             $(element).replaceWith(content);
         });
    };
})(jQuery_1_11_1);