function Quant (estoque, quantidade){
    if(isNaN(quantidade)) return Error;
    if(estoque==0) return Error;
    if (quantidade>estoque) return Error;
    return estoque-quantidade;
}

