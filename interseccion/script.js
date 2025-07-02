function interseccion(arr1, arr2) {
    let equalData = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let exist = false;
                for (let l = 0; l < equalData.length; l++) {
                    if (arr1[i] === equalData[l]) {
                        exist = true;
                    }
                }
                if (!exist) {
                    equalData.push(arr1[i]);
                }
            }
        }
    }
    console.log(equalData);
}

interseccion([1, 2, 3, 4], [3, 4, 5, 6]);
interseccion(["a", "b", "c"], ["c", "d", "a"]);
interseccion([1, 2, 2, 3], [2, 2, 4]);
interseccion([], [1, 2 , 3]);