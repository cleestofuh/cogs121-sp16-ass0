var models = require('../models');

exports.send = function(req, res) {
    //console.log(req.body); // help you see what is inside of req.body
    // your solution here

    var email = req.body.email;
    var content = req.body.content;

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var dateString = day + ' ' + monthNames[monthIndex] + ' ' + year;
    var MessageSchema = new models.Message({
      "email": email,
      "content": content,
      "created": dateString
    });

    models.Message
      .find({})
      .exec(saveMessage);

    function saveMessage(err, message_post) {
      if(err) {
        console.log(err);
        res.send(500);
      }
      var data = {
        data: message_post
      };
      MessageSchema.save(function() {
        res.redirect('/');
      })
    }
};
