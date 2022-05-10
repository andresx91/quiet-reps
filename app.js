qr_items = [
    {text: 'Streak - Eliminate 100', reps: 5},
    {text: 'Speed - Easy', reps: 10},
    {text: 'Streak - Eliminate 100', reps: 5},
    {text: 'Speed - Medium', reps: 10},
    {text: 'Streak - Eliminate 100', reps: 10},
    {text: 'Speed - Hard', reps: 10},
]

setItems = function() {
    item_list = document.getElementById('qr_items_list')
    item_template = document.getElementById('item_template')

    qr_items.forEach(element => {
        item = item_template.cloneNode(true).content
        item_text = item.querySelector('.qr-item-text')
        item_reps = item.querySelector('.qr-item-reps')
        item_reps_done = item.querySelector('.qr-item-reps-done')
        item_reps_togo = item.querySelector('.qr-item-reps-togo')

        item_text.textContent = "[" + element.text + "]"
        item_reps.value = element.reps
        item_reps_togo.value = element.reps

        item_list.append(item)
    })
}

setRepDone = function(elem) {
    qr_item = elem.parentElement
    reps = qr_item.querySelector('.qr-item-reps')
    reps_done = qr_item.querySelector('.qr-item-reps-done')
    reps_togo = qr_item.querySelector('.qr-item-reps-togo')

    if (reps_togo.value > 0) {
        reps_done.value = parseInt(reps_done.value) + 1
        reps_togo.value = parseInt(reps_togo.value) - 1

        if (reps_togo.value == 0) elem.disabled = true
    }
}

setItems()