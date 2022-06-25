const leapYears = function(leapYear) {

    if (leapYear % 4 === 0 || leapYear % 400 === 0) {
        return true;
    } else if (leapYear === 1900) {
        return false;
    }
    
    else
        return false;

    // pseudocode
    // if (leapYear / 4) (!&& leapYer / 100 !|| leapYear / 400)
    // return true
};

// Do not edit below this line
module.exports = leapYears;
