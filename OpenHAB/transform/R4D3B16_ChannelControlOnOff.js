//
//	@author			Helge Klug
//	@copyright		Copyright (c) 2021 Helge Klug
//	@version		1.00
//
(function(inputData) {

	var out = 0 ;

	if (inputData == 'ON') {
		out = 0x0100 ;
	} else if (inputData == 'OFF') {
		out = 0x0200 ;
	}

	return out ;
})(input)