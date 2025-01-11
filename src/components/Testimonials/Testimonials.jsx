import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('./testmonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, []);

    return (
        <>
            <div>
                <h2 className="text-4xl font-semibold text-center mt-10">Testimonials</h2>
                <Swiper pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="mySwiper">
                    {
                        testimonials.map((testimonial, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="card bg-base-100 shadow-xl p-6">
                                    <div className="card-body flex justify-center items-center">
                                        <h2 className="card-title text-pink-500">{testimonial.name}</h2>
                                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                                        <p className="mt-2 text-gray-800">{testimonial.feedback}</p>
                                        <div className="mt-3">
                                            <Rating
                                                style={{ maxWidth: 150 }}
                                                value={testimonial.rating}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Testimonials;
