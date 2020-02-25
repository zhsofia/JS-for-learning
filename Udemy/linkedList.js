function Train(wagonIDs){
    this.currWagon = new Wagon(wagonIDs[0]);
    console.log(wagonIDs[0])
    if(wagonIDs.length===1){
        this.nextWagon = null;
    }else{
        wagonIDs.shift();
        this.nextWagon = new Train(wagonIDs);
    }

}

function Wagon(ID){
    this.ID = ID;
}

function createTrainAndPrint(IDs){
    let train = new Train(IDs);
    let check=true;
    while(check){
        if(train.nextWagon===null){
            check=false;
        }
        console.log(`WagonID: ${train.currWagon.ID}`);
        train=train.nextWagon;
    }
}

