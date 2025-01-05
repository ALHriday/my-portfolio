
const Footer = () => {
    return (
        <footer className="flex flex-col text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-800 py-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-teal-500">AUH</h1>
                    <p>
                        Web Developer
                    </p>
                    <p>
                        Your Vision, My Code.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold">Contact</h1>
                    <p>
                        Phone: +880123456789
                    </p>
                    <p>
                        Email: Example123@gmail.com
                    </p>
                </div>
            </div>
            <div className="py-6 bg-black">
                <p className="text-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;