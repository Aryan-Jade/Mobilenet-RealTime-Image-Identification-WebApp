function setup(){
     canvas = createCanvas(275, 275);
     canvas.position(550, 330);
     video = createCapture(VIDEO);
     video.hide();

     classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded(){
    console.log("model is Loaded");
}

function draw(){
    image(video, 0, 0, 275, 275);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}