"use client"

import { useState, useEffect } from "react"
import "./Testimonials.css"

// Mock data - in a real app, this would come from an API
const testimonials = [
  {
    id: 1,
    name: "Rupa Devi",
    craft: "Kantha Embroidery Artist",
    image: "/images/testimonials/rupa.jpg",
    text: "Karmasathi has transformed my life. I can now sell my Kantha work directly to customers worldwide and earn a fair price. The micro-loan helped me buy better materials and expand my business.",
    location: "Bolpur, West Bengal",
  },
  {
    id: 2,
    name: "Manik Sarkar",
    craft: "Wooden Mask Carver",
    image: "/images/testimonials/manik.jpg",
    text: "Before joining Karmasathi, I was struggling to find customers for my wooden masks. Now I receive orders from all over India and even abroad. The platform has given visibility to our traditional craft.",
    location: "Purulia, West Bengal",
  },
  {
    id: 3,
    name: "Lakshmi Mondal",
    craft: "Patachitra Artist",
    image: "/images/testimonials/lakshmi.jpg",
    text: "The skill development workshops helped me blend traditional Patachitra techniques with modern designs. My sales have increased by 70% since joining Karmasathi. I've also connected with other artists for collaborations.",
    location: "Nadia, West Bengal",
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  return (
    <div className="testimonials-container">
      <div className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div className={index === current ? "testimonial-slide active" : "testimonial-slide"} key={testimonial.id}>
            <div className="testimonial-content">
              <div className="testimonial-img-container">
                <img
                  src={testimonial.image || "/placeholder.svg?height=150&width=150"}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
              </div>
              <div className="testimonial-text">
                <p className="testimonial-quote">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.craft}</p>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-controls">
        <button className="testimonial-btn prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={index === current ? "testimonial-dot active" : "testimonial-dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
        <button className="testimonial-btn next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Testimonials

