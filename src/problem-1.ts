{
    // 
    const sumArray = (numbers: number[]): number => {
        return numbers.reduce((acc, number) => acc + number, 0);
    }

    console.log(sumArray([1, 2, 3, 4, 5]));
    // 
}