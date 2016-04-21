var mongoose = require ('mongoose');
// company schema 
var companyschema = mongoose.schema({
Company {
“name”: string ,
“type” : string,
 " Product " : [
   { “Quantity” : double, 
     “available”: boolean, 
     “Name”: string, 
     “Price”: double, 
“Category”:string
      }],
      create_Date:{
      	type: date,
      	defualt:date.now 
      }
}});
var CompanyRun = module.exports = mongoose.Company('company',companyschema);
module.exports.getCompanyRun = function (callback, limit) {
	// body...
		CompanyRun.find(callback).limit(limit);
}