import React from 'react';

function Feature() {
  return (
    <div className='bg-white text-green-900 py-20'>
      <div className='container grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-5'>
        
        {/* Interactive 3D Models */}
        <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
  <div className='flex items-center gap-5'>
    {/* Custom 3D model icon */}
    <div className='w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center'>
      <div className='w-6 h-6 bg-white rounded-md transform rotate-45'></div>
    </div>
    <p className='md:text-lg font-bold'>
      Interactive <br />
      3D Models
    </p>
  </div>
  <p className='text-sm font-semibold font-Poppins'>
    Explore medicinal plants in interactive 3D models, allowing you to view them from every angle.
  </p>
</div>



        {/* Search and Filter */}
        <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
          <div className='flex items-center gap-5'>
            <i className="ri-search-eye-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className='md:text-lg font-bold'>
              Search & <br />
              Filter
            </p>
          </div>
          <p className='text-sm font-semibold font-Poppins'>
            Search and filter plants based on their name, habitat, uses, and field (Ayurveda, Homeopathy, etc.).
          </p>
        </div>

        {/* Multimedia */}
        <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
          <div className='flex items-center gap-5'>
            <i className="ri-gallery-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className='md:text-lg font-bold'>
              Multimedia
            </p>
          </div>
          <p className='text-sm font-semibold font-Poppins'>
            Enjoy rich multimedia like images and videos to learn more about each plant.
          </p>
        </div>

        {/* Learning Resources */}
        <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
          <div className='flex items-center gap-5'>
            <i className="ri-book-open-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className='md:text-lg font-bold'>
              Learning <br />
              Resources
            </p>
          </div>
          <p className='text-sm font-semibold font-Poppins'>
            Access learning resources such as blogs and quizzes to deepen your knowledge of herbal plants.
          </p>
        </div>

        {/* Bookmarking and Notes */}
        <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
          <div className='flex items-center gap-5'>
            <i className="ri-bookmark-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className='md:text-lg font-bold'>
              Bookmark & <br />
              Notes
            </p>
          </div>
          <p className='text-sm font-semibold font-Poppins'>
            Bookmark plants, take notes, and share your discoveries on social platforms.
          </p>
        </div>

        {/* Virtual Tours */}
        <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
          <div className='flex items-center gap-5'>
            <i className="ri-road-map-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className='md:text-lg font-bold'>
              Virtual <br />
              Tours
            </p>
          </div>
          <p className='text-sm font-semibold font-Poppins'>
            Embark on guided virtual tours with different themes to explore the world of herbal plants.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Feature;
