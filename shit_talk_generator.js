function randomChoose(putArrayHere) {
    let arrayLength = putArrayHere.length
    let finalChoice  = putArrayHere[Math.floor(Math.random() * arrayLength)]
    return finalChoice
}

function shitTalkGenerator(target) {
    const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
    }

    const phrase = ['很簡單','很容易','很快','很正常']
    let finalTarget = ''
    let shitTalk = ''

    // check the target
    if (target === 'engineer') {
        finalTarget = '工程師'
    } else if (target === 'designer') {
        finalTarget = '設計師'
    } else if (target === 'entrepreneur') {
        finalTarget = '創業家'
    } else {
        shitTalk = '<h4 class="text-danger">您還沒選擇角色喔!!</h4>'
        return shitTalk
    }

    // choose one from the task array randomly     
    let finalTask = randomChoose(task[target])
    
    // choose one from the phrase randomly  
    let finalPhrase = randomChoose(phrase)
    
    // return the shit-talk
    shitTalk = `<h4>身為一個${finalTarget}，如果${finalTask}，應該${finalPhrase}!!</h4>`
    return shitTalk
}

// module
module.exports = shitTalkGenerator