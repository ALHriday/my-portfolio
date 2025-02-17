
const Contact = () => {

    return (
        <div className="sm:w-3/5 mx-4 sm:mx-auto p-4 my-6 bg-slate-800 rounded-md">
            <div>
                <h1 className="text-4xl font-bold pt-4 text-center text-slate-200">Get In <span className="text-teal-600">Touch</span></h1>
            </div>
            <form className="py-2 flex flex-col gap-2">
                <label className="text-white">Name:</label>
                <input className="p-2 rounded-md" type="text" />
                <label className="text-white">Email:</label>
                <input className="p-2 rounded-md" type="email" name="email" id="" />  
                <label className="text-white">Your Text:</label>
                <textarea className="p-2 rounded-md min-h-[100px] max-h-[200px]" name="textarea" id=""></textarea>
                <button className="btn mt-2 text-xl">Send</button>
           </form>
        </div>
    );
};

export default Contact;