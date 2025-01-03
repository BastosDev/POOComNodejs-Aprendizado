type Product = {
    name: string
    value: number    
}

class Establishment {
    private waiting_Line = 10
     
    constructor (
        public address: string,
        public types: string, 
        private products: Product[],
        waitingLine?: number
        ) {
            this.waiting_Line = waitingLine ?? this.waiting_Line
        }

        public productNamesReturns() {
            return this.products.map(product => product.name)
        }

        get waitingLine() {
            return this.waiting_Line
        }

        set waitingLine (line: number) {
            if (line <= 0) {
                return
            }

            this.waiting_Line = line
        }

    reduceWaitingLine() {
        if (this.waiting_Line === 0) {
            return
        }
        this.waiting_Line -= 1
    }
}

const bakeryThree = new Establishment("Rua dos Laranjeiras, 420 - bloco A", "Alimentação", 
    [
   {name: "pão", value:0.8},
    {name: "arroz", value: 10},
     {name: "leite", value: 5},
      {name: "brigadeiro", value: 2.5},
       {name: "carne moida", value: -10}
    ], 3)

const bakery = {
    address: "Rua dos Laranjeiras, 420 - bloco A",
    types: "Alimentação",
    products: [
        {name: "pão", value:0.8},
         {name: "arroz", value: 10},
          {name: "leite", value: 5},
           {name: "brigadeiro", value: 2.5},
            {name: "carne moida", value: -10}
        ],
        productNames() {
            return this.products.map(product => product.name)
        }
        
}

console.log(bakery)
console.log(bakery.productNames())
console.log(bakeryThree.productNamesReturns)
console.log(bakeryThree.waitingLine)
bakeryThree.reduceWaitingLine()
bakeryThree.reduceWaitingLine()
bakeryThree.reduceWaitingLine()
bakeryThree.reduceWaitingLine()
bakeryThree.waitingLine = 100
console.log(bakeryThree.address)
console.log(bakeryThree.waitingLine)