
const Footer = () => {
    return (
        <footer className=" bg-white text-neutral-content p-10">
            <div className="text-center space-y-3 ">
                <h1 className="text-3xl font-bold text-[#09080F]">Gadget Heaven</h1>
                <p className="text-[#09080f90]">Leading the way in cutting-edge technology and innovation</p>
            </div>

            <div className="divider"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  lg:pl-16 lg:ml-10">
        <nav>
    <h6 className="text-xl font-bold text-[#09080F]">Services</h6>

   <div className="flex flex-col">
   <a className="link link-hover text-[#09080f90]">Product Support</a>
    <a className="link link-hover text-[#09080f90]">Order Tracking</a>
    <a className="link link-hover text-[#09080f90]">Shipping and Delivery</a>
    <a className="link link-hover text-[#09080f90]">Returns</a>
   </div>
  </nav>
  <nav>
    <h6 className="text-xl font-bold text-[#09080F]">Company</h6>

   <div className="flex flex-col">
   <a className="link link-hover text-[#09080f90]">About Us</a>
    <a className="link link-hover text-[#09080f90]">Careers</a>
    <a className="link link-hover text-[#09080f90]">Contact</a>
   </div>
  </nav>
  <nav>
    <h6 className="text-xl font-bold text-[#09080F]">Legal</h6>

   <div className="flex flex-col">
   <a className="link link-hover text-[#09080f90]">Terms of Service</a>
    <a className="link link-hover text-[#09080f90]">Privacy Policy</a>
    <a className="link link-hover text-[#09080f90]">Cookie Policy</a>
   </div>
  </nav>
</div>

</footer>

    );
};

export default Footer;