Webcam.set({
    width: 150,
    height: 150,
    image_format: "png",
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function takePic(){
    Webcam.snap(function(takenPic){
        document.getElementById("result").innerHTML = "<img id='ResultedPicture' src=" + takenPic + "></img>"
    });
};
console.log("Current ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CGo3QkZTx/model.json", imageClassifierRequirement)

function imageClassifierRequirement(){
    console.log("no.")
};

function check(){
    image = document.getElementById("ResultedPicture");
    classifier.classify(image, checking);   
};

function checking( error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("obby").innerHTML = result[0].label;
        console.log(result[0].label);
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}
