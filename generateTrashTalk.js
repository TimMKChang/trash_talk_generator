// define random index
function randomIndex(length) {
  return Math.floor(Math.random() * length)
}

// define generateTrashTalk function
function generateTrashTalk(target) {
  if (target === undefined) {
    return 'Please choose one target first.'
  }

  const targetTranslate = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const trashTalk = `身為一個${targetTranslate[target]}，${task[target][randomIndex(task[target].length)]}，${phrase[randomIndex(phrase.length)]}吧！`

  return trashTalk
}

// invoke generateTrashTalk function
// generateTrashTalk(target)

// export
module.exports = generateTrashTalk
