
export function maxExp(currentExp) {
    let MaxData = 0;
    if(currentExp >= 160000)
        MaxData = 320000;
    else if(currentExp >= 80000)
        MaxData = 160000;
    else if(currentExp >= 50000)
        MaxData = 80000;
    else if(currentExp >= 30000)
        MaxData = 50000;
    else if(currentExp >= 5000)
        MaxData = 30000;
    else 
        MaxData = 5000;
    
    return MaxData;
}
