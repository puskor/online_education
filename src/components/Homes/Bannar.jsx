import Link from "next/link";

const Banner = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
            <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Learn Without Limits 🚀
                    </h1>
                    <p className="text-lg text-gray-200 mb-6">
                        Join thousands of learners and upgrade your skills with top-quality
                        courses from industry experts. Start your journey today!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/courses">
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                                See Courses
                            </button>
                        </Link>

                        <Link href="/signup">
                            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <img className="w-full rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;