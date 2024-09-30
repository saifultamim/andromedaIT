
import realState from '../../../public/images/industry/realEstate.png'
import financialService from '../../../public/images/industry/financialService.jpg'
import ecommerce from '../../../public/images/industry/ecommerce.png'
import transportation from '../../../public/images/industry/transportation.jpg'
import publicSector from '../../../public/images/industry/publicSector.jpg'
import itServices from '../../../public/images/industry/itServices.png'
import entertainment from '../../../public/images/industry/entertainment.png'
import manufacturing from '../../../public/images/industry/manufacturing.jpg'
const industry = [
  {
      "id":1,
      "title":"Real Estate",
      "image":realState
  },
  {
      "id":2,
      "title":"Financial Services",
      "image":financialService
  },
  {
      "id":3,
      "title":"E-Commerce",
      "image":ecommerce
  },
  {
      "id":4,
      "title":"Transportation",
      "image":transportation
  },
  {
      "id":5,
      "title":"Public Sector",
      "image":publicSector
  },
  {
      "id":6,
      "title":"IT Services",
      "image": itServices
  },
  {
      "id":7,
      "title":"Entertainment",
      "image":entertainment
  },
  {
      "id":8,
      "title":"Manufacturing",
      "image":manufacturing
  }
]
const Section4 = () => {
   
    return (
       
            <div className='md:pl-20 lg:pl-20 '>
           
           <div className=' mt-16 mb-16'>
               <h2 className=' text-4xl text-black font-bold  flex lg:justify-start md:justify-start  justify-center'>         
                Industry Expertise</h2>
               <p className='text-2xl text-black mt-6 ml-4 md:ml-0 lg:ml-0'>Discover yours today! We have expertise creating  <br/> <span className='mt-2'>creative solutions for a range of industries.</span></p>  
           </div>
          
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
           {
            industry.map((data)=>
                <div key={data.id} className="card mx-auto  w-48 md:w-60 lg:w-60 h-72 mb-14 bg-white shadow-2xl ">
                <figure className="px-10 pt-10">
                  <img
                    src={data.image}
                    alt="Shoes"
                    className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-black font-extrabold">{data.title}</h2> 
                </div>
              </div>
            )
           }
            </div>
        </div>
    );
};

export default Section4;