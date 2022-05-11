routine = [
    {text: 'Push ups x 10', reps: 3},
    {text: 'Squats x 10', reps: 3},
    {text: 'Lunges x 10', reps: 3},
]

setItemBlocks = function() {
    item_block_list = document.getElementById('item_block_list')
    item_block_template = document.getElementById('item_block_template')

    routine.forEach(item => {
        item_block = item_block_template.cloneNode(true).content
        item_text = item_block.querySelector('.item-text')
        item_reps_total = item_block.querySelector('.item-reps-total')
        item_reps_done = item_block.querySelector('.item-reps-done')
        item_reps_togo = item_block.querySelector('.item-reps-togo')

        item_text.textContent = "[" + item.text + "]"
        item_reps_total.value = item.reps
        item_reps_togo.value = item.reps

        item_block_list.append(item_block)
    })
}

setRepDone = function(elem) {
    item_block = elem.parentElement
    reps = item_block.querySelector('.item-reps-total')
    reps_done = item_block.querySelector('.item-reps-done')
    reps_togo = item_block.querySelector('.item-reps-togo')

    if (reps_togo.value > 0) {
        reps_done.value = parseInt(reps_done.value) + 1
        reps_togo.value = parseInt(reps_togo.value) - 1

        if (reps_togo.value == 0) elem.disabled = true
    }
}

setItemBlocks()