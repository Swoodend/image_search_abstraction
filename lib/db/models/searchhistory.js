const mongoose = require('mongoose');

const searchHistorySchema = mongoose.Schema({
  term: {type: String, required: true}
}, 
  {timestamps: true}
);

const SearchHistory = mongoose.model('querie', searchHistorySchema);

module.exports = SearchHistory;
