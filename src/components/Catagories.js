import React from 'react'

const Catagories = () => {
    const data = [
        {
            "id": "6571f2cbf2bcdd16387e06ad",
            "index": 0,
            "picture": "https://i.ibb.co/qCR41Kk/main-dish.png",
            "name": "Main Dish",
            "quantity": "86 dishes"
        },
        {
            "id": "6571f2cb11caf2d8fe34f2f9",
            "index": 1,
            "picture": "https://i.ibb.co/XtYWWqq/breakfast.png",
            "name": "Break Fast",
            "quantity": "12 break fast"
        },
        {
            "id": "6571f2cb64ff37670aca070b",
            "index": 2,
            "picture": "https://i.ibb.co/xMTQfQH/desert.png",
            "name": "Dessert",
            "quantity": "48 desert"
        },
        {
            "id": "6571f2cb4b0f6742d86e06bc",
            "index": 3,
            "picture": "https://i.ibb.co/fXCKQqW/browse-all.png",
            "name": "Browse All",
            "quantity": "255 items"
        }
    ]
    return (
        <div className='my-8'>
            <div className='text-center my-8'>
                <p className='text-sm text-[#FF6868] font-bold tracking-wider mb-8'>Customer Favorites</p>
                <h3 className="font-bold text-2xl my-6 md:text-3xl lg:text-5xl">Popular Catagories</h3>
            </div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center my-16'>
                {
                    data.map(item => <div
                        key={item.id}
                        className='w-[250px] h-[250px] shadow-xl rounded-lg flex flex-col justify-center items-center'
                    >
                        <div className='h-40 w-40 bg-[#C1F1C6] rounded-full flex justify-center items-center'>
                            <img src={item.picture} alt={item.name} />
                        </div>
                        <h4 className='font-semibold my-2 text-xl'>{item.name}</h4>
                        <p className='text-sm font-medium'>({item.quantity})</p>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Catagories