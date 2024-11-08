//Task-1. დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს. არ გამოიყენო string.replace() ფუნქცია.

const find = (string, word, change) => {
    if (!string.includes(word)) {
        return string
    } else {
        const start = string.indexOf(word)
        const end = start + word.length
        let newString = ''

        if (start !== 0) {
            newString = find(string.slice(0, start) + change + string.slice(end), word, change)
            return newString
        } else {
            newString = find(change + string.slice(end), word, change)
            return newString
        }
    }

}


console.log('ვახდენთ სიტყვა "ტექსტი"-ს ცვლილებას მონაცემით. ორიგინალი: ტექსტი შეიცვლება მიუხედავად იმისა, ტექსტი წინადადების თავში წერია, შუაში თუ ბოლოში. ტექსტი.')
console.log(find('ტექსტი შეიცვლება მიუხედავად იმისა, ტექსტი წინადადების თავში წერია, შუაში თუ ბოლოში. ტექსტი.', 'ტექსტი', 'მონაცემი'))

