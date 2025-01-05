
const Banner = () => {
    const name = `
          Alauddin Hriday
          * FontEnd Developer...
          * Your Vision, My Code.
    `;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-6 md:gap-0">
            <div className="flex flex-col order-2 md:order-1 justify-center items-center md:items-start gap-3">
                <h1 className="text-4xl font-bold"><span className="text-teal-500">Web</span> Developer</h1>
                <p className="text-xl">
                    Building Beautiful User Journeys. <br />
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
                        <a href="https://web.facebook.com">
                            <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
                        </a>
                    </div>
                    <div className="w-9 h-9 rounded-full">
                        <a href="https://www.instagram.com">
                            <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="" />
                        </a>

                    </div>
                    <div className="w-9 h-9 rounded-full">
                        <a href="https://www.linkedin.com">
                            <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" />
                        </a>
                    </div>
                    <div className="w-9 h-9 rounded-full">
                        <a href="https://github.com">
                            <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=E2KVOMc77Geo&format=png&color=000000" alt="" />
                        </a>
                    </div>
                </div>
                <div className="mt-1">
                    <button className="btn btn-sm bg-teal-700 text-slate-200">Download Resume</button>
                </div>
            </div>

            <div className="flex justify-center items-center order-1 md:order-2">
                <div className="p-6 shadow-xl rounded-full relative w-60 h-60 bg-teal-600">
                    <div className="w-48 h-48 shadow-xl rounded-full  bg-teal-500">
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