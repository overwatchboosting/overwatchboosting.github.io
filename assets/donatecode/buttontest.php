<form action="https://www.paypal.com/cgi-bin/webscr" method="post" class="payPalForm">

	<input type="hidden" name="cmd" value="_donations" />
	<input type="hidden" name="item_name" value="Donation" />
	<input type="hidden" name="business" value="gallaghp@yahoo.com" /><!-- Your PayPal email: -->
	<input type="hidden" name="notify_url" value="http://war3evo.info/owipn/ipn.php" /><!-- PayPal will send an IPN notification to this URL: -->
	<input type="hidden" name="return" value="http://war3evo.info/owipn/returnpage.html" /><!-- The return page to which the user is navigated after the donations is complete: -->
	<input type="hidden" name="rm" value="2" /><!-- Signifies that the transaction data will be passed to the return page by POST -->
	<input type="hidden" name="no_note" value="1" />
	<input type="hidden" name="cbt" value="Go Back To The Site" />
	<input type="hidden" name="no_shipping" value="1" />
	<input type="hidden" name="lc" value="US" />
	<input type="hidden" name="currency_code" value="USD" />
	
	<input type="hidden" name="custom" value="battletag:Dagothur#123123|service:boost|start:2500|end:3500|type:solo|note:"/>
	<input type="hidden" name="amount" value="10.00"><!-- The amount of the transaction: -->

	<input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest" />

	<!-- You can change the image of the button: -->
	<input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif" name="submit" />

	<input type="button" />
	
</form>