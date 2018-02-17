export default {
  'load login page': (client) => {
    client
      .url(`${client.launch_url}/login`)
      .waitForElementVisible('form', 1000)
      .assert.visible('form')
      .assert.visible('form input[name=email]')
      .assert.visible('form input[name=password]')
      .assert.visible('form button[type=submit]')
      .assert.visible('.navbar')
      .click("a[href='/signup']")
      .waitForElementVisible('body', 2000)
      .pause(2000)
      .assert.urlEquals(`${client.launch_url}/signup`)
      .url(`${client.launch_url}/login`)
      .pause(1000)
      .end();
  },

  'login admin': (client) => {
	   client
	   	.url(`${client.launch_url}/login`)
	   	.waitForElementVisible('form', 1000)
	   	.setValue('input[name=email]', client.globals.env.ADMIN_EMAIL)
	   	.setValue('input[name=password]', client.globals.env.ADMIN_PASSWORD)
	   	.click('form button[type=submit]')
	   	.waitForElementVisible('body', 2000)
	   	.pause(2000)
	   	.assert.urlEquals(`${client.launch_url}/myevents`)
	   	.assert.elementPresent(".navbar a[href='/admin']")
	   	.end();
  }
};
