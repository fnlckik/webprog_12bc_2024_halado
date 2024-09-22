function solveQuadratic(a, b, c) {
    const D = b*b - 4*a*c;
    if (D < 0) {
        return {};
    } else if (D === 0) {
        return {x: -b/(2*a)};
    } else {
        const gyokD = Math.sqrt(D);
        return {
            x1: (-b+gyokD)/(2*a),
            x2: (-b-gyokD)/(2*a)
        };
    }
}