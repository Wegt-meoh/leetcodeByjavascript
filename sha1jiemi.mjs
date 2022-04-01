import sha from 'js-sha1'

let s = 'fl??{HELLO ?ORLD}'
let t = '89aa???0bfd7da1409???c8c76e0461aaf9?????'

function solve() {
    let res = ''
    for (let i = 23; i < 127; i++) {
        for (let j = 23; j < 127; j++) {
            for (let k = 23; k < 127; k++) {
                let p = 'fl' + String.fromCharCode(i) + String.fromCharCode(k) + '{HELLO ' + String.fromCharCode(j) + 'ORLD}'
                let u = sha(p)
                // console.log(p, u)
                if (judge(u, t)) {
                    res = p
                    return res
                }
            }
        }
    }
}

console.log(solve())

function judge(s, t) {
    if (s.length !== t.length) {
        console.log('length not match')
        return false
    }
    for (let i = 0; i < s.length; i++) {
        if (t[i] === '?') {
            continue
        } else {
            if (s[i] !== t[i]) {
                return false
            }
        }
    }
    return true
}
