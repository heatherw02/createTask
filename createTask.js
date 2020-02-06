/*
Bầu cua cá cọp is a Vietnamese game involve with gambling. 

Note: Everything should be working, but i want to add more players to the game and fix the css 

*/

let diceA, diceB, diceC
let p1=10, p2=10 //nums of player's coins
let p1Bet1=0, p1Bet2=0, p1Bet3=0, p1Bet4=0, p1Bet5=0, p1Bet6=0 //player one bets
let p2Bet1=0, p2Bet2=0, p2Bet3=0, p2Bet4=0, p2Bet5=0, p2Bet6=0
let current_player = 1
let test1 = 0, test2 = 0

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

    

   // the MAtH
 
            test1 = (p1Bet1 * deer) + (p1Bet2 * fruit) + (p1Bet3 * chick) + (p1Bet4 * fish) +  (p1Bet5 * crab) + (p1Bet6 * lobster)
            p1 += test1


            test2 = (p2Bet1 * deer) + (p2Bet2 * fruit) + (p2Bet3 * chick) + (p2Bet4 * fish) +  (p2Bet5 * crab) + (p2Bet6 * lobster)
            p2 += test2
      
    
 p1Bet1=0
 p1Bet2=0
 p1Bet3=0
 p1Bet4=0
 p1Bet5=0 
 p1Bet6=0 
 
 p2Bet1=0
 p2Bet2=0
 p2Bet3=0 
 p2Bet4=0 
 p2Bet5=0
 p2Bet6=0


    document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
    document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
   
}

function hold()
{
    if(current_player===1)
    {
        current_player=2
    }
    else
        current_player=1
}



function click1()
{
    if(current_player===1)
    {
        if(p1===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p1Bet1++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
            if(p1===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
        
    }
    else
    {
        if(p2===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p2Bet1++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
            if(p2===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
    }
}

function click2()
{
    if(current_player===1)
    {
        if(p1===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p1Bet2++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
            if(p1===0)
            {   confirm('STOP. Player ' + current_player + 'you have no more coins :(')
                hold()
            }
        }
    }
    else
    {
        if(p2===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p2Bet2++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
            if(p2===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
    }
}

function click3()
{
    if(current_player===1)
    {
        if(p1===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p1Bet3++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
            if(p1===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
    }
    else
    {
        if(p2===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p2Bet3++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
            if(p2===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
            hold()
            }
        }
    }
}

function click4()
{
    if(current_player===1)
    {
        if(p1===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p1Bet4++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
            if(p1===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
    }
    else
    {
        if(p2===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p2Bet4++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
            if(p2===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
    }
}

function click5()
{
    if(current_player===1)
    {
        if(p1===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p1Bet5++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
        
            if(p1===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
    }
    else
    {
        if(p2===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
         p2Bet5++
         p2--
         document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
            if(p2===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
    }
}

function click6()
{
    if(current_player===1)
    {
        if(p1===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p1Bet6++
        p1--
        document.getElementById('p1-coins').innerHTML = 'Coins: ' + p1
            if(p1===0)
            {   confirm('STOP. Player ' + current_player + ' you have no more coins :(')
                hold()
            }
        }
    }
    else
    {
        if(p2===0)
        { confirm('Yikes. Player ' + current_player + ' you have no coins soo..you basically lost.')
            hold()
        }
        else
        {
        p2Bet6++
        p2--
        document.getElementById('p2-coins').innerHTML = 'Coins: ' + p2
        
            if(p2===0)
            {   confirm('STOP. Player ' + current_player + ', you have no more coins :(')
                hold()
            }
        }
    }
}

function end()
{
    if(p1 > p2)
    {
        confirm('YOU WIN PLAYER ONE! You had the most coins! ENJOY Your ' + p1 + ' coins' )
    }
    else if(p2 > p1)
    {
        confirm('YOU WIN PLAYER TWO! You had the most coins! ENJOY Your ' + p2 + ' coins' )
    }
    else if(p1 === p2)
    {
        confirm('Its a tie...no1 lose but no1 win. You guys both have ' + p1 + ' coins')
    }

}


