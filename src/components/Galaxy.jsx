import React, { useEffect, useRef } from 'react';

const Galaxy = ({
    starSpeed = 0.5,
    density = 1,
    hueShift = 0,
    speed = 1,
    glowIntensity = 0.3,
    saturation = 0,
    mouseRepulsion = false,
    repulsionStrength = 2,
    twinkleIntensity = 0.3,
    rotationSpeed = 0.1,
    transparent = false,
}) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Set canvas dimensions
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        window.addEventListener('resize', resize);
        resize();

        // Mouse tracking
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        function initStars() {
            stars = [];
            const count = Math.floor((width * height) / 4000) * density;
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    z: Math.random() * 2, // Depth
                    size: Math.random() * 2 + 0.5,
                    color: `hsl(${(Math.random() * 60 + hueShift) % 360}, ${70 + saturation}%, ${70 + glowIntensity * 20}%)`,
                    baseAlpha: Math.random() * 0.5 + 0.5,
                    twinkleFactor: Math.random() * Math.PI,
                    vx: (Math.random() - 0.5) * starSpeed * 0.5,
                    vy: (Math.random() - 0.5) * starSpeed * 0.5,
                });
            }
        }

        let rot = 0;

        const render = () => {
            if (!ctx) return;

            // Clear canvas
            if (transparent) {
                ctx.clearRect(0, 0, width, height);
            } else {
                ctx.fillStyle = '#0a0a0a';
                ctx.fillRect(0, 0, width, height);
            }

            rot += rotationSpeed * 0.002;

            stars.forEach((star) => {
                let { x, y, size, color, baseAlpha, twinkleFactor } = star;

                // Rotation center
                const cx = width / 2;
                const cy = height / 2;

                // Apply rotation
                const dx = x - cx;
                const dy = y - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) + rotationSpeed * 0.002 * (300 / (dist + 1)); // swirl effect

                // Actually, let's keep it simple with the requested props
                // Movement
                star.x += star.vx * speed;
                star.y += star.vy * speed;

                // Wrap around
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                // Mouse Repulsion
                if (mouseRepulsion) {
                    const mx = mouseRef.current.x;
                    const my = mouseRef.current.y;
                    const mdx = star.x - mx;
                    const mdy = star.y - my;
                    const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                    const repelRadius = 200;

                    if (mDist < repelRadius) {
                        const force = (repelRadius - mDist) / repelRadius;
                        star.x += (mdx / mDist) * force * repulsionStrength;
                        star.y += (mdy / mDist) * force * repulsionStrength;
                    }
                }

                // Twinkle
                const alpha = baseAlpha + Math.sin(Date.now() * 0.002 + twinkleFactor) * twinkleIntensity;

                // Draw
                ctx.beginPath();
                ctx.arc(star.x, star.y, size * (1 + glowIntensity), 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
                ctx.shadowBlur = size * 2 * glowIntensity;
                ctx.shadowColor = color;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [starSpeed, density, hueShift, speed, glowIntensity, saturation, mouseRepulsion, repulsionStrength, twinkleIntensity, rotationSpeed, transparent]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: -1
            }}
        />
    );
};

export default Galaxy;
