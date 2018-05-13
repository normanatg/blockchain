const assert 	= require('assert');
const ganache 	= require('ganache-cli');
const Web3 		= require('web3');
const web3 		= new Web3(ganache.provider());

/*class Car{
	park(){
		return 'stopped';
	}
	drive(){
		return 'vroom';
	}
}

//Que ejecutar antes de iniciar las pruebas
beforeEach( ()=> {
		const car = new Car();
	})

//Inicio las pruebas

describe('Car', ()=> {
	
	it('cant park', () =>{
		assert.equal( car.park(), 'stopped');
	})

	it('cant drive', () =>{
		assert.equal( car.drive(), 'vroom');
	})
})*/