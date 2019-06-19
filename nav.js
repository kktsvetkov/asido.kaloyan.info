jQuery(document).ready(function() {
	jQuery.ajax({
		url: '/.nav.html',
		success: function(o)
		{
			jQuery('body .container').prepend(o);
			jQuery('body .container nav ul li a').each(function()
			{
				if (document.location.href == this.href)
				{
					jQuery(this).parent().addClass('active');
				}
			});
		}
	});
});
