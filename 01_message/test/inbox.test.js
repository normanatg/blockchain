const assert 	= require('assert');
const ganache 	= require('ganache-cli');
const Web3 		= require('web3');
const web3 		= new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach( async() =>{
	accounts = await web3.ath.getAccounts();
	inbox = await new web3.eth.contract( JSON.parse( interface ))
	.deploy({data:bytecode, arguments:['Mensaje de pueba']})
	.send({from : accounts[0], gas:'1000000'})
});

describe('inbox', ()=> {
	it('deploy a contract', () =>{
		assert.ok(inbox.options.address)
	});
})