const payment = true;

const marks = 93;

const enroll = (callback) => {
    console.log('course enrolment is in progress');

    setTimeout(() => {
        if(payment){
            callback()
        }else{
            console.log('your payment is failed');
        }
    
    }, 2000);
}
const progress = (call) => {

    console.log('course is in progress...');

    setTimeout(() => {
        if(marks >= 80){
            call()
        }else{
            console.log('your mark is poor');
        }
    
    }, 3000);
}

const getCertificate = () => {
    console.log('your certificate is in progress');
}

// note: this our normal thinking but it's must through error

// enroll(progress);
// progress(getCertificate())

enroll(function(){
    progress(getCertificate)
});