'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { styled, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faSwimmingPool,
    faBell,
    faParking,
    faCalendarAlt,
    faHandsWash
} from '@fortawesome/free-solid-svg-icons';

import { NavButton } from './NavButton';
import { NavbarCurve } from './NavbarCurve';

const NavbarContainer = styled(Paper)(({ theme }) => ({
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#800040',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1100,
    bottom: 0,
    width: '100%',
    height: '70px',
    borderRadius: 0,
    overflow: 'visible',
    padding: '0 10px',
    [theme.breakpoints.up(480)]: {
        bottom: '20px',
        width: '90%',
        maxWidth: '700px',
        borderRadius: '24px',
    },
}));

const CurveWrapper = styled('div')<{ activeIndex: number; totalItems: number }>(
    ({ activeIndex, totalItems }) => {
        const slotWidth = 100 / totalItems;
        const midpoint = (slotWidth * activeIndex) + (slotWidth / 2);

        return {
            position: 'absolute',
            top: '-2px',
            left: `${midpoint}%`,
            transform: 'translateX(-50%)',
            width: '128px',
            display: 'flex',
            justifyContent: 'center',
            transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: 'none',
            zIndex: 1,
            '& .curve-svg': {
                width: '128px',
                height: '34px',
                display: 'block',
            }
        };
    }
);



export default function Navbar() {
    const [active, setActive] = useState(0);
    const router = useRouter();

    const menuItems = [
        { label: 'Home', icon: faHome, path: '/compendium' },
        { label: 'Reception', icon: faBell, path: '/compendium/reception' },
        { label: 'Leisure', icon: faSwimmingPool, path: '/compendium/leisure' },
        { label: 'Parking', icon: faParking, path: '/compendium/parking' },
        { label: 'Events', icon: faCalendarAlt, path: '/compendium/conferrence-and-events' },
        { label: 'House Keeping', icon: faHandsWash, path: '/compendium/house-keeping' },
    ];

    const handleNavigation = (index: number, path?: string) => {
        setActive(index);
        if (path) {
            router.push(path);
        }
    };

    return (
        <NavbarContainer elevation={10}>
            <CurveWrapper activeIndex={active} totalItems={menuItems.length}>
                {/* Ensure color matches your page background */}
                <NavbarCurve color="#ffffffff" className="curve-svg" />
            </CurveWrapper>

            {menuItems.map((item, i) => (
                <NavButton
                    key={i}
                    label={item.label}
                    icon={<FontAwesomeIcon icon={item.icon} />}
                    isActive={active === i}
                    onClick={() => handleNavigation(i, item.path)}
                />
            ))}
        </NavbarContainer>
    );
}