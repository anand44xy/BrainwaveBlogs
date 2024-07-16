import React from 'react'
import { FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import { FaClock } from 'react-icons/fa6';
import SlidBar from './SlidBar';

const SingleBlog = () => {
    const data = useLoaderData();
    const { title, image, category, author, published_date, content, reading_time } = data[0];
    
    return (
        <div className='py-40 bg-white text-center text-black px-4'>
            <h2 className='text-5xl lg:text-7xl leading-snug mb-5'>Single Page Blog</h2>
            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-8'>
                {/* Blog details */}
                <div className='md:w-full'>
                    <div>
                        <img src={image} alt="" className='w-full mx-auto rounded' />
                    </div>
                    <h3 className='text-3xl text-black mt-8 mb-4 cursor-pointer'>{title}</h3>
                    <p className='mb-3 text-gray-600'>
                        <FaUser className='inline-flex items-center mr-2' /> {author} | {published_date}
                    </p>
                    <p className='mb-3 text-gray-600'>
                        <FaClock className='inline-flex items-center mr-2' />{reading_time}
                    </p>
                    <p className='text-base text-gray-500 mb-5'>{content}</p>
                    <p className='text-base m-auto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis odit voluptatem minus commodi assumenda, laboriosam libero temporibus ea fuga non eligendi nisi aperiam ab quo, laudantium consequatur sit placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium expedita inventore, at voluptates suscipit neque adipisci modi aut quae magnam omnis? Porro, deserunt. Maxime ullam minus provident! Tempora, aliquid! Ex, ea quas architecto deleniti neque velit repudiandae et ab repellat magni soluta saepe doloribus iusto adipisci eligendi quidem fugit perferendis consequuntur eaque optio voluptates facere dolores aliquid laudantium. Nulla perspiciatis quos eum quo a quidem voluptatem reprehenderit, dicta ut doloribus illo minus facilis fugit saepe. Consequuntur perspiciatis voluptatibus, cumque, veritatis rem a blanditiis magnam amet inventore molestias officia voluptatem reiciendis asperiores optio ratione temporibus modi placeat eos iusto officiis. <br /> <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ex ea tenetur perspiciatis doloremque officia accusantium facilis quis est magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt in officiis accusantium iste aspernatur ipsa quaerat! Esse tenetur officia tempore qui earum. Laudantium exercitationem vero perspiciatis! Reprehenderit aspernatur non eos officia animi deserunt consequatur unde excepturi debitis modi. <br /> Itaque nobis nesciunt modi exercitationem, non in excepturi delectus commodi debitis laboriosam! Molestiae, necessitatibus. Perspiciatis, perferendis fuga ipsa sequi porro cumque amet minima quaerat deserunt numquam aspernatur ipsum laborum possimus itaque quod reiciendis labore. Quos odit fuga animi neque necessitatibus? Quos rerum perferendis necessitatibus, corrupti neque adipisci perspiciatis! Distinctio tenetur sit eos dolorem quas consequuntur dolores repudiandae ea iure. Harum, omnis quae! <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores ad, eos dolore aliquam eaque deleniti dignissimos voluptatibus voluptatum blanditiis fugiat adipisci, quam recusandae odio nemo obcaecati beatae labore fugit similique quasi incidunt. Fugiat magni hic vel ex consectetur esse error provident dicta modi quod nisi dolore quas, nam iure doloremque. Sapiente libero earum optio, dolore nostrum labore excepturi enim ullam dicta ipsa pariatur est illo blanditiis quidem quo, explicabo tenetur! Culpa accusamus mollitia ad illo a quos blanditiis aliquam? Consequatur quam vitae, nulla iure voluptatibus quod. Facilis vero non nisi, consectetur, molestias exercitationem beatae temporibus reprehenderit sunt, aliquid pariatur! <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde corrupti nihil, non, beatae fuga quia laudantium quas enim soluta quos nam quibusdam! Quod voluptatum veritatis nam maxime quaerat laudantium harum! <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam minus accusamus perferendis laborum voluptates cum possimus facere. Doloremque quod placeat cum voluptatem asperiores nostrum incidunt, tenetur sit, esse corrupti ratione maiores atque voluptatum facere totam tempora recusandae odio, hic maxime obcaecati magni reiciendis. Animi molestiae atque, minima nulla cum incidunt, impedit nam iste dignissimos unde enim repudiandae voluptates a, quo eum dolorum ea cupiditate consequuntur magnam recusandae! Rerum, labore ab asperiores reprehenderit ea nisi deleniti consequatur, cupiditate quos nobis, placeat quibusdam obcaecati. Numquam ipsum quibusdam nihil iusto voluptas reprehenderit, consequuntur perspiciatis omnis maxime amet quis magnam aliquid, voluptatum aliquam totam voluptatem sed quam atque mollitia corporis deleniti. Eum tenetur similique cum perferendis quos iste? Enim animi quisquam magni. Officia modi id sed, explicabo sunt ex dolorem odio voluptas velit, harum labore, ullam exercitationem! Molestiae facilis minima voluptates iusto illum accusamus? Deleniti iure ullam quas nulla debitis adipisci asperiores sequi repudiandae suscipit nihil soluta vel alias excepturi at saepe aperiam a quasi, quibusdam, aut odio ab maxime velit ipsa! Earum, non aperiam. <br /> <br /> Voluptate cumque eveniet temporibus velit doloribus rem doloremque voluptates amet quae distinctio voluptatum quos aut animi corporis unde debitis accusamus dolorum dolore, odio quasi. Illum, ad suscipit qui asperiores repudiandae possimus aperiam sapiente aut explicabo beatae quo accusantium veritatis est et laborum voluptates nihil eveniet, fugiat itaque minus libero iste consequatur quos excepturi. Possimus quibusdam dolorem sed sapiente unde reprehenderit laborum fugit dicta adipisci labore, omnis officia repellendus ut explicabo!
                    </p>
                </div>
                
                {/* sidebar */}
                <div className='md:max-w-smkkk '>
                    <SlidBar />
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
