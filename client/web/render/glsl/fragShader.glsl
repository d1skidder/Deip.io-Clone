precision highp float;
//uniform vec4 u_color;

varying float v_v;

uniform float u_borderSize;
uniform vec4 u_baseColor;
uniform vec4 u_borderColor;

void main() {
    float mixAmount = step(u_borderSize, v_v);
    gl_FragColor = mix(u_baseColor, u_borderColor, mixAmount);
}
