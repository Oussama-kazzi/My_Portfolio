import React, { useEffect, useRef } from 'react';

const Beams = ({
    speed = 1,
    lightColor = "#ffffff",
    noiseIntensity = 0.5,
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration for the beams
        const beams = [];
        const beamCount = 8; // Number of vertical strips

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initBeams();
        };

        const initBeams = () => {
            beams.length = 0;
            const stripWidth = canvas.width / beamCount;
            for (let i = 0; i < beamCount; i++) {
                beams.push({
                    x: i * stripWidth,
                    width: stripWidth, // Maybe vary this?
                    speed: (Math.random() - 0.5) * speed * 0.5,
                    intensity: Math.random(),
                    phase: Math.random() * Math.PI * 2
                });
            }
        }

        window.addEventListener('resize', resize);
        resize();

        let time = 0;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.fillStyle = '#000';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Use additive blending for light effect
            ctx.globalCompositeOperation = 'screen';

            time += 0.01 * speed;

            beams.forEach((beam, index) => {
                // Update properties
                // beam.x += beam.speed; // Maybe don't move X, just pulse intensity

                const pulse = Math.sin(time + beam.phase) * 0.5 + 0.5; // 0 to 1

                // Draw gradient beam
                const g = ctx.createLinearGradient(beam.x, 0, beam.x + beam.width, 0);

                // Color with alpha based on pulse
                // We want a "beam" look, so maybe soft edges?
                // Actually vertical gradient: Fade in/out vertically

                const beamCenter = beam.x + beam.width / 2;

                // Let's create a vertical gradient for the "light" aspect
                const vertG = ctx.createLinearGradient(0, 0, 0, canvas.height);
                vertG.addColorStop(0, 'rgba(0,0,0,0)');
                vertG.addColorStop(0.5, `${lightColor}40`); // Hex + alpha roughly
                // We need to parse hex to rgba properly to control alpha dynamic

                // Let's simple use globalAlpha for pulsing
                ctx.globalAlpha = 0.1 + pulse * 0.3 * noiseIntensity;

                ctx.fillStyle = lightColor;

                // Draw a rectangle with a gradient mask? 
                // Cleaner: Draw a rect that fades out on sides

                // Create a radial/linear gradient for the beam itself
                const beamG = ctx.createLinearGradient(beam.x, 0, beam.x + beam.width, 0);
                beamG.addColorStop(0, 'rgba(0,0,0,0)');
                beamG.addColorStop(0.2, lightColor);
                beamG.addColorStop(0.5, lightColor);
                beamG.addColorStop(0.8, lightColor);
                beamG.addColorStop(1, 'rgba(0,0,0,0)');

                // Vertical fade
                // It's tricky to do both easily in one rect without masking.
                // Let's just draw the horizontal gradient, it looks like a vertical pillar.

                ctx.fillStyle = beamG;
                ctx.fillRect(beam.x, 0, beam.width * 1.5, canvas.height); // Overlap slightly

                // Reset alpha
                ctx.globalAlpha = 1;
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [speed, lightColor, noiseIntensity]);

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
                opacity: 0.6 // Blend with background
            }}
        />
    );
};

export default Beams;
