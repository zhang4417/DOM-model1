let div1 = dom.create('<div>新的DIV</div>')
console.log(div1)
console.log(box)
//dom.after(div1, test)
//dom.before(div1, test)
dom.append(div1, box)
//dom.wrap(div1, test)
//dom.remove(test)
//console.log(dom.empty(box))


dom.attr(div1, "zhu", "ly")
console.log(dom.attr(div1, "zhu"))
dom.text(test, "将测试替换为测试1")

dom.html(div1, "<p>替换为HTML文本</p>")
console.log(dom.html(div1))

dom.style(test, "color", "red")
console.log(dom.style(test, 'color'))
dom.style(test, { border: '2px solid red', backgroundColor: '#ccc' })

dom.class.add(test, 'sx')
//dom.class.remove(test, 'sx')
console.log(dom.class.contains(test, 'sx'))

const fn = () => console.log("点击一下")
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const boxDiv = dom.get('#box')[0]
console.log(boxDiv)
const testDiv = dom.get('#test2', boxDiv)[0]
console.log(testDiv)

console.log(dom.siblings(test))

console.log(dom.next(test))
console.log(dom.previous(test))

dom.each(dom.children(box), (i) => dom.style(i, 'color', 'red'))

console.log(dom.index(test2))

