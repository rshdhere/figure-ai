precision highp float;

uniform vec2 uResolution; // in pixel
uniform float uTime; // in s
uniform vec2 uCursor; // 0 (left) 0 (top) / 1 (right) 1 (bottom)
uniform float uScrollVelocity; // - (scroll up) / + (scroll down)
uniform sampler2D uTexture; // texture
uniform vec2 uTextureSize; // size of texture
uniform vec2 uQuadSize; // size of texture element
uniform float uBorderRadius; // pixel value
uniform float uMouseEnter; // 0 - 1 (enter) / 1 - 0 (leave)
uniform vec2 uMouseOverPos; // 0 (left) 0 (top) / 1 (right) 1 (bottom)

in vec2 vUv; // 0 (left) 0 (bottom) - 1 (right) 1 (top)
in vec2 vUvCover;

#include './resources/noise.glsl';

out vec4 outColor;

float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
    uv -= disc_center;
    float dist = sqrt(dot(uv, uv));
    return smoothstep(disc_radius + border_size, disc_radius - border_size, dist);
}

void main() {
    vec2 uv = vUv;
    vec2 uvCover = vUvCover;
    
    // Sample the texture
    vec4 texColor = texture(uTexture, uvCover);
    
    // Apply circle effect based on mouse position
    float mouseEffect = circle(uv, uMouseOverPos, 0.5 * uMouseEnter, 0.1);
    
    // Add some noise based on time and scroll
    float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453123);
    float timeEffect = sin(uTime * 2.0 + noise * 6.28) * 0.5 + 0.5;
    
    // Combine effects
    vec2 distortedUV = uvCover;
    distortedUV += (noise * 0.02 - 0.01) * uScrollVelocity;
    distortedUV += (mouseEffect * 0.1 - 0.05) * uMouseEnter;
    
    // Sample the texture with distorted UVs
    vec4 finalColor = texture(uTexture, distortedUV);
    
    // Ensure alpha is properly handled
    finalColor.a *= 1.0;
    
    outColor = finalColor;
}
