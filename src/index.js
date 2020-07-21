const functions = {
  gradeClassifier: (grade) => {
    if(grade>=95 && grade<=100){
      return "O Outstanding"
    }
    else if(grade>=90 && grade<=94.99){
      return "V Very Good"
    }
    else if(grade>=85 && grade<=89.99){
      return "G Good"
    }
    else if(grade>=80 && grade<=84.99){
      return "S Satisfactory"
    }
    else if(grade>=75 && grade<=79.99){
      return "N Needs Improvement"
    }
    else if(grade<=74.99){
      return "D Did not Meet Expectation"
    }
  }
}

module.exports = functions;