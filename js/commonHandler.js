function makeClone(element, numberCopy = 0, classAppend) {
    for (let i = 0; i < numberCopy; i++) {
        let clone = element.clone()
        if (i % 2 === 0) {
            clone.addClass(classAppend)
        }
        clone.appendTo(element.parent())
    }
}