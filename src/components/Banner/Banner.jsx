
const Banner = () => {
    const name = `
          AL Hriday
          => FontEnd Developer...
          => Your Vision, My Code.
    `;
    const rotateStyle = {
        transitionDuration: '15s',
        transform: 'rotate(360deg)'
    }
    return (
        <div className="grid grid-cols-2 p-4">
            <div className="flex flex-col justify-center items-start gap-3">
                <h1 className="text-4xl font-bold"><span className="text-teal-500">FontEnd</span> Developer</h1>
                <p className="text-xl">
                    Code the View, Shape the World. <br />
                    {/* Pixels with a Purpose. <br />
                    Turning Designs into Delight. <br />
                    Crafting Interfaces, One Line at a Time. <br />
                    Where Creativity Meets Code. <br />
                    Building Beautiful User Journeys. <br />
                    Your Vision, My Code. <br />
                    Frontlines of the Web Experience. <br />
                    Design the Future, Code the Present. <br />
                    Bringing Ideas to the Browser. */}
                </p>
                <div className="flex gap-2">
                    <div className="w-9 h-9 rounded-full">
                        <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
                    </div>
                    <div className="w-9 h-9 rounded-full">
                        <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="" />
                    </div>
                    <div className="w-9 h-9 rounded-full">
                        <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" />
                    </div>
                    <div className="w-9 h-9 rounded-full">
                        <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=E2KVOMc77Geo&format=png&color=000000" alt="" />
                    </div>
                    {/* <button className="btn rounded-full bg-teal-700 text-slate-100">btn 1</button>
                    <button className="btn rounded-full">btn 2</button>
                    <button className="btn rounded-full">btn 3</button>
                    <button className="btn rounded-full">btn 4</button> */}
                </div>
                <div className="mt-1">
                    <button className="btn btn-sm bg-teal-700 text-slate-200">Download Resume</button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="p-6 shadow-xl rounded-full relative w-60 h-60 bg-teal-600">
                    <div style={rotateStyle} className="w-48 h-48 shadow-xl rounded-full  bg-teal-500">
                        <p className="w-10 h-10 shadow-lg rounded-full bg-teal-800 border border-white"></p>
                    </div>
                    <div className="shadow-lg rounded-full w-48 h-48  absolute top-[10%] left-[10%] p-4">

                        <img title={name} className="w-full h-full rounded-full hover:border-2" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="relative">
                            <div className="bg-green-500 w-4 h-4 rounded-full absolute border-2 bottom-3 right-5"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;