'use client';
import React from 'react';

interface NavbarCurveProps {
    color?: string;
    className?: string;
}

export const NavbarCurve = ({ color = "#FFFFFF", className }: NavbarCurveProps) => {
    return (
        <svg
            width="128"
            height="34"
            viewBox="0 0 128 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ display: 'block' }}
        >
            <path
                d="M127.186 0C89.7119 0 98.7148 33.9793 63.5932 33.9793C28.4717 33.9793 37.4746 0 0 0C18.7373 0 28.4717 0 63.5932 0C98.7148 0 102.203 0 127.186 0Z"
                fill={color}
            />
            <path
                d="M89.7119 0C89.7119 11.9896 78.0182 21.709 63.5932 21.709C49.1683 21.709 37.4746 11.9896 37.4746 0C50 0 49.1683 0 63.5932 0C78.0182 0 78 2.77433e-06 89.7119 0Z"
                fill={color}
            />
        </svg>
    );
};