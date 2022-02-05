export function calculateModifier(stat){
    switch(true){
        case stat >=18:
            return 5
            
        case (stat === 18 || stat === 17):
            return 4
            
        case (stat === 16 || stat === 15):
            return 3
            
        case (stat === 14 || stat === 13):
            return 2
            
        case (stat === 12 || stat === 11):
            return 1
            
        case (stat === 10 || stat === 9):
            return 0
            
        case (stat === 8 || stat === 7):
            return -1
            
        case (stat === 6 || stat === 5):
            return -2
            
        case (stat === 4 || stat === 3):
            return -3
            
        default:
            return 0
    }
}