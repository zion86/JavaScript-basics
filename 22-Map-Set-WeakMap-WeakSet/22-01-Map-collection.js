// Map is collection with key - value. Key can have various data types

const mapCollection = new Map();                // Map(0)

//create new pair: key, value
mapCollection.set('name', 'Alex');              // Map(1) {"name" => "Alex"}
mapCollection.set((num) => num, 33);            // Map(2) {"name" => "Alex", ƒ => 33}
mapCollection.set(true, 'boolean true');        // Map(3) {"name" => "Alex", ƒ => 33, true => "boolean true"}