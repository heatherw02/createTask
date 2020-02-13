/*
Bầu cua cá cọp is a Vietnamese game involve with gambling. 

*/

let diceA, diceB, diceC
let p1=10, p2=10, p3=10, p4=10 //nums of player's coins
let p1Bet1=0, p1Bet2=0, p1Bet3=0, p1Bet4=0, p1Bet5=0, p1Bet6=0 //player one bets
let p2Bet1=0, p2Bet2=0, p2Bet3=0, p2Bet4=0, p2Bet5=0, p2Bet6=0
let p3Bet1=0, p3Bet2=0, p3Bet3=0, p3Bet4=0, p3Bet5=0, p3Bet6=0
let p4Bet1=0, p4Bet2=0, p4Bet3=0, p4Bet4=0, p4Bet5=0, p4Bet6=0
let current_player = 1
let test1 = 0, test2 = 0, test3 = 0, test4 = 0

function roll()
{
    diceA = Math.ceil(Math.random() * 6)
    diceB = Math.ceil(Math.random() * 6)
    diceC = Math.ceil(Math.random() * 6)

    document.getElementById('dice1-img').src = 'photos/pic' + diceA + '.jpg'
    document.getElementById('dice2-img').src = 'photos/pic' + diceB + '.jpg'
    document.getElementById('dice3-img').src = 'photos/pic' + diceC + '.jpg'

    let same=0
    let deer=0,fruit=0, chick=0, fish=0,crab=0,lobster=0



    if(diceA===1 || diceB===1 || diceC===1) 
    {
        if(diceA===diceB && diceB===diceC)
        same=3
        else if(diceA===diceB || diceB===diceC || diceA===diceC)
        {   if(diceA===1 && diceB===1)
                same=2
            else if(diceB===1 && diceC===1)
                same=2
            else if(diceA===1 && diceC===1)
                same=2
            else
                same=1

        }
        else
        same=1

        deer=same
    }
    if(diceA===2 || diceB===2 || diceC===2)
    {
        if(diceA===diceB && diceB===diceC)
        same=3
        else if(diceA===diceB || diceB===diceC || diceA===diceC)
        {   if(diceA===2 && diceB===2)
            same=2
            else if(diceB===2 && diceC===2)
            same=2
            else if(diceA===2 && diceC===2)
            same=2
            else
            same=1
        }
        else
        same=1

        fruit=same
    }
    if(diceA===3 || diceB===3 || diceC===3)
    {
        if(diceA===diceB && diceB===diceC)
        same=3
        else if(diceA===diceB || diceB===diceC || diceA===diceC)
        {   if(diceA===3 && diceB===3)
            same=2
        else if(diceB===3 && diceC===3)
            same=2
        else if(diceA===3 && diceC===3)
            same=2
        else
            same=1

    }
        else
        same=1

        chick=same
    }
    if(diceA===4 || diceB===4 || diceC===4)
    {
        if(diceA===diceB && diceB===diceC)
        same=3
        else if(diceA===diceB || diceB===diceC || diceA===diceC)
        {   if(diceA===4 && diceB===4)
            same=2
        else if(diceB===4 && diceC===4)
            same=2
        else if(diceA===4 && diceC===4)
            same=2
        else
            same=1

    }
        else
        same=1

        fish=same
    }
    if(diceA===5 || diceB===5 || diceC===5)
    {
        if(diceA===diceB && diceB===diceC)
        same=3
        else if(diceA===diceB || diceB===diceC || diceA===diceC)
        {   if(diceA===5 && diceB===5)
            same=2
        else if(diceB===5 && diceC===5)
            same=2
        else if(diceA===5 && diceC===5)
            same=2
        else
            same=1

    }
        else
        same=1

        crab=same
    }
    if(diceA===6 || diceB===6 || diceC===6)
    {
        if(diceA===diceB && diceB===diceC)
        same=3
        else if(diceA===diceB || diceB===diceC || diceA===diceC)
        {   if(diceA===6 && diceB===6)
            same=2
        else if(diceB===6 && diceC===6)
            same=2
        else if(diceA===6 && diceC===6)
            same=2
        else
            same=1

    }
        else
        same=1

        lobster=same
    }

    

   // the calculation
 
            test1 = (p1Bet1 * deer) + (p1Bet2 * fruit) + (p1Bet3 * chick) + (p1Bet4 * fish) +  (p1Bet5 * crab) + (p1Bet6 * lobster)
            p1 += test1


            test2 = (p2Bet1 * deer) + (p2Bet2 * fruit) + (p2Bet3 * chick) + (p2Bet4 * fish) +  (p2Bet5 * crab) + (p2Bet6 * lobster)
            p2 += test2

            test3 = (p3Bet1 * deer) + (p3Bet2 * fruit) + (p3Bet3 * chick) + (p3Bet4 * fish) +  (p3Bet5 * crab) + (p3Bet6 * lobster)
            p3 += test3

            test4 = (p4Bet1 * deer) + (p4Bet2 * fruit) + (p4Bet3 * chick) + (p4Bet4 * fish) +  (p4Bet5 * crab) + (p4Bet6 * lobster)
            p4 += test4
            
    //setting bets back to zero  
    p1Bet1=0, p1Bet2=0, p1Bet3=0, p1Bet4=0, p1Bet5=0, p1Bet6=0 
    p2Bet1=0, p2Bet2=0, p2Bet3=0, p2Bet4=0, p2Bet5=0, p2Bet6=0
    p3Bet1=0, p3Bet2=0, p3Bet3=0, p3Bet4=0, p3Bet5=0, p3Bet6=0
    p4Bet1=0, p4Bet2=0, p4Bet3=0, p4Bet4=0, p4Bet5=0, p4Bet6=0
           

    document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
    document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
    document.getElementById('p1betA').innerHTML = 'Bets: Deer = ' + p1Bet1 + ', Fruit = ' + p1Bet2
    document.getElementById('p2betA').innerHTML = 'Bets: Deer = ' + p2Bet1 + ', Fruit = ' + p2Bet2
    document.getElementById('p1betB').innerHTML = 'Rooster = ' + p1Bet3 + ', Fish = ' + p1Bet4
    document.getElementById('p2betB').innerHTML = 'Rooster = ' + p2Bet3 + ', Fish = ' + p2Bet4
    document.getElementById('p1betC').innerHTML = 'Crab = ' + p1Bet5 + ', Lobster = ' + p1Bet6
    document.getElementById('p2betC').innerHTML = 'Crab = ' + p2Bet5 + ', Lobster = ' + p2Bet6

    document.getElementById('p3-coins').innerHTML = 'Coins: ' + p3
    document.getElementById('p4-coins').innerHTML = 'Coins: ' + p4
    document.getElementById('p3betA').innerHTML = 'Bets: Deer = ' + p3Bet1 + ', Fruit = ' + p3Bet2
    document.getElementById('p4betA').innerHTML = 'Bets: Deer = ' + p4Bet1 + ', Fruit = ' + p4Bet2
    document.getElementById('p3betB').innerHTML = 'Rooster = ' + p3Bet3 + ', Fish = ' + p3Bet4
    document.getElementById('p4betB').innerHTML = 'Rooster = ' + p4Bet3 + ', Fish = ' + p4Bet4
    document.getElementById('p3betC').innerHTML = 'Crab = ' + p3Bet5 + ', Lobster = ' + p3Bet6
    document.getElementById('p4betC').innerHTML = 'Crab = ' + p4Bet5 + ', Lobster = ' + p4Bet6

    if(p1===0 && p2===0 && p3===0 && p4===0 )
    end()
   
}

function hold()
{
    if(current_player===1)
    {     
        document.getElementById('p1-background').style.backgroundColor = 'grey'    
        document.getElementById('p2-background').style.backgroundColor = 'pink'
        document.getElementById('p3-background').style.backgroundColor = 'grey'
        document.getElementById('p4-background').style.backgroundColor = 'grey'

        current_player=2
    }
    else if(current_player===2)
    { 
        document.getElementById('p1-background').style.backgroundColor = 'grey'    
        document.getElementById('p2-background').style.backgroundColor = 'grey'
        document.getElementById('p3-background').style.backgroundColor = 'pink'
        document.getElementById('p4-background').style.backgroundColor = 'grey'

        current_player=3
    }
    else if(current_player===3)
    {
        document.getElementById('p1-background').style.backgroundColor = 'grey'    
        document.getElementById('p2-background').style.backgroundColor = 'grey'
        document.getElementById('p3-background').style.backgroundColor = 'grey'
        document.getElementById('p4-background').style.backgroundColor = 'pink'

        current_player=4
    }
    
    else if(current_player===4)
    {
        document.getElementById('p1-background').style.backgroundColor = 'pink'    
        document.getElementById('p2-background').style.backgroundColor = 'grey'
        document.getElementById('p3-background').style.backgroundColor = 'grey'
        document.getElementById('p4-background').style.backgroundColor = 'grey'

        current_player=1
    }
    
}



function bye1(current_player)
{
    confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
}

function bye2(current_player)
{
    confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
}

function click1()
{
    if(current_player===1)
    {
        if(p1===0)
        { bye1(current_player)
        }
        else
        {
        p1Bet1++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
        document.getElementById('p1betA').innerHTML = 'Bets: Deer = ' + p1Bet1 + ', Fruit = ' + p1Bet2
            if(p1===0)
            {   bye2(current_player)
            }
        }
        
    }
    else if(current_player===2)
    {
        if(p2===0)
        { bye1(current_player)
        }
        else
        {
        p2Bet1++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
        document.getElementById('p2betA').innerHTML = 'Bets: Deer = ' + p2Bet1 + ', Fruit = ' + p2Bet2
            if(p2===0)
            {    bye2(current_player)
            }
        }
    }
    else if(current_player===3)
    {
        if(p3===0)
        { bye1(current_player)
        }
        else
        {
        p3Bet1++
        p3--
        document.getElementById('p3-coins').innerHTML = 'Coins: ' + p3
        document.getElementById('p3betA').innerHTML = 'Bets: Deer = ' + p3Bet1 + ', Fruit = ' + p3Bet2
            if(p3===0)
            {    bye2(current_player)
            }
        }
    }
    
    else if(current_player===4)
    {
        if(p4===0)
        { bye1(current_player)
        }
        else
        {
        p4Bet1++
        p4--
        document.getElementById('p4-coins').innerHTML = 'Coins: ' + p4
        document.getElementById('p4betA').innerHTML = 'Bets: Deer = ' + p4Bet1 + ', Fruit = ' + p4Bet2
            if(p4===0)
            {    bye2(current_player)
            }
        }
    }
    
}

function click2()
{
    if(current_player===1)
    {
        if(p1===0)
        { bye1(current_player)
        }
        else
        {
        p1Bet2++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
        document.getElementById('p1betA').innerHTML = 'Bets: Deer = ' + p1Bet1 + ', Fruit = ' + p1Bet2
            if(p1===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===2)
    {
        if(p2===0)
        { bye1(current_player)
        }
        else
        {
        p2Bet2++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
        document.getElementById('p2betA').innerHTML = 'Bets: Deer = ' + p2Bet1 + ', Fruit = ' + p2Bet2
            if(p2===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===3)
    {
        if(p3===0)
        { bye1(current_player)
        }
        else
        {
        p3Bet2++
        p3--
        document.getElementById('p3-coins').innerHTML = 'Coins: ' + p3
        document.getElementById('p3betA').innerHTML = 'Bets: Deer = ' + p3Bet1 + ', Fruit = ' + p3Bet2
            if(p3===0)
            {   bye2(current_player)
            }
        }
    }
    
    else if(current_player===4)
    {
        if(p4===0)
        { bye1(current_player)
        }
        else
        {
        p4Bet2++
        p4--
        document.getElementById('p4-coins').innerHTML = 'Coins: ' + p4
        document.getElementById('p4betA').innerHTML = 'Bets: Deer = ' + p4Bet1 + ', Fruit = ' + p4Bet2
            if(p4===0)
            {   bye2(current_player)
            }
        }
    }
    
}

function click3()
{
    if(current_player===1)
    {
        if(p1===0)
        { bye1(current_player)
        }
        else
        {
        p1Bet3++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
        document.getElementById('p1betB').innerHTML = 'Rooster = ' + p1Bet3 + ', Fish = ' + p1Bet4
            if(p1===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===2)
    {
        if(p2===0)
        { bye1(current_player)
        }
        else
        {
        p2Bet3++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
        document.getElementById('p2betB').innerHTML = 'Rooster = ' + p2Bet3 + ', Fish = ' + p2Bet4
            if(p2===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===3)
    {
        if(p3===0)
        { bye1(current_player)
        }
        else
        {
        p3Bet3++
        p3--
        document.getElementById('p3-coins').innerHTML = 'Coins: ' + p3
        document.getElementById('p3betB').innerHTML = 'Rooster = ' + p3Bet3 + ', Fish = ' + p3Bet4
            if(p2===0)
            {   bye2(current_player)
            }
        }
    }
    
    else if(current_player===4)
    {
        if(p4===0)
        { bye1(current_player)
        }
        else
        {
        p4Bet3++
        p4--
        document.getElementById('p4-coins').innerHTML = 'Coins: ' + p4
        document.getElementById('p4betB').innerHTML = 'Rooster = ' + p4Bet3 + ', Fish = ' + p4Bet4
            if(p4===0)
            {   bye2(current_player)
            }
        }
    }
    
}

function click4()
{
    if(current_player===1)
    {
        if(p1===0)
        { bye1(current_player)
        }
        else
        {
        p1Bet4++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
        document.getElementById('p1betB').innerHTML = 'Rooster = ' + p1Bet3 + ', Fish = ' + p1Bet4
            if(p1===0)
            {  bye2(current_player)
            }
        }
    }
    else if(current_player===2)
    {
        if(p2===0)
        { bye1(current_player)
        }
        else
        {
        p2Bet4++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
        document.getElementById('p2betB').innerHTML = 'Rooster = ' + p2Bet3 + ', Fish = ' + p2Bet4
            if(p2===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===3)
    {
        if(p3===0)
        { bye1(current_player)
        }
        else
        {
        p3Bet4++
        p3--
        document.getElementById('p3-coins').innerHTML = 'Coins: ' + p3
        document.getElementById('p3betB').innerHTML = 'Rooster = ' + p3Bet3 + ', Fish = ' + p3Bet4
            if(p3===0)
            {   bye2(current_player)
            }
        }
    }
    
    else if(current_player===4)
    {
        if(p4===0)
        { bye1(current_player)
        }
        else
        {
        p4Bet4++
        p4--
        document.getElementById('p4-coins').innerHTML = 'Coins: ' + p4
        document.getElementById('p4betB').innerHTML = 'Rooster = ' + p4Bet3 + ', Fish = ' + p4Bet4
            if(p4===0)
            {   bye2(current_player)
            }
        }
    }
    
}

function click5()
{
    if(current_player===1)
    {
        if(p1===0)
        { bye1(current_player)
        }
        else
        {
        p1Bet5++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
        document.getElementById('p1betC').innerHTML = 'Crab = ' + p1Bet5 + ', Lobster = ' + p1Bet6
            if(p1===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===2)
    {
        if(p2===0)
        {bye1(current_player)
        }
        else
        {
         p2Bet5++
         p2--
         document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
         document.getElementById('p2betC').innerHTML = 'Crab = ' + p2Bet5 + ', Lobster = ' + p2Bet6
            if(p2===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===3)
    {
        if(p3===0)
        {bye1(current_player)
        }
        else
        {
         p3Bet5++
         p3--
         document.getElementById('p3-coins').innerHTML = 'Coins: ' + p3
         document.getElementById('p3betC').innerHTML = 'Crab = ' + p3Bet5 + ', Lobster = ' + p3Bet6
            if(p3===0)
            {   bye2(current_player)
            }
        }
    }
    
    else if(current_player===4)
    {
        if(p4===0)
        {bye1(current_player)
        }
        else
        {
         p4Bet5++
         p4--
         document.getElementById('p4-coins').innerHTML = 'Coins: ' + p4
         document.getElementById('p4betC').innerHTML = 'Crab = ' + p4Bet5 + ', Lobster = ' + p4Bet6
            if(p4===0)
            {   bye2(current_player)
            }
        }
    }
    
}

function click6()
{
    if(current_player===1)
    {
        if(p1===0)
        { bye1(current_player)
        }
        else
        {
        p1Bet6++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
        document.getElementById('p1betC').innerHTML = 'Crab = ' + p1Bet5 + ', Lobster = ' + p1Bet6
            if(p1===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===2)
    {
        if(p2===0)
        { bye1(current_player)
        }
        else
        {
        p2Bet6++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
        document.getElementById('p2betC').innerHTML = 'Crab = ' + p2Bet5 + ', Lobster = ' + p2Bet6
            if(p2===0)
            {   bye2(current_player)
            }
        }
    }
    else if(current_player===3)
    {
        if(p3===0)
        { bye1(current_player)
        }
        else
        {
        p3Bet6++
        p3--
        document.getElementById('p3-coins').innerHTML = 'Coins: ' + p3
        document.getElementById('p3betC').innerHTML = 'Crab = ' + p3Bet5 + ', Lobster = ' + p3Bet6
            if(p3===0)
            {   bye2(current_player)
            }
        }
    }
    
    else if(current_player===4)
    {
        if(p4===0)
        { bye1(current_player)
        }
        else
        {
        p4Bet6++
        p4--
        document.getElementById('p4-coins').innerHTML = 'Coins: ' + p4
        document.getElementById('p4betC').innerHTML = 'Crab = ' + p4Bet5 + ', Lobster = ' + p4Bet6
            if(p4===0)
            {   bye2(current_player)
            }
        }
    }
    
}

function end()
{
    if(p1 > p2 && p1 > p3 && p1 > p4)
    {
        confirm('YOU WIN PLAYER ONE! You had the most coins! ENJOY Your ' + p1 + ' coins' )
    }
    else if(p2 > p1 && p2 > p3 && p2 > p4)
    {
        confirm('YOU WIN PLAYER TWO! You had the most coins! ENJOY Your ' + p2 + ' coins' )
    }
    else if(p3 > p1 && p3 > p2 && p3 > p4)
    {
        confirm('YOU WIN PLAYER Three! You had the most coins! ENJOY Your ' + p2 + ' coins' )
    }
    else if(p4 > p1 && p4 > p2 && p4 > p3)
    {
        confirm('YOU WIN PLAYER Four! You had the most coins! ENJOY Your ' + p2 + ' coins' )
    }
    else
    {
        confirm('Its a tie... You guys all have ' + p1 + ' coins')
    }

}