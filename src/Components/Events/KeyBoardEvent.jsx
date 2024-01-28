import React, { useEffect, useState } from 'react';

export default function MovementGame() {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const moveSize = 10; // The size of each movement

    useEffect(() => {
        const handleKeyPress = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    setPosition(prev => ({ ...prev, y: Math.max(prev.y - moveSize, 0) }));
                    break;
                case 'ArrowDown':
                    setPosition(prev => ({ ...prev, y: Math.min(prev.y + moveSize, window.innerHeight - 50) }));
                    break;
                case 'ArrowLeft':
                    setPosition(prev => ({ ...prev, x: Math.max(prev.x - moveSize, 0) }));
                    break;
                case 'ArrowRight':
                    setPosition(prev => ({ ...prev, x: Math.min(prev.x + moveSize, window.innerWidth - 50) }));
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div>
            <p>Use arrow keys to move the box around!</p>
            <div
                style={{
                    position: 'absolute',
                    top: position.y,
                    left: position.x,
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'blue',
                }}
            />
        </div>
    );
}
