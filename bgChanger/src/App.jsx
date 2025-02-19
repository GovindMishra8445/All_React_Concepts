// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("olive");
//   return (
//     <div
//       className="w-full  h-screen duration-200"
//       style={{ backgroundColor: color }}
//     >
//       <div className=" fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-md">
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer "
//             style={{ backgroundColor: "red" }}
//             onClick={() => setColor("red")}
//           >
//             Red
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
//             style={{ backgroundColor: "green" }}
//             onClick={() => setColor("green")}
//           >
//             green
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
//             style={{ backgroundColor: "Brown" }}
//             onClick={() => setColor("Brown")}
//           >
//             Brown
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
//             style={{ backgroundColor: "Black" }}
//             onClick={() => setColor("Black")}
//           >
//             Black
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
//             style={{ backgroundColor: "Pink" }}
//             onClick={() => setColor("Pink")}
//           >
//             Pink
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer "
//             style={{ backgroundColor: "Purple" }}
//             onClick={() => setColor("Purple")}
//           >
//             Purple
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer "
//             style={{ backgroundColor: "yellow" }}
//             onClick={() => setColor("yellow")}
//           >
//             Yellow
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer "
//             style={{ backgroundColor: "Blue" }}
//             onClick={() => setColor("Blue")}
//           >
//             Blue
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer "
//             style={{ backgroundColor: "Orange" }}
//             onClick={() => setColor("Orange")}
//           >
//             Orange
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-black shadow-lg  cursor-pointer"
//             style={{ backgroundColor: "Silver" }}
//             onClick={() => setColor("Silver")}
//           >
//             Silver
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer "
//             style={{ backgroundColor: "Magenta" }}
//             onClick={() => setColor("Magenta")}
//           >
//             Magenta
//           </button>
//           <button
//             className=" outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
//             style={{ backgroundColor: " cream" }}
//             onClick={() => setColor(" cream")}
//           >
//             cream
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", hex: "red" },
    { name: "Green", hex: "green" },
    { name: "Brown", hex: "brown" },
    { name: "Black", hex: "black" },
    { name: "Pink", hex: "pink" },
    { name: "Purple", hex: "purple" },
    { name: "Yellow", hex: "yellow" },
    { name: "Blue", hex: "blue" },
    { name: "Orange", hex: "orange" },
    { name: "Silver", hex: "silver" },
    { name: "Magenta", hex: "magenta" },
    { name: "Cream", hex: "lightyellow" }, // Cream color fix
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-md">
          {colors.map(({ name, hex }) => (
            <button
              key={name}
              className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer transition-transform active:scale-95"
              style={{
                backgroundColor: hex,
                color: ["yellow", "silver", "cream"].includes(
                  name.toLowerCase()
                )
                  ? "black"
                  : "white",
              }}
              onClick={() => setColor(hex)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
