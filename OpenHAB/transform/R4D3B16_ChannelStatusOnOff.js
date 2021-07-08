//
//	@author			Helge Klug
//	@copyright		Copyright (c) 2021 Helge Klug
//	@version		1.00
//
(function(inputData) {

	var out = 'OFF' ;

	if (inputData == '1') {
		out = 'ON' ;
	} else if (inputData == '0') {
		out = 'OFF' ;
	}

	return out ;
})(input)