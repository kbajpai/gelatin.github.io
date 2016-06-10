/*******************************
          Clean Task
*******************************/

var
  del     = require('del')
;

var paths = {
    clean : 'public/libs/'
  };

// cleans distribution files
module.exports = function(callback) {
  return del([paths.clean]);
};
