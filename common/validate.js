var validate = {
	checkPhone:function(phone){ 
	    if(!(/^1[3456789]\d{9}$/.test(phone))){ 
	        return false; 
	    } else {
			return true;
		}
	}
}

module.exports = {
	validate:validate
}