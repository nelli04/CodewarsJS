function transpose(matrix) {
    return matrix[0].map((_, i) => {
        return matrix.map((_, j) => {
            return matrix[j][i]
        })
    })
}