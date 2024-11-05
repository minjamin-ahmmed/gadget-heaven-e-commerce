import { useLoaderData } from "react-router-dom";
import { ComposedChart, Bar, Area, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const data = useLoaderData()

    console.log(data);
    
    const transformedData = data.map(item => ({
        productName: item.product_title,
        price: item.price,
        rating: item.rating,
      }))



    return (
        <div>
               <div className="bg-[#9538e2] py-8">
                <h1 className="text-center font-bold text-4xl text-white mb-4">Statistics</h1>
                <p className="text-center lg:w-7/12 mx-auto text-white/80">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

             </div>

             <div className="bg-[#ECECEC] pb-10">

                    <h1 className="text-[#1c1c1c] font-bold text-3xl w-11/12 mx-auto mb-8 pt-5">Statistics</h1>




     <div style={{ width: '90%', height: 500, margin: '0 auto', padding: '0px 20px', paddingBottom:"64px", paddingTop:"10px", borderRadius:'20px', background:'white' }}>
      <h2 className="text-xl text-center font-bold my-5 text-[#1c1c1cce]">Price vs Product Name</h2>
      <ResponsiveContainer>
        <ComposedChart
          data={transformedData}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis  />
          <YAxis label={{ value: "Price", angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Legend />
          
        
          <Area type="monotone" dataKey="price" fill="#9538e280" stroke="#8884d8" />

        
          <Bar dataKey="price" barSize={35} fill="#9538E2" />

         
          <Scatter dataKey="rating" fill="red" />

        </ComposedChart>
      </ResponsiveContainer>
    </div>

                    {/* {
                        data.map(item => <Chart key={item.id} item={item}></Chart>)
                    } */}
             </div>
        </div>
    );
};

export default Statistics;