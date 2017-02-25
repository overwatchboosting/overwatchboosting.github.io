<?php
	require 'config.php';
	
	$customone=htmlspecialchars("Dagothur#123123");
	$customtwo=htmlspecialchars("2500=>3500");
	
?>

	  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" class="payPalForm">
		<div>
			<input type="hidden" name="cmd" value="_donations" />
			<input type="hidden" name="item_name" value="Donation" />

			<!-- Your PayPal email: -->
			<input type="hidden" name="business" value="gallaghp@yahoo.com" />

			<!-- PayPal will send an IPN notification to this URL: -->
			<input type="hidden" name="notify_url" value="http://war3evo.info/owipn/ipn.php" /> 

			<!-- The return page to which the user is navigated after the donations is complete: -->
			<input type="hidden" name="return" value="http://war3evo.info/owipn/returnpage.html" /> 

			<!-- Signifies that the transaction data will be passed to the return page by POST -->
			<input type="hidden" name="rm" value="2" /> 


			<!-- 	General configuration variables for the paypal landing page. Consult 
					http://www.paypal.com/IntegrationCenter/ic_std-variable-ref-donate.html for more info  -->

			<input type="hidden" name="no_note" value="1" />
			<input type="hidden" name="cbt" value="Go Back To The Site" />
			<input type="hidden" name="no_shipping" value="1" />
			<input type="hidden" name="lc" value="US" />
			<input type="hidden" name="currency_code" value="USD" />
            <!--<input type="hidden" name="custom" value="<php echo $customone."|".$customtwo; >"/> -->
            <input type="hidden" name="custom" value=""/>


			<!-- The amount of the transaction: -->

			<select name="amount">
				<option value="100">$100</option>
				<option value="75">$75</option>
				<option value="70">$70</option>
				<option value="60">$60</option>
				<option value="55">$55</option>
				<option value="50">$50</option>
				<option value="45">$45</option>
				<option value="40">$40</option>
				<option value="35">$35</option>
				<option value="30">$30</option>
				<option value="25">$25</option>
				<option value="0.01"  selected="selected">$0.01</option>
				<option value="15">$15</option>
				<option value="10">$10</option>
				<option value="5">$5</option>
			</select>

			<input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest" />

			<!-- You can change the image of the button: -->
			<input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />

		  <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</div>
		</form>