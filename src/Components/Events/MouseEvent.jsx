import React, { useState } from 'react';

export default function MouseEvent() {
    const [dragging, setDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y,
            });
        }
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ height: '100vh', width: '100vw', position: 'relative' }}
        >
            <div
                onMouseDown={handleMouseDown}
                style={{
                    cursor: dragging ? 'grabbing' : 'grab',
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    backgroundColor: 'lightblue',
                    padding: '10px',
                }}
            >
                Drag me!
            </div>
        </div>
    );
}
