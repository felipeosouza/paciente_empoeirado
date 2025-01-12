const clamp = (screenBasedSize: number, maxSize: number) => {
    const size = screenBasedSize < maxSize? screenBasedSize : maxSize
    return size
}

export { clamp };