import bannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div>

             <div className="pb-40 lg:pb-[268px] bg-[#9538E2] relative">
             <h1 className="text-2xl lg:text-5xl
              text-center text-white font-bold pt-12 lg:w-8/12 lg:mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
             <p className="text-center mt-6 text-white font-normal lg:w-5/12 lg:mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
             
             <div className="flex justify-center mt-8 ">
                <button className="text-[#9538E2] bg-white font-bold py-[15px] px-[30px] rounded-[32px]">Shop Now</button>
             </div>
             </div>

                 <div
                    className="w-10/12 lg:w-[1062px] mx-auto border-2 border-white p-4 rounded-xl backdrop-blur-3xl absolute top-96 left-[8%] lg:left-[15%] z-50">

                        <img className="h-[300px] lg:h-[500px] w-full object-cover rounded-xl " src={bannerImg} alt="" />

             </div>
        </div>
    );
};

export default Banner;