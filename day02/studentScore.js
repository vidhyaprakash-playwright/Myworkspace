function studentGrade(score){

    switch(score){

        case 90:{
            console.log("Grade A")
            break
        }

        case 80:{
            console.log("Grade B")
            break
        }

        case 70:{
            console.log("Grade C")
            break
        }

        case 60:{
            console.log("Grade D")
            break
        }

        case 50:{
            console.log("Grade E")
            break
        }
        default:{
            console.log("Grade unavailable")
        }
    }
}   
studentGrade(90)
studentGrade(50)
studentGrade(40)
studentGrade(70)
