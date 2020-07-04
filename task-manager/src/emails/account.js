const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to:   'krutika@example.com',
    from: 'kkrutika@example.com',
    subject: 'This is my first Creation',
    text: 'I hope this one actually get to you.'
})

