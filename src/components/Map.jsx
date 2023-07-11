import React from 'react'

function Map() {
    return (
        <iframe className='google-map border-0 w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3442434528133!2d49.84419047590515!3d40.379062471445614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7a06b402f%3A0xd8897cf79ec36111!2s28%20Mall!5e0!3m2!1sen!2sus!4v1689068389511!5m2!1sen!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default React.memo(Map)