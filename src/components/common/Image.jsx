import React from 'react';

const Image = ({ src, alt, fill, className, ...props }) => {
    if (fill) {
        return (
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover ${className || ''}`}
                {...props}
            />
        );
    }
    return <img src={src} alt={alt} loading="lazy" decoding="async" className={className || ''} {...props} />;
};

export default Image;
