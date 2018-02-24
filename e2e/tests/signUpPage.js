export default {
  'load signup page': (client) => {
    client
      .url(`${client.launch_url}/signup`)
      .waitForElementVisible('form', 1000)
      .assert.visible('form')
      .assert.visible('form input[name=firstName]')
      .assert.visible('form input[name=lastName]')
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

  'signup user': (client) => {
    let email = `user${Math.random().toString().substr(-5)}@email.com`;
    let password = 'password';
	   client
	   	.url(`${client.launch_url}/signup`)
	   	.waitForElementVisible('form', 1000)
      .setValue('input[name=firstName]', 'Jack')
      .setValue('input[name=lastName]', 'User')
	   	.setValue('input[name=email]', email )
	   	.setValue('input[name=password]', password)
	   	.click('form button[type=submit]')
	   	.waitForElementPresent('.events', 5000)
	   	.assert.urlEquals(`${client.launch_url}/myevents`)
	   	.assert.elementNotPresent(".navbar a[href='/admin']")
	   	.end();
  }
};
