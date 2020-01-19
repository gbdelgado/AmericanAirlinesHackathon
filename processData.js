//Calculations will go here

module.exports = {
    //Ex syntax
    // main: function(){
    //     return example
    // }

    calcAccomidies: function(accomodations){
        var likability = 52.5;

        let hasWifi = accomodations.wifi;
        let hasPower = accomodations.power;
        let hasOverhead = accomodations.overhead;
        let hasSeatback = accomodations.seatback;

        if (hasWifi){
            likability += 10;
        }
        if (hasPower) {
            likability += 15;
        }
        if (hasOverhead) {
            likability += 7.5;
        }
        if (hasSeatback) {
            likability += 15;
        }

        return likability;
    }


    ,calcPitch: function(seatPitch){
        var likability = 52.5;

        if (seatPitch == 30){
            likability += 15
        } else if (seatPitch == 31){
            likability += 22.5
        } else {
            likability += 30
        }

        return likability;
    }

    ,calcTime: function(someStuff){

    }

    ,calcTurbulence: function(someStuff){
        
    }





}
