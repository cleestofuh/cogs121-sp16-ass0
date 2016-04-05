var models = require('../models');

exports.view = function(req, res) {
  models.Message
    .find({})
    .exec(displayMessage);

  function displayMessage(err, posts){
    if(err) {
      console.log(err);
      res.send(500);
    }
    var data = {data:posts};
    res.render("index", data);
  }

}
