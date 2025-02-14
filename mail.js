function proceedToSendNMail(maildata) {
        try {
            let mailTransporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: "noreply.chiggos@gmail.com",
                    pass: "ltdexvksjhcjwcwt",
                }
            });

            const html = `
                <h1> ${maildata.name} </h1>
                <img src="cid:image" >
            `

            let mailDetails = {
                from: 'chiggos.shashi@gmail.com',
                to: 'chiggos.shashi@gmail.com',
                subject: 'Test mail',
                html: html,
                attachments: [{
                    filename: 'download.png',
                    path: __dirname + '/public/img/download.png',
                    cid: 'image'
                },
                {
                    filename: 'download.png',
                    path: __dirname + '/public/img/logo.jpg',
                },
                    {
                        filename: 'fileName.pdf',
                        path: __dirname + '/public/img/Integrals.pdf',
                        contentType: 'application/pdf'
                    }
                ]
            };

            mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log('Error Occurs', err);
                } else {
                    console.log('Email sent successfully');
                }
            });
        } catch (error) {
            return error.message;
        }
    }