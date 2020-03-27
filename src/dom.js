window.dom = {
    create(string) {
        const container = document.createElement("template")
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node, node2) {
        node2.parentNode.insertBefore(node, node2.nextSibling)
    },
    before(node, node2) {
        node2.parentNode.insertBefore(node, node2)
    },
    append(node, parent) {
        parent.appendChild(node)
    },
    wrap(node, child) {
        dom.before(node, child)
        dom.append(child, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        let x = node.firstChild
        let arry = []
        while (x) {
            arry.push(dom.remove(x))
            x = node.firstChild
        }
        return arry
    },
    attr(node, name, value) {//重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        }
        if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {//适配
        if ('innerText' in node) {
            node.innerText = string//兼容低版本ie
        } else {
            node.textContent = string//兼容高版本ie\firefox\chorme
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        }
        if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
            //dom.style(test,'color','grey')
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        contains(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    get(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    // siblings(node) {
    //     let x = node.parentNode.children
    //     let arry = []
    //     for (let i = 0; i < x.length; i++) {
    //         if (x[i] !== node) {
    //             arry.push(x[i])
    //         }
    //     }
    //     return arry
    // },
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(item => item !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
            //等价于fn(nodeList[i])
        }
    },
    index(node) {
        let list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
};
