const MessageForm = () => {
    return (
        <div className="min-h-screen bg-[#E5E5E5] flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-2xl p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Let us handle your <br /> project, professionally.
                </h2>

                <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full col-span-2"
                        rows="4"
                    ></textarea>

                  <input type="submit" value="Send Message" className="btn bg-[#F63E7B] text-white" />
                </form>
            </div>
        </div>
    );
};

export default MessageForm;