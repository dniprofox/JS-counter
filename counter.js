var counter = (function(){

	
  
	var _number;

	var _checkValue = function(y){

		if (y < 0 ) {
			return false;

		} else {
			return true;
		}

	}


	var setNumber = function(y){
		if ( _checkValue(y) ){
				_number = y;
		} else {
				console.log('Недопустимое значение');
		}
	}

	var setValue = function(y) {

		   _number = y; 
	}

	var increaseCounter = function() {

			_number++;
	}

	var decreaseCounter = function() {

			_number--;
	}

	var printCounter = function(){

		console.log(_number);
		

	return {

		setNumber,
		increaseCounter,
		decreaseCounter,
		printCounter


	}


}())

counter.Setcounter(-7);
counter.printCounter();
counter.increaseCounter();

counter.Setcounter(17);
counter.increaseCounter();
counter.increaseCounter();
counter.printCounter();
counter.decreaseCounter();
counter.decreaseCounter();
counter.printCounter();


