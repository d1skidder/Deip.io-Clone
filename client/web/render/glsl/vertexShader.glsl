attribute vec2 a_position;
uniform float u_angle;
attribute float a_v;

varying float v_v;

void main() {
    float cosA = cos(u_angle);
    float sinA = sin(u_angle);
    mat2 rot = mat2(
        cosA, -sinA,
        sinA, cosA
    );    

    vec2 rot_pos = rot * a_position;

    gl_Position = vec4(rot_pos, 0.0, 1.0);

    v_v = a_v;
}