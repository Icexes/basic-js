const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value ='( )') {
    this.chain.push(value)
    return this;
  },
  removeLink(position) {
    if (position>this.chain.length || position <=0 || typeof position!== 'number') 
    {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    const result = this.chain.map(elem => 
      `( ${elem} )`
    ).join('~~')

    this.chain=[]
    return result

  }
};

module.exports = chainMaker;
