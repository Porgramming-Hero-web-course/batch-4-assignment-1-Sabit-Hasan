{
    //
    interface Circle {
        shape: "circle";
        radius: number
    };

    interface Rectangle {
        shape: "rectangle";
        width: number;
        height: number
    };

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (shape: Shape): number | undefined => {
        if ("radius" in shape) {
            const area = Math.PI * Math.pow(shape.radius, 2)
            return Math.round(area * 100) / 100;
        } else if ("width" in shape) {
            return shape.width * shape.height;
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    console.log(circleArea);
    console.log(rectangleArea);

    // 
}