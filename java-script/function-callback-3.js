/* ***
	https://www.javascripttutorial.net/es-next/javascript-async-await/

	Nested callback

*/


function getUser(userId, callback){
	console.log('Get user form API');
	setTimeout(()=>{ // setTimeout() function to simulate(mimic) the asynchronous operation.
		callback({
			userId:userId,
			username: 'admin'
		});
	},3000);
}


function getServices(userDetail, callback){
	console.log(`Get services of ${userDetail.username} form the API`);
	setTimeout(()=>{
		callback(['Email', 'VPN', 'CDN']);
	},3000);
}


function getServiceCost(services, callback){
	console.log(`Calculate service cost of ${services}`);
	setTimeout(()=>{
		callback(services.length * 100);
	},3000);
}



	// The following shows the nested callback functions


getUser(9, (userDetail)=>{
	getServices(userDetail, (services)=>{
		getServiceCost(services, (cost)=>{
			console.log(`The service cost is ${cost}`);
		});
	});
});

