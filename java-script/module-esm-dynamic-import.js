let btn = document.querySelector('#show');

btn.addEventListener('click', function () {


	 // import('./utils/message.js')
     //    .then(( dialog ) => {
     //        dialog.show('Hi.......');
     //    })
     //    .catch( error => {
     //        // handle error here
     //   });



     /* ***  Since the import() returns a Promise, you can use the async/await */



    //    (async () => {
	 //       try {
	 //           let dialog = await import('./utils/message.js');
	 //           dialog.show('Hello...')
	 //       } catch (error) {
	 //           console.log(error);
	 //       }
     //	  })();




     /* *** Using object destructuring  */



	    (async () => {
	        try {
	            // use object destructuring
	            let {
	                show,
	                hide
	            } = await import('./utils/message.js');

	            // use the functions
	            show('welcome....');
	            hide();
	        } catch (err) {
	            console.log(err);
	        }
	    })();


});