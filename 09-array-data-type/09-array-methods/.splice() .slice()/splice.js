// .splice(startIndex, NElements, newValue)
// remove, cut, insert elements
const brands = ['Nokia', 'Apple', 'Samsung', 'Xiaomi'];


// remove element from startIndex NElements
const brandsFragment = brands.splice(2, 2);             // [ 'Samsung', 'Xiaomi' ]
brands;                                                 // [ 'Nokia', 'Apple' ]


// insert elements from startIndex, 0, elements
brands.splice(0, 0, 'Huawei');                          // [ 'Huawei', 'Nokia', 'Apple' ]

// insert element at the end of Array
brands.splice(brands.length, 0, 'google');              // [ 'Huawei', 'Nokia', 'Apple', 'google' ]


// remove elements from startIndex N elements and insert new elements at the same place
const newBrandsFragment = brands.splice(2, 1, 'HTC');   // [ 'Apple' ]
brands;                                                 // [ 'Huawei', 'Nokia', 'HTC', 'google' ]