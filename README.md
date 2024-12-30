## Sobre a aula

# Tendo em mente o que queriamos fazer
    - Padaria com os seguintes objects:
        - address
        - types
        - products
    - Definimos o type Product para que os names seja string e os values sejam numeros
    - Definimos um class Establishment para gerenciar o estabelecimento
    - Definimos a variável private waiting_Line um valor 10
    - Abrimos um constructor
        - definimos addres como public string
        - types como public string
        - products como private e puxamos o type definido primeiramente com uma array
        - colocamos waitingLine? para perguntar sobre waitingLine e definimos como number
        - abrimos um object no constructor e dentro dele colocamos um this waiting_Line = waintingLine ?? para caso for falso definir como this.waiting_Line
    - Fechamos o constructor e abrimos um public para retornar o nome dos produtos em com map para retornar em forma de array
    - Fechando o public, abrimos um get para dar return em this wainting_Line
    - Abrimos um set waitingLine definindo line como number para poder setar por fora o valor de waintingLine
    - Abrimos um if para se line for menor que ou igual a zero damos return e se for maior que zero, adiquirimos o valor setado
    - Abrimos um reduce waitingline para reduzir as pessoas conforme a fila passa, se for === 0 então retornamos o valor, se for diferente de zero subtraimos o valor seta - 1
    - Definimos duas consts, uma chamada bakeryThree e outra bakery para forma de comparar os metodos utilizados
        - Na bakeryThree abrimos um new Establishment e nele definimos o address, o tipo de estabelecimento, nome dos produtos na array e o numero de pessoas na fila
        - No bakery fazemos da forma tradicional, abrindo um object e nele colocando o address, types e products em formato de array
            - Para retornar estes produtos fazemos um productNames e nele colocamos um return this products com maps e nele colocamos product arrow function product.name
    - Para finalizar damos um console.log e puxamos a function reduce waintingline para testar a redução da fila. Tambem setamos um valor de fila para testar o getter e setter