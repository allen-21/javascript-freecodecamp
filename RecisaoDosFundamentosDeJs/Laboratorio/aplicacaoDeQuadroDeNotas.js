function getAverage(points){
    let soma = 0;
    
    for (const num of points){
        soma += num;
    }
    const media = soma / points.length;
    return media;

}

function getGrade(mediaPoints){

    if(mediaPoints === 100){
        return "A+"
    }else if(mediaPoints >= 90 && mediaPoints <= 99){
        return "A"
    }else if(mediaPoints >= 80 && mediaPoints <= 89){
        return "B"
    }else if(mediaPoints >= 70 && mediaPoints <= 79){
        return "C"
    }else if(mediaPoints >= 60 && mediaPoints <= 69){
        return "D"
    }else
        return "F"

}

function hasPassingGrade(point){
    const hasPassin = getGrade(point);

    if (hasPassin === "F"){
        return false;
    }
    return true;

}

function studentMsg(points, point) {
    const average = getAverage(points);
    const grade = getGrade(point);
    const passed = hasPassingGrade(point);

    if (passed) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
}

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))