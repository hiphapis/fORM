var fORM_schema = {
	"User": {
		name: "TEXT",
		email: "TEXT",
		
		has_many: [],
		belongs_to: ""
	}
}


for (var model_name in fORM_schema) {
	
}





// var User = fORM("user");
// User.create({})
// user = User.first();
// user.update_attribute(a, b);
// user.update_attributes({});
// user.destroy;

var fORM = function(model_name) {
	if (!fORM_scheme[model_name]) {
		console.log(model_name + " is not exist");
		return false;
	};
	
	return this;
};

/* Associations

*/
fORM.prototype.has_many = function(names) {
	
};

fORM.prototype.has_one = function(names) {

};

fORM.prototype.belongs_to = function(model_name) {
	
};

/* Select 

*/
fORM.prototype.all = function() {
	
};

fORM.prototype.first = function() {
	
};

fORM.prototype.last = function() {
	
};

fORM.prototype.find = function(id) {
	
};

fORM.prototype.find_by = function(attribute) {
	
};

fORM.prototype.where = function(where) {
	
};

/* Action

*/
fORM.prototype.new = function(attributes) {
	
};

fORM.prototype.create = function(attributes) {
	
};

fORM.prototype.destroy_all = function(attributes) {
	
};

fORM.prototype.update_all = function(attributes) {
	
};




var fORM_row = function(row) {
	
}

fORM_row.prototype.save = function() {
	
};

fORM_row.prototype.destroy = function() {
	
};

form_row.prototype.update_attribute = function(field, value) {

};

form_row.prototype.update_attributes = function(attributes) {

};







var fORM_log = function(msg) {
	console.log(msg);
}