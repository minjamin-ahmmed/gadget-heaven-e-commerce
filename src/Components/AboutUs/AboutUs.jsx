import { useEffect, useState } from "react";


const AboutUs = () => {

        const [visible, setVisible] = useState(false);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setVisible(true);
          }, 300); // Delay before content appears
          return () => clearTimeout(timer);
        }, []);


    return (
        <div>
             <div className="bg-[#9538e2] py-8">
                <h1 className="text-center font-bold text-4xl text-white mb-4">About Us</h1>
                <p className="text-center lg:w-7/12 mx-auto text-white/80">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

             </div>


             <div className="max-w-4xl mx-auto p-6">
      
      <p className={`text-lg mb-4 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        Welcome to <strong>Gadget Heaven</strong>, your ultimate destination for all things tech! Founded in 2024, our mission is to bring you the latest and greatest gadgets that enhance your life, keep you connected, and elevate your everyday experiences.
      </p>
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-[#9538e2]">Our Passion</h2>
      <p className={`mb-4 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        Our team is made up of tech lovers and experts who are passionate about exploring new trends, discovering emerging technologies, and sharing our knowledge with you. We stay ahead of the curve by continuously researching the latest innovations and testing products to ensure we bring you only the best. Our goal is to simplify your shopping experience by providing detailed reviews, insightful articles, and expert recommendations.
      </p>
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-[#9538e2]">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2 transition-transform duration-200 hover:scale-105">
          <strong>Quality Assurance:</strong> We handpick each item in our store to ensure it meets our high standards for quality and functionality.
        </li>
        <li className="mb-2 transition-transform duration-200 hover:scale-105">
          <strong>Exceptional Customer Service:</strong> Our dedicated support team is here to assist you with any questions or concerns you may have before, during, or after your purchase.
        </li>
        <li className="mb-2 transition-transform duration-200 hover:scale-105">
          <strong>Competitive Prices:</strong> We strive to offer the best prices on the market, ensuring you get value for your money.
        </li>
        <li className="transition-transform duration-200 hover:scale-105">
          <strong>Community Engagement:</strong> We love hearing from our customers! Join our community on social media, where we share tips, tricks, and updates on the latest gadgets.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-[#9538e2]">Join Us on Our Journey</h2>
      <p className={`mb-4 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        As we grow, we aim to become a hub for tech enthusiasts and a source of inspiration for anyone looking to incorporate the latest gadgets into their lives. We invite you to explore our website, discover new products, and stay connected with us for the latest news and trends in technology.
      </p>
      <p className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        Thank you for visiting <strong>Gadget Heaven</strong>! We look forward to being a part of your tech journey.
      </p>
    </div>
    </div>
    );
};

export default AboutUs;