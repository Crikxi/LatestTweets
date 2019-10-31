// ==UserScript==
// @name     Latest Tweets
// @version  1.4
// @grant    none
// @include http*://twitter.com*
// @run-at document-end
// ==/UserScript==

// Script sees if tweets are set to "home", and if so switches to "latest".

function sleep(milliseconds)
{
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

(async () => 
{
	for(i = 0; i < 5; i++)
	{
		// Waits a second for page to load, couldn't get this to work otherwise.
		await sleep(1000);

		// Checks if tweets are set to "Home".
		const menuButton = document.querySelector('div[aria-label="Top Tweets on"]');
		if (menuButton != null)
		{
			// Clicks on menu button.
			menuButton.click();
			await sleep(0);

			// Click "Latest" button.
			const latestButton = document.querySelector('div[role="menuitem"]');
			latestButton.click();
			break;
		}
	}
})();

