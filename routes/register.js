
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', token: req.params.token });
};
