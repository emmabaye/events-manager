export default {
	'load homepage': (client) => {
		client
			.url(client.launch_url)
			.waitForElementVisible('body', 2000)
			.assert.title('Events Manager')
			.assert.containsText(".navbar", "EVENTS MANAGER")
			.assert.visible(".carousel")
			.assert.visible(".features")
			.assert.containsText(".features", "Flexible booking for centers")
			.assert.visible(".capacity")
			.assert.visible("footer")
			.assert.containsText("footer", "2017 EVENTS MANAGER")
			.pause(1000)
			.click(".navbar a[href='/centers']")
			.assert.urlEquals(`${client.launch_url}/centers`)
			.url(client.launch_url)
			.click(".navbar a[href='/login']")
			.assert.urlEquals(`${client.launch_url}/login`)
			.url(client.launch_url)
			.click(".navbar a[href='/signup']")
			.assert.urlEquals(`${client.launch_url}/signup`)
			.end()
	}
}
