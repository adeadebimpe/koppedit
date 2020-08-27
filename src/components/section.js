import React from 'react'

const Section = ({ className, children }) => {
    return (
        <section className={className} id={className}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default Section
