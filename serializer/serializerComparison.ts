// ? This is just to check how *much* better my serialization actually is

const msgpack = require("msgpack-lite");
import serializer from "./serializer";

// encode speed test
const msgpackstart = performance.now();
for(let i = 0; i < 1000000; i++) {
    msgpack.encode("mashallah");
}
console.log(`msgpack-lite encode speed ${(performance.now() - msgpackstart)}ms`);

const mystart = performance.now();
for(let i = 0; i < 1000000; i++) {
    serializer.encode("mashallah");
}
console.log(`my encode speed ${(performance.now() - mystart)}ms`);

// size test
console.log(`msgpack-lite encode size ${msgpack.encode("mashallah").length} bytes`);

console.log(`my encode size ${serializer.encode("mashallah").length} bytes`);

const mss = msgpack.encode("mashallah");
const myy = serializer.encode("mashallah");

// decode speed test
const msgpackstartd = performance.now();
for(let i = 0; i < 1000000; i++) {
    msgpack.decode(mss);
}
console.log(`msgpack-lite decode speed ${(performance.now() - msgpackstartd)}ms`);

const mystartd = performance.now();
for(let i = 0; i < 1000000; i++) {
    serializer.decode(myy);
}
console.log(`my decode speed ${(performance.now() - mystartd)}ms`);

/*
const a = serializer.encode(["aaaaa", 123]);
console.log("serialized", a);
const b = serializer.decode(a);
console.log("deserialized", b)
*/

console.log("---------------------------------------------------------------------------------")

const a = [serializer.encode("aaa"), serializer.encode(1234)];
const b = msgpack.encode(["aaa", 1234]);

console.log("my", a);
console.log("msgpack", b.length);