// * Create the function factorial here
function factorial(n) {
    if (n < 2) {
        return 1;
    }

    return n * factorial(n - 1);
}

//  Calculate the Area of a rectangle.

function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}

//  Calculate the perimeter of a rectangle.

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
}

function main() {
    const PI = Math.PI;
    let r = parseFloat(readLine());
    // Print the area of the circle:
    let area = PI * Math.pow(r, 2);
    console.log(area);

    // Print the perimeter of the circle:
    var perimeter = 2 * PI * r;
    console.log(perimeter);
}