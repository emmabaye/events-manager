export default {
  "before": (client) => {
    client
      .url(`${client.launch_url}/login`)
      .waitForElementVisible('form', 1000)
      .setValue('input[name=email]', client.globals.env.ADMIN_EMAIL)
      .setValue('input[name=password]', client.globals.env.ADMIN_PASSWORD)
      .click('form button[type=submit]')
      .waitForElementVisible('body', 2000)
      .pause(5000)
      .verify.urlEquals(`${client.launch_url}/myevents`)
      .assert.elementPresent(".navbar a[href='/addevent']");
  },

  'add event': (client) => {
    client
      .click("a[href='/addevent']")
      .assert.urlEquals(`${client.launch_url}/addevent`)
      .assert.visible('form')
      .setValue('input[name=title]', client.globals.event.title)
      .setValue('textarea[name=description]', client.globals.event.description)
      .setValue('select[name=centerId]', client.globals.event.center)
      .setValue('input[name=date]', client.globals.event.date)
      .setValue('input[name=time]', client.globals.event.time)
      .setValue('input[name=image]', client.globals.event.image)
      .click('form button[type=submit]')
      .waitForElementVisible('body', 2000)
      .pause(5000)
      .verify.urlEquals(`${client.launch_url}/myevents`)
  },

  'view event': (client) => {
    client
      .click(".event:last-child .btn-primary")
      .waitForElementVisible('body', 1000)
      .assert.visible(".event-details")
      .assert.visible(".venue-date")
      .assert.visible(".card .mapouter")
      .click("a[href='/myevents']")
      .pause(5000)
      .verify.urlEquals(`${client.launch_url}/myevents`)
  },

  'modify event': (client) => {
    client
      .waitForElementVisible(".event:last-child .btn-success", 5000)
      .click(".event:last-child .btn-success")
      .pause(5000)
      .verify.urlContains(`${client.launch_url}/modifyevent/`)
      .assert.visible('form')
      .setValue('input[name=title]', 'Birthday party')
      .click('form button[type=submit]')
      .waitForElementVisible('body', 2000)
      .pause(5000)
      .verify.urlEquals(`${c]`lient.launch_url}/myevents`)
  },

  'delete event': (client) => {
    client
      .waitForElementPresent(".event:last-child a.btn-danger", 5000)
      .click(".event:last-child a.btn-danger")
      .pause(5000)
      .waitForElementVisible(".event:last-child .modal button.btn-danger", 5000)
      .click(".event:last-child .modal button.btn-danger")
  }

  'after': (client) => {
    client
      .end()
  }
};
