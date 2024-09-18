import React from 'react'

function Tour() {
  const themes={
    Giloy:{
      image:"/assets/img/Giloy.png",
      title:"Giloy",
      description:"Known as the root of immortality, Giloy is widely used in Ayurvedic medicine to boost immunity, treat fever, and detoxify the body."
    },
    Turmeric:{
      image:"/assets/img/Turmeric.png",
      title:"Turmeric",
      description:"Rich in anti-inflammatory and antioxidant properties, Turmeric is a well-known natural remedy for enhancing skin health, reducing acne, and promoting a glowing complexion."
    },
    Amla:{
      image:"/assets/img/amla.png",
      title:"Amla",
      description:"Amla, or Indian Gooseberry, is a powerful ingredient for hair health, used to strengthen hair follicles, prevent dandruff, and promote hair growth."
    },
    Moringa:{
      image:"/assets/img/moringa.png",
      title:"Moringa",
      description:"Known as a superfood, Moringa is rich in vitamins and antioxidants, making it an excellent herbal remedy for boosting the immune system and overall health."
    }
  }
  return (
    <div className='w-full py-7'>
        <div className='flex flex-col gap-3 items-center text-center mb-16'>
                <h2 className='text-yellow-500 text-3xl font-bold'>Themes</h2>
                <p className='max-w-2xl font-Satisfy text-2xl'>Explore diverse plant themes that transform your space into a vibrant tapestry of nature's beauty and healing.</p>
        </div>
        <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2'>

        </div>
    </div>
  )
}

export default Tour