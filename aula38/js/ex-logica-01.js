function maior(n1, n2) {
    if (n1 > n2) {
        return n1
    } else if (n1 < n2) {
        return n2
    } else if (n1 == n2) {
        return n1 + n2
    }
}

console.log(maior(20, 20))