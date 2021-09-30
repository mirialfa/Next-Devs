const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    company:{
        type:String
    },
    Username:{
        type:String
    },
    Emailaddress:{
        type:String
    }, 
    FirstName:{
        type:String
    }, 
    LastName:{
        type:String
    },
    City:{
        type:String
    },  
    Country:{
        type:String
    }, 
    PostalCode:{
        type:Number
    },
    Aboutme:{
        type:String
    },
})

module.exports=mongoose.model('User',userSchema)



// 	"company":""
	// "Username":"dina",
	// "Emailaddress":"tom@gmail.com",
	// "FirstName":"",
	// "LastName":"",
	// "City":"",
	// "Country":"",
	// "PostalCode":"",
	// "Aboutme":""