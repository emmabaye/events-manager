export default {
  "before": (client) => {
    client
      .url(`${client.launch_url}/login`)
      .waitForElementVisible('form', 10000)
      .setValue('input[name=email]', client.globals.env.ADMIN_EMAIL)
      .setValue('input[name=password]', client.globals.env.ADMIN_PASSWORD)
      .click('form button[type=submit]')
      .waitForElementVisible('body', 2000)
      .pause(5000)
      .verify.urlEquals(`${client.launch_url}/myevents`)
      .assert.elementPresent(".navbar a[href='/addevent']")
      .url(`${client.launch_url}/admin`)
  },

  "view center": (client) => {
    client
      .waitForElementVisible('.centers', 1000)
      .waitForElementVisible('.centers .row .col-md-4:nth-child(1)', 5000)
      .click('.centers .row .col-md-4:nth-child(1) .btn-primary')
      .waitForElementVisible('.center-details', 5000)
      .waitForElementVisible('.venue-date', 5000)
      .waitForElementVisible('.mapouter', 5000)
      .pause(3000)
      .click(".sidebar a[href='#centers']")
      .waitForElementVisible('.centers', 5000)
  },

  "add center": (client) => {

  },

  "modify center": (client) => {

  },

  "delete center": (client) => {

  },

  "after": (client) => {

  }
};
