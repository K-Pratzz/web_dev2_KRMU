console.log("start");
function x(cb){
    setTimeout(()=>{
        //return "hii";
        cb("hii");
    },5000);
}
x((data)=>{
    console.log(data);
})
//console.log(x()); call back : passed as argument and then called back
console.log("end") //return statment doesnt work.. 

function login(uname,password,cb){
    setTimeout(()=>{
        cb({uname:uname,logedin:true,message:"suvccess"});
    },1000);
}


function getvideolist(email,cb){
    setTimeout(()=>{
        cb([{title:"video 1"},{title:"video 2"}]);
    },2000);
}

function getvideo(video,cb){
    setTimeout(()=>{
        cb({title:video.title,description:"video"+video.title})
    });
}

login("john","123" ,(userdata)=>{
    console.log(userdata);
    getvideolist(userdata.uname,(videolist)=>{
        console.log(videolist);
        getvideo(videolist[0],(videodetail)=>{
            console.log(videodetail);
        });
    });
});

//promise chaning is the sol of call back heck /pyramid of dooom