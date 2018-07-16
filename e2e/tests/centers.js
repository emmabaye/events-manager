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
      .url(`${client.launch_url}/admin`);
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
      .waitForElementVisible('.centers', 5000);
  },

  "add center": (client) => {
    client
      .click(".sidebar a[href='#add-center']")
      .waitForElementVisible('form', 3000)
      .setValue('input[name=name]', client.globals.center.name)
      .setValue('textarea[name=description]', client.globals.center.description)
      .setValue('input[name=location]', client.globals.center.location)
      .setValue('input[name=capacity]', client.globals.center.capacity)
      .setValue('input[name=price]', client.globals.center.price)
      .setValue('input[name=facilities]', client.globals.center.facilities)
      .setValue('input[name=image]', client.globals.center.image)
      .click('form button[type=submit]')
      .waitForElementVisible('.centers', 5000)
      .assert.containsText('.centers .row .col-md-4:nth-child(1) .card-title', client.globals.center.name);
  },

  "modify center": (client) => {
    client
      .click('.centers .row .col-md-4:nth-child(1) .btn-success')
      .waitForElementVisible('form', 3000)
      .pause(5000)
      .clearValue('input[name=name]')
      .setValue('input[name=name]', 'Town Hall')
      .click('form button[type=submit]')
      .waitForElementVisible('.centers', 5000)
      .assert.containsText('.centers .row .col-md-4:nth-child(1) .card-title', 'Town Hall');
  },

  "delete center": (client) => {
    client
      .waitForElementPresent(".centers .row .col-md-4:nth-child(1) a.btn-danger", 5000)
      .click(".centers .row .col-md-4:nth-child(1) a.btn-danger")
      .pause(5000)
      .waitForElementVisible(".centers .row .col-md-4:nth-child(1) .modal button.btn-danger", 5000)
      .click(".centers .row .col-md-4:nth-child(1) .modal button.btn-danger")
      .pause(3000);
  },

  "after": (client) => {
    client
      .click(".navbar a[href='/logout']")
      .pause(3000)
      .end();
  }
};
