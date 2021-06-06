let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); 
  const data = ['Angular','React','Vue']
  data.map((item,index)=>{
							console.log(`<li key={index}>{item}</li>`)
						})
					