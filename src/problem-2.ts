{
    // 
    const removeDuplicates = (numbers: number[]): number[] => {
        return numbers.filter((number, index) => numbers.indexOf(number) === index)
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    // 
}