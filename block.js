
/**
 * Here block is the important class of block chain 
 * doing export here
 * this is basic module
 */

class Block{

    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `block -
        Timestamp :${this.timestamp}
        lastHash :${this.lastHash}
        hash :${this.hash}
        data :${this.data}
        `
    }
    // here  genesis means first block of the chain
    static genesis(){
        return new Block("today","----","hashh",[])
    }
}

module.exports = Block;