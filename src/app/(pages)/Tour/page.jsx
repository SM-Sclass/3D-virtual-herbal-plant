import React from 'react'
import Themecard from "../../component/Themecard"

function Tour() {
  const themes = [
    {
      name: "Medicinal",
      cards: {
        image: "/assets/img/giloy.png",
        title: "Giloy",
        description: "Known as the root of immortality, Giloy is widely used in Ayurvedic medicine to boost immunity, treat fever, and detoxify the body.",
        backgroundColor: "#D4B86C"
      }
    },
    {
      name: "Skincare",
      cards: {
        image: "/assets/img/turmeric1.png",
        title: "Turmeric",
        description: "Rich in anti-inflammatory and antioxidant properties, Turmeric is a well-known natural remedy for enhancing skin health, reducing acne, and promoting a glowing complexion.",
        backgroundColor: "#FF6F61"
      }
    },
    {
      name: "Haircare",
      cards: {
        image: "/assets/img/amla.png",
        title: "Amla",
        description: "Amla, or Indian Gooseberry, is a powerful ingredient for hair health, used to strengthen hair follicles, prevent dandruff, and promote hair growth.",
        backgroundColor: "#4A2C2A"
      }
    },
    {
      name: "Immunity Booster",
      cards: {
        image: "/assets/img/moringa.png",
        title: "Moringa",
        description: "Known as a superfood, Moringa is rich in vitamins and antioxidants, making it an excellent herbal remedy for boosting the immune system and overall health.",
        backgroundColor: "#008080"
      }
    }
  ]
  
  return (
    <div className='w-full py-7 bg-green-950'>
      <div className='flex flex-col gap-3 items-center text-center mb-16'>
        <h2 className='text-yellow-500 text-3xl font-bold'>Themes</h2>
        <p className='max-w-2xl font-Satisfy text-2xl'>
          Explore diverse plant themes that transform your space into a vibrant tapestry of nature's beauty and healing.
        </p>
      </div>
      <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2'>
        {themes.map((theme) => (
          <div key={theme.name} className='space-y-4 p-5 hover:shadow-2xl hover:-translate-y-1 bg-white rounded-xl' style={{ backgroundColor: theme.cards.backgroundColor }}>
            <div className="text-2xl text-center font-bold text-white" >{theme.name}</div>
            <div className="container flex items-center justify-center">
              <Themecard
                key={theme.cards.title}
                image={theme.cards.image}
                title={theme.cards.title}
                description={theme.cards.description}
                backgroundColor={theme.cards.backgroundColor}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tour
