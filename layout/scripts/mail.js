function sendMail(params) {
var tempParams = {
from_name: document.gerElementById("fromName").value,
to_name: "aaciz66@gmail.com",
message: "sdfsdf"
};

emailjs.send('gmail','template_hxpn2i8',tempParams)
.then(function(res){
console.log("sucess", res.status);
})
}