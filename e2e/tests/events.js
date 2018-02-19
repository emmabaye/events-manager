export default {
  before: (client)=> {
    client
     .url(`${client.launch_url}/login`)
     .waitForElementVisible('form', 1000)
     .setValue('input[name=email]', client.globals.env.ADMIN_EMAIL)
     .setValue('input[name=password]', client.globals.env.ADMIN_PASSWORD)
     .click('form button[type=submit]')
     .waitForElementVisible('body', 2000)
     .pause(2000)
     .assert.urlEquals(`${client.launch_url}/myevents`)
     .assert.elementPresent(".navbar a[href='/addevent']")
  },

  'add event': (client)=>{
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
  },

  'view event':()=>{

  },

  'modify event': ()=>{
 
  },

  'delete event': ()=>{

  }
}