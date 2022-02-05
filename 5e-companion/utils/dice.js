export function roll(n){
   return Math.floor(Math.random() * n) + 1;
}

export function d100(){
    return roll(100)
}

export function d20(){
    return roll(20)
}

export function d12(){
    return roll(12)
}

export function d10(){
    return roll(10)
}

export function d8(){
    return roll(8)
}

export function d6(){
    return roll(6)
}

export function d4(){
    return roll(4)
}