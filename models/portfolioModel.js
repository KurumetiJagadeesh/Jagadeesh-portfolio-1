const mongoose=require("mongoose");

const introSchema=new mongoose.Schema({
    welcomeText:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
});

const aboutSchema=new mongoose.Schema({
    lottieURL:{
        type:String,
        required: true
    },
    description1:{
        type: String,
        required: true
    },
    description2:{
        type: String,
        required: true
    },
    skills:{
        type: Array,
        required: true
    }
});

const experienceShema=new mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    title:{
    type: String,
    required: true,
    },
    period:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
});

const projectsSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    technologies:{
        type: String,
        required: true
    },
});
 
const contactSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
});

module.exports={
    Intro : mongoose.model("intros",introSchema),
    About : mongoose.model("abouts",aboutSchema),
    Experience : mongoose.model("experience",experienceShema),
    Project : mongoose.model("projects",projectsSchema),
    Contact : mongoose.model("contact",contactSchema),
}