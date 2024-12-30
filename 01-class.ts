type Product = {
    name: string
    value: number    
}

class Establishment {

    constructor (
        private address: string, private types: string, private products: Product[]
        ) {}
}

const bakeryThree = new Establishment("Rua dos Laranjeiras, 420 - bloco A", "Alimentação", 
    [
   {name: "pão", value:0.8},
    {name: "arroz", value: 10},
     {name: "leite", value: 5},
      {name: "brigadeiro", value: 2.5},
       {name: "carne moida", value: -10}
    ])

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
console.log(bakeryThree)